import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchitectureRnPage } from './architecture-rn';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ArchitectureRnPage,
  ],
  imports: [
    IonicPageModule.forChild(ArchitectureRnPage),
    ComponentsModule
  ],
})
export class ArchitectureRnPageModule { }
