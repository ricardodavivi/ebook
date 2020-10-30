import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'cardapio',
        loadChildren: () => import('../cardapio/cardapio-list/cardapio-list.module').then(m => m.CardapioListPageModule)
      },
      {
        path: 'new/:productId',
        loadChildren: () => import('../curso/curso.module').then( m => m.CursoPageModule)
      },
      {
        path: 'curso-item',
        loadChildren: () => import('../cardapio/curso-item/curso-item.module').then( m => m.CursoItemPageModule)
      },
      
      
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'apps',
        loadChildren: () => import('../apps/apps.module').then( m => m.AppsPageModule)
      },
      
      {
        path: 'user',
        
        children: [
          {
            path: '',
            loadChildren: () => import('../users/user-info/user-info.module')
              .then(m => m.UserInfoPageModule),
          },
          {
            path: 'personal-info',
            loadChildren: () => import('../users/personal-info/personal-info.module').then(m => m.PersonalInfoPageModule)
          },
          {
            path: 'change-password',
            loadChildren: () => import('../users/change-password/change-password.module').then(m => m.ChangePasswordPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/cardapio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/cardapio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
