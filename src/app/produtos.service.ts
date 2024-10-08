import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[]= produtos;
  constructor() { }

  getAll(): IProduto[] {
    return this.produtos;
  }

  getOne(id: number): IProduto | undefined {
    return this.produtos.find(produto => produto.identificador === id);
  }
}
