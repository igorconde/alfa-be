import { Resource } from '@opentelemetry/resources';
import { NodeTracerProvider, ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import * as opentelemetry from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';

export function setupAutoInstrumenting() {
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

  sdk
    .start()
    .then(() => {
      console.log('Tracing initialized');
    })
    .catch((error) => console.log('Error initializing tracing', error));

  process.on('SIGTERM', () => {
    sdk
      .shutdown()
      .then(() => console.log('Tracing terminated'))
      .catch((error) => console.log('Error terminating tracing', error))
      .finally(() => process.exit(0));
  });
}
