import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { RealtyCardComponent } from './component/realty-card/realty-card.component';

@NgModule({
  declarations: [RealtyCardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [RealtyCardComponent],
})
export class SharedModule {}
