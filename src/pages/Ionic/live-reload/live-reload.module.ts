import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveReloadPage } from './live-reload';

@NgModule({
  declarations: [
    LiveReloadPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveReloadPage),
  ],
})
export class LiveReloadPageModule {}
