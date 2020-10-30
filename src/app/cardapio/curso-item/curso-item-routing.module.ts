import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoItemPage } from './curso-item.page';

const routes: Routes = [
  {
    path: '',
    component: CursoItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoItemPageRoutingModule {}
