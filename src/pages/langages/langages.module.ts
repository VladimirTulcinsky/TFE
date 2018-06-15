import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LangagesPage } from './langages';

@NgModule({
  declarations: [
    LangagesPage,
  ],
  imports: [
    IonicPageModule.forChild(LangagesPage),
    ComponentsModule
  ],
})
export class LangagesPageModule {}
