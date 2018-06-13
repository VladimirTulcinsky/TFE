import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataBindingRnPage } from './data-binding-rn';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    DataBindingRnPage,
  ],
  imports: [
    IonicPageModule.forChild(DataBindingRnPage),
    ComponentsModule
  ],
})
export class DataBindingRnPageModule {}
