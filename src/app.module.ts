import { Module } from '@nestjs/common'
import { EmailController } from './application/controllers/email.controller'
import { EmailService } from './application/services/email.service'

@Module({
  imports: [],
  controllers: [EmailController],
  providers: [EmailService],
})
export class AppModule {}
