import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduto } from '../interfaces/produto';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  api = 'http://localhost:8080/api/produtos';

  produtos: IProduto[] = [];
  constructor(private httpCliente: HttpClient) { }

  buscarTodos() {
    return this.httpCliente.get<IProduto[]>(this.api);
  }
  cadastrarProduto(produto: IProduto) {
    return this.httpCliente.post(this.api, produto);
  }

  buscarProdutoPorId(id: string) {
    return this.httpCliente.get<IProduto>(`http://localhost:8080/api/produtos/${id}`);
  }

  editarProduto(produto: IProduto) {
    return this.httpCliente.put(this.api, produto);
  }

  excluir(id: number) {
    return this.httpCliente.delete<IProduto>(`http://localhost:8080/api/produtos/${id}`)
  }


}
