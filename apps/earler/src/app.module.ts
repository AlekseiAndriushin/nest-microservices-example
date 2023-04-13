import { DatabaseModule } from '@app/common';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [DatabaseModule, ReservationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
