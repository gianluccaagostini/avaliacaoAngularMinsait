import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  produtos: IProduto[] = [];
  constructor(private produtosService: ProdutosService) {}
  produtoForm = new FormGroup ({
    id: new FormControl(0),
    codigoBarras: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required),
    preco: new FormControl(0, Validators.required),
  })
  ngOnInit() {
    this.produtosService.buscarTodos().subscribe(produtos => {
      this.produtos = produtos;
    }, (error) => {
      console.log(error);
    })
    console.log(this.produtos);
  }

  editarProduto(id: number) {
    const produto:IProduto = this.produtoForm.value as IProduto;
    console.log(produto);
    /*this.produto.editar().subscribe(result => {
      console.log(produto);
      Swal.fire('Legal!!', 'Usuário cadastrado com sucesso!', 'success');
      this.produtoForm.reset();
      console.log(produto);
    })*/
  }

  excluirProduto(id: number) {
    this.produtosService.excluir(id).subscribe(produtos => {
      this.produtos = this.produtos.filter((produto) => produto.id != id);
    console.log(this.produtos);
    })
  }
}
