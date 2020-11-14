import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SplittersModuleModule } from './splitters-module/splitters-module.module';
import { SplittersModule } from './splitters/splitters.module';
import { SplitterService } from './splitter/splitter.service';

@Module({
  imports: [SplittersModuleModule, SplittersModule],
  controllers: [AppController],
  providers: [AppService, SplitterService],
})
export class AppModule {}
