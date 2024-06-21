import { Injectable } from '@angular/core';
import { IProduto, IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[]=[];


  constructor() { }

  obtemCarrinho(){
    return JSON.parse(localStorage.getItem("carrinho")|| "[]");
    console.log(this.itens);
    return this.itens;
    
  }
  adicionarAoCarrinho( produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
  limparCarrinho(){
    this.itens =[];
    localStorage.clear();
  }
  removerProdutoCarrinho(produtoId:number){
    this.itens= this.itens.filter(item => item.identificador !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));


  }
}
