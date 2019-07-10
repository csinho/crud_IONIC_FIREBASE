import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalvarPage } from './salvar';

@NgModule({
  declarations: [
    SalvarPage,
  ],
  imports: [
    IonicPageModule.forChild(SalvarPage),
  ],
})
export class SalvarPageModule {}
