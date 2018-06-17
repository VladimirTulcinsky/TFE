import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReloadPage } from './reload';

@NgModule({
  declarations: [
    ReloadPage,
  ],
  imports: [
    IonicPageModule.forChild(ReloadPage),
    ComponentsModule
  ],
})
export class ReloadPageModule {}
