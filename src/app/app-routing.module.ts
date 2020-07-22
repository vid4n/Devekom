import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {
    path: '',
    redirectTo: '/pocetna',
    pathMatch: 'full',
  },
  {
    path: 'pocetna',
    component: PocetnaComponent,
  },
  {
    path: 'elektromaterijal',
    component: ElektromaterijalComponent,
  },
  {
    path: 'o-preduzecu',
    component: OPreduzecuComponent,
  },
  {
    path: 'kontakt',
    component: KontaktComponent,
  },
  {
    path: 'instalacioni',
    component: InstalacioniComponent,
  },
  {
    path: 'koaksijalni',
    component: KoaksijalniComponent,
  },
  {
    path: 'signalni',
    component: SignalniComponent,
  },
  {
    path: 'gumirani',
    component: GumiraniComponent,
  },
  {
    path: 'energetski',
    component: EnergetskiComponent,
  },
  {
    path: 'bezhalogeni',
    component: BezhalogeniComponent,
  },
  {
    path: 'telekomunikacioni',
    component: TelekomunikacioniComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
