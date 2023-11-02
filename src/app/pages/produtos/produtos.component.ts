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
  ngOnInit() {
    this.produtosService.buscarTodos().subscribe(produtos => {
      this.produtos = produtos;
    }, (error) => {
      const {message} = error;
      Swal.fire("Erro de conexão com a aplicação!", message, 'error');
    })
  }

  excluirProduto(id: number) {
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Essa ação não pode ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, deletar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.produtosService.excluir(id).subscribe(produtos => {
          this.produtos = this.produtos.filter((produto) => produto.id != id);
        })
        Swal.fire(
          'Deletado!',
          'O produto foi deletado',
          'success'
        )
      }
    })

  }
}
