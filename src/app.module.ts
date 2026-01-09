import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { OrganizationController } from './organization/organization.controller';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [OrganizationController],
  providers: [AppService],
  
})
export class AppModule {}
