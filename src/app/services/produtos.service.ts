import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  api = 'http://localhost:8080/api/produtos';
  constructor(private httpCliente: HttpClient) { }

  buscarTodos() {
    return this.httpCliente.get<IProduto[]>(this.api);
  }
  cadastrarProduto(produto: IProduto) {
    return this.httpCliente.post(this.api, produto);
  }

  editar(produto: IProduto) {
    return this.httpCliente.put(this.api, produto);
  }
  excluir(id: number) {
    return this.httpCliente.delete<IProduto>(`http://localhost:8080/api/produtos/${id}`)
  }


}
