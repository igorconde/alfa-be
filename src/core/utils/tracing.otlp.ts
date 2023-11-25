import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { Resource } from '@opentelemetry/resources';
import * as opentelemetry from '@opentelemetry/sdk-node';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { ConsoleSpanExporter, NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

export async function setupAutoInstrumenting() {
  const exporter = new OTLPTraceExporter({
    url: 'http://localhost:4318/v1/traces',
  });

  const provider = new NodeTracerProvider({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: 'alfa-beta-api',
    }),
  });

  // export spans to console (useful for debugging)
  provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
  // export spans to opentelemetry collector
  provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

  provider.register();
  const sdk = new opentelemetry.NodeSDK({
    traceExporter: exporter,
    instrumentations: [getNodeAutoInstrumentations()],
  });

  try {
    await sdk.start();
    console.log('Tracing initialized');
  } catch (error) {
    console.error('Error initializing tracing', error);
  }

  process.on('SIGTERM', async () => {
    try {
      await sdk.shutdown();
      console.log('Tracing terminated');
    } catch (error) {
      console.error('Error terminating tracing', error);
    } finally {
      process.exit(0);
    }
  });
}
