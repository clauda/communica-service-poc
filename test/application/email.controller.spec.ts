import { Test, TestingModule } from '@nestjs/testing'
import { EmailController } from '../../src/application/controllers/email.controller'
import { EmailService } from '../../src/application/services/email.service'

describe('EmailController', () => {
  let appController: EmailController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EmailController],
      providers: [EmailService],
    }).compile()

    appController = app.get<EmailController>(EmailController)
  })

  describe('send', () => {
    describe('with valid payload', () => {
      it('should return a transactionId', () => {
        const payload = {
          templateId: 'templateId',
          email: 'test@te.st',
        }

        expect(appController.send(payload)).toStrictEqual({
          transactionId: expect.any(String),
          templateId: payload.templateId,
          email: payload.email,
        })
      })
    })

    describe.skip('with invalid payload', () => {
      describe('when templateId or code is missing', () => {
        it('should raise an "Please provide templateId or eventCode" error', () => {
          const payload = { email: 'test@te.st' }

          expect(appController.send(payload)).toThrowError(
            'Please provide templateId or eventCode',
          )
        })
      })
    })
  })
})
