import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CadastrarProdutosComponent } from './pages/cadastrar-produtos/cadastrar-produtos.component';
import { EditarProdutosComponent } from './pages/editar-produtos/editar-produtos.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'produtos', component: ProdutosComponent
  },
  {
    path: 'produtos/cadastrar', component: CadastrarProdutosComponent
  },
  {
    path: 'produtos/editar/:id', component: EditarProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
