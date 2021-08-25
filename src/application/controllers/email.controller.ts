import { Controller } from '@nestjs/common'
import { GrpcMethod, RpcException } from '@nestjs/microservices'
import { EmailMessage } from '../../domain/email.interfaces'
import { EmailService } from '../services/email.service'

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @GrpcMethod('EmailService', 'send')
  send(data: EmailMessage) {
    try {
      const transactionId = this.emailService.send(data)

      return { transactionId, ...data }
    } catch (err) {
      throw new RpcException({
        message: err.message,
        code: 'INTERNAL'
      })
    }
  }
}
