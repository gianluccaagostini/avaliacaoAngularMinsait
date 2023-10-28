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
}
