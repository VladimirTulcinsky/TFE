import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComparaisonPage } from './comparaison';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ComparaisonPage,
  ],
  imports: [
    IonicPageModule.forChild(ComparaisonPage),
    ComponentsModule
  ],
})
export class ComparaisonPageModule {}
