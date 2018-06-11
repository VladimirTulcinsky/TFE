import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TypesApplicationsPage } from './types-applications';

@NgModule({
  declarations: [
    TypesApplicationsPage,
  ],
  imports: [
    IonicPageModule.forChild(TypesApplicationsPage),
    ComponentsModule
  ],
})
export class TypesApplicationsPageModule {}
