import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StateManagementPage } from './state-management';

@NgModule({
  declarations: [
    StateManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(StateManagementPage),
    ComponentsModule
  ],
})
export class StateManagementPageModule {}
