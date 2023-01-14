import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PadreComponent,
    Hijo1Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PadreComponent,
    Hijo1Component
  ]
})
export class PrincipalModule { }
