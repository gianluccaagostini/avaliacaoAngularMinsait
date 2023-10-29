import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent {
  constructor(private produtoService: ProdutosService){}

  produtoEditarForm = new FormGroup ({
    id: new FormControl(10),
    codigoBarras: new FormControl(''),
    nome: new FormControl(''),
    preco: new FormControl(0),
  })

  editarProduto() {
    console.log("Chegou aqui");
    const produtoEditado:IProduto = this.produtoEditarForm.value as IProduto;
    console.log(produtoEditado);
    this.produtoService.editar().subscribe(result => {
      console.log(produtoEditado);
      Swal.fire('Legal!!', 'Usuário cadastrado com sucesso!', 'success');
      this.produtoEditarForm.reset();
      console.log(produtoEditado);
    })
  }


}
