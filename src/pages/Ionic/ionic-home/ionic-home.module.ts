import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicHomePage } from './ionic-home';

@NgModule({
  declarations: [
    IonicHomePage,
  ],
  imports: [
    IonicPageModule.forChild(IonicHomePage),
    ComponentsModule
  ],
})
export class IonicHomePageModule {}
