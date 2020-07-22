import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { ElektromaterijalComponent } from './components/elektromaterijal/elektromaterijal.component';
import { OPreduzecuComponent } from './components/o-preduzecu/o-preduzecu.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { InstalacioniComponent } from './components/instalacioni/instalacioni.component';
import { KoaksijalniComponent } from './components/koaksijalni/koaksijalni.component';
import { SignalniComponent } from './components/signalni/signalni.component';
import { GumiraniComponent } from './components/gumirani/gumirani.component';
import { EnergetskiComponent } from './components/energetski/energetski.component';
import { BezhalogeniComponent } from './components/bezhalogeni/bezhalogeni.component';
import { TelekomunikacioniComponent } from './components/telekomunikacioni/telekomunikacioni.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    PocetnaComponent,
    ElektromaterijalComponent,
    OPreduzecuComponent,
    KontaktComponent,
    InstalacioniComponent,
    KoaksijalniComponent,
    SignalniComponent,
    GumiraniComponent,
    EnergetskiComponent,
    BezhalogeniComponent,
    TelekomunikacioniComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}