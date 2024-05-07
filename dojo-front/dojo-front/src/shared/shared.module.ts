import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RealtyCardComponent } from './component/realty-card/realty-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [RealtyCardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [RealtyCardComponent],
})
export class SharedModule {}
