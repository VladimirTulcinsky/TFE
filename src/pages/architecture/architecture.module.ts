import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchitecturePage } from './architecture';

@NgModule({
  declarations: [
    ArchitecturePage,
  ],
  imports: [
    IonicPageModule.forChild(ArchitecturePage),
    ComponentsModule
  ],
})
export class ArchitecturePageModule {}
