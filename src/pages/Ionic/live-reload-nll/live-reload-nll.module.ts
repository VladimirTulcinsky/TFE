import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveReloadNllPage } from './live-reload-nll';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    LiveReloadNllPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveReloadNllPage),
    ComponentsModule
  ],
})
export class LiveReloadNllPageModule { }
