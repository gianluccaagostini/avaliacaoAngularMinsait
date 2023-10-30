import { Component } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduto } from 'src/app/interfaces/produto';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent {

  constructor(private produtoService: ProdutosService){}

  produtoForm = new FormGroup ({
    id: new FormControl(0),
    codigoBarras: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required),
    preco: new FormControl(0, Validators.required),
  })
  cadastrar(){
    const produto:IProduto = this.produtoForm.value as IProduto;
    this.produtoService.cadastrarProduto(produto).subscribe(result => {
      Swal.fire('Legal!!', 'Produto cadastrado com sucesso!', 'success');
      this.produtoForm.reset();
    }, (error) => {
      const {message} = error;

      Swal.fire("ERRO!", 'Código de Barras já existe', 'error');
    }
    )

  }



}
