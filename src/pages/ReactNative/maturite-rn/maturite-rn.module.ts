import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaturiteRnPage } from './maturite-rn';

@NgModule({
  declarations: [
    MaturiteRnPage,
  ],
  imports: [
    IonicPageModule.forChild(MaturiteRnPage),
    ComponentsModule
  ],
})
export class MaturiteRnPageModule {}
