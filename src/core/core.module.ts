import { IsExist } from '@/core/validators/is-exists.validator';
import { IsNotExist } from '@/core/validators/is-not-exists.validator';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [IsExist, IsNotExist],
  exports: [IsExist, IsNotExist],
})
export class CoreModule {}
