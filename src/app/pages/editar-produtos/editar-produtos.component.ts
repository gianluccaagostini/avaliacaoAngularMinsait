import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent {
  produtos: IProduto[] = [];
  constructor(private produtoService: ProdutosService, private route: ActivatedRoute) { }

  produtoEditarForm = new FormGroup({
    id: new FormControl(0),
    codigoBarras: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(30)]),
    nome: new FormControl('',[Validators.minLength(3), Validators.maxLength(100)]),
    preco: new FormControl(0,[Validators.minLength(1), Validators.maxLength(10)]),
  })
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.buscarProdutoPorId(id).subscribe(produto => {
        this.produtoEditarForm.setValue({
          id: produto.id || 0,
          codigoBarras: produto.codigoBarras || '',
          nome: produto.nome || '',
          preco: produto.preco || 0
        })
      });
    }
  }

  editar() {
    const produto: IProduto = this.produtoEditarForm.value as IProduto;
    Swal.fire({
      title: 'Você quer salvar as alteraçãoes? ',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Salvar',
      denyButtonText: `Não salvar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.produtoService.editarProduto(produto).subscribe(result => {
          this.produtoEditarForm.reset();
        }, (error) => {
          const { message } = error;
          Swal.fire("Deu erro!!!", message, 'error');
         }
        )
        Swal.fire('Salvo!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Alterações não salvas', '', 'info')
      }
    })
  }


}