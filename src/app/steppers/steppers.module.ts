import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteppersComponent } from './steppers.component';
import { TesteComponent } from './steppers.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SteppersComponent,
    TesteComponent
    ],
  exports: [
    SteppersComponent,
    TesteComponent
  ]
})
export class SteppersModule { }
