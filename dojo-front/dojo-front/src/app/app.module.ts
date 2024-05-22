import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from '../shared/guard/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnedRealtiesComponent } from './owned-realties/owned-realties.component';
import { TransactionComponent } from './home/components/transaction/transaction.component';
import { HomeComponent } from './home/home.component';
import { MoneyPipe } from './home/pipes/money.pipe';
import { RealtiesSectionComponent } from './invest/components/realties-section/realties-section.component';
import { InvestComponent } from './invest/invest.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './login/services/auth.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { InstructionComponent } from './instruction/instruction.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TransactionComponent,
    InvestComponent,
    OwnedRealtiesComponent,
    MoneyPipe,
    LoginComponent,
    RealtiesSectionComponent,
    InstructionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: AuthGuard },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
