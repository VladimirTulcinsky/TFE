import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailViewPage } from './detail-view';

@NgModule({
  declarations: [
    DetailViewPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailViewPage),
    ComponentsModule
  ],
})
export class DetailViewPageModule {}
