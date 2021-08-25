import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { join } from 'path'
import { AppModule } from './app.module'

async function bootstrap() {
  const service = await NestFactory.create(AppModule)

  service.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      package: 'communication.email',
      protoPath: join(__dirname, '..', 'src/email.proto'),
    },
  })

  service.startAllMicroservices()
}

bootstrap()
