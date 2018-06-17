import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConclusionPage } from './conclusion';

@NgModule({
  declarations: [
    ConclusionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConclusionPage),
    ComponentsModule
  ],
})
export class ConclusionPageModule {}
