import { Injectable } from '@nestjs/common'
import { EmailMessage } from '../../domain/email.interfaces'

enum EventType {
  REPORT_CREATED = 'REPORT_CREATED',
}

@Injectable()
export class EmailService {
  send(data: EmailMessage): string {
    const { templateId, eventCode, email, templateData } = data

    if (!email) {
      throw new Error('Missing email')
    }

    let template = templateId

    if (!templateId && !eventCode) {
      throw new Error('Please provide templateId or eventCode')
    }

    if (eventCode) {
      template = EventType[eventCode]
    }

    return 'transactionId'
  }
}
