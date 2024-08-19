import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    component: TabsPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../container/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'bookings',
        loadChildren: () => import('../container/bookings/bookings.module').then(m => m.BookingsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../container/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'quick-service',
        loadChildren: () => import('../components/quick-service/quick-service.module').then(m => m.QuickServicePageModule)
      },
      {
        path: 'clean-service',
        loadChildren: () => import('../components/clean-service/clean-service.module').then( m => m.CleanServicePageModule)
      },
      {
        path: 'home-clean',
        loadChildren: () => import('../pages/home-clean/home-clean.module').then( m => m.HomeCleanPageModule)
      },


    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
