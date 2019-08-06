import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},  { path: 'profile', loadChildren: './home/profile/profile.module#ProfilePageModule' },
  { path: 'dates', loadChildren: './home/dates/dates.module#DatesPageModule' },
  { path: 'credit', loadChildren: './home/credit/credit.module#CreditPageModule' },
  { path: 'work', loadChildren: './home/work/work.module#WorkPageModule' },
  { path: 'measure', loadChildren: './home/measure/measure.module#MeasurePageModule' },
  { path: 'design', loadChildren: './home/design/design.module#DesignPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
