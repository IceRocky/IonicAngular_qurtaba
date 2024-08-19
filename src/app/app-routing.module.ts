import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./container/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./container/bookings/bookings.module').then(m => m.BookingsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./container/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'quick-service',
    loadChildren: () => import('./components/quick-service/quick-service.module').then(m => m.QuickServicePageModule)
  },
  {
    path: 'clean-service',
    loadChildren: () => import('./components/clean-service/clean-service.module').then( m => m.CleanServicePageModule)
  },
  {
    path: 'home-clean',
    loadChildren: () => import('./pages/home-clean/home-clean.module').then( m => m.HomeCleanPageModule)
  },
  {
    path: 'deep-cleaning',
    loadChildren: () => import('./pages/deep-cleaning/deep-cleaning.module').then( m => m.DeepCleaningPageModule)
  },
  {
    path: 'data-time',
    loadChildren: () => import('./pages/data-time/data-time.module').then( m => m.DataTimePageModule)
  },
  {
    path: 'home-clean1',
    loadChildren: () => import('./pages/home-clean1/home-clean1.module').then( m => m.HomeClean1PageModule)
  },
  {
    path: 'apartment',
    loadChildren: () => import('./pages/apartment/apartment.module').then( m => m.ApartmentPageModule)
  },
  {
    path: 'villa',
    loadChildren: () => import('./pages/villa/villa.module').then( m => m.VillaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
