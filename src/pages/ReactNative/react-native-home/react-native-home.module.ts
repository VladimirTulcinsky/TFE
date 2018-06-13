import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReactNativeHomePage } from './react-native-home';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ReactNativeHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ReactNativeHomePage),
    ComponentsModule
  ],
})
export class ReactNativeHomePageModule {}
