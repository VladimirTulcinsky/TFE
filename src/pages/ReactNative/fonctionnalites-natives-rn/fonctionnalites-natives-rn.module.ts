import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FonctionnalitesNativesRnPage } from './fonctionnalites-natives-rn';

@NgModule({
  declarations: [
    FonctionnalitesNativesRnPage,
  ],
  imports: [
    IonicPageModule.forChild(FonctionnalitesNativesRnPage),
    ComponentsModule
  ],
})
export class FonctionnalitesNativesRnPageModule {}
