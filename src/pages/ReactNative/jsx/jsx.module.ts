import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JsxPage } from './jsx';

@NgModule({
  declarations: [
    JsxPage,
  ],
  imports: [
    IonicPageModule.forChild(JsxPage),
    ComponentsModule
  ],
})
export class JsxPageModule {}
