import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveReloadPage } from './live-reload';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    LiveReloadPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveReloadPage),
    ComponentsModule
  ],
})
export class LiveReloadPageModule {}
