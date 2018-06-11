import { TypesApplicationsPageModule } from './../TypesApplications/types-applications/types-applications.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    ComponentsModule,
    TypesApplicationsPageModule
  ],
})
export class HomePageModule {}
