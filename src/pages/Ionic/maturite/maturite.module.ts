import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaturitePage } from './maturite';

@NgModule({
  declarations: [
    MaturitePage,
  ],
  imports: [
    IonicPageModule.forChild(MaturitePage),
    ComponentsModule
  ],
})
export class MaturitePageModule {}
