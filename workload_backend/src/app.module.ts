import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { WorkloadModule } from './workload/workload.module';
import { RupModule } from './rup/rup.module';
import { GroupModule } from './group/group.module';
import { CafedraModule } from './cafedra/cafedra.module';
import { EducationYearModule } from './education-year/education-year.module';
import { IndividialPlanModule } from './individial-plan/individial-plan.module';
import { AnnoucementModule } from './annoucement/annoucement.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    WorkloadModule,
    RupModule,
    GroupModule,
    CafedraModule,
    EducationYearModule,
    IndividialPlanModule,
    AnnoucementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
