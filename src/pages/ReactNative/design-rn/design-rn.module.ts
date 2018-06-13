import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DesignRnPage } from './design-rn';

@NgModule({
  declarations: [
    DesignRnPage,
  ],
  imports: [
    IonicPageModule.forChild(DesignRnPage),
    ComponentsModule
  ],
})
export class DesignRnPageModule {}
