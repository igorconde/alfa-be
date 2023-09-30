import { PublicRoute } from '@/core/decorators/public-route.decorator';
import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, MemoryHealthIndicator, TypeOrmHealthIndicator, type HealthCheckResult } from '@nestjs/terminus';

@Controller('health')
export class HealthCheckerController {
  constructor(private healthCheckService: HealthCheckService, private ormIndicator: TypeOrmHealthIndicator, private memory: MemoryHealthIndicator) {}

  @PublicRoute()
  @Get()
  @HealthCheck()
  async check(): Promise<HealthCheckResult> {
    return this.healthCheckService.check([() => this.ormIndicator.pingCheck('database', { timeout: 1500 }), () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024)]);
  }
}
