import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RealtyCardComponent } from './component/realty-card/realty-card.component';

@NgModule({
  declarations: [RealtyCardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [RealtyCardComponent],
})
export class SharedModule {}
