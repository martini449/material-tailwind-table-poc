import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PocTableComponent} from './poc-table/poc-table.component';
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    PocTableComponent
  ],
  exports: [
    PocTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PocTableModule {
}
