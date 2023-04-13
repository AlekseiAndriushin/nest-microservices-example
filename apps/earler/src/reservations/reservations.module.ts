import { DatabaseModule, LoggerModule } from '@app/common';
import { Module } from '@nestjs/common';
import {
  ReservationDocument,
  ReservationSchema,
} from 'apps/earler/src/reservations/models/reservation.schema';
import { ReservationsRepository } from 'apps/earler/src/reservations/reservations.repository';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ReservationDocument.name, schema: ReservationSchema },
    ]),
    LoggerModule,
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
