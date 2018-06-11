import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FonctionnalitesNativesPage } from './fonctionnalites-natives';

@NgModule({
  declarations: [
    FonctionnalitesNativesPage,
  ],
  imports: [
    IonicPageModule.forChild(FonctionnalitesNativesPage),
    ComponentsModule
  ],
})
export class FonctionnalitesNativesPageModule {}
