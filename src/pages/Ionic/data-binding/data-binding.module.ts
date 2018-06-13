import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataBindingPage } from './data-binding';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    DataBindingPage,
  ],
  imports: [
    IonicPageModule.forChild(DataBindingPage),
    ComponentsModule
  ],
})
export class DataBindingPageModule { }
