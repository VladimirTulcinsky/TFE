import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TypeScriptPage } from './type-script';

@NgModule({
  declarations: [
    TypeScriptPage,
  ],
  imports: [
    IonicPageModule.forChild(TypeScriptPage),
    ComponentsModule
  ],
})
export class TypeScriptPageModule {}
