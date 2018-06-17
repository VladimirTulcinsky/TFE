import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroductionPage } from './introduction';

@NgModule({
  declarations: [
    IntroductionPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroductionPage),
    ComponentsModule
  ],
})
export class IntroductionPageModule {}
