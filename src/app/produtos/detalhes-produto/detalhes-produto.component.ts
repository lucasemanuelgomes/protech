import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos.service';
import { IProduto, IProdutoCarrinho } from '../../produtos';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NotificacaoService } from '../../notificacao.service';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { CarrinhoService } from '../../carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent implements OnInit{
    produto: IProduto | undefined;
    quantidade = 1;

  constructor(private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService:NotificacaoService,
    private carrinhoSerice: CarrinhoService
    ){
      
  }
  ngOnInit(): void {
    const routeParams= this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto= this.produtosService.getOne(produtoId);
    
  }
  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho")
    const produto: IProdutoCarrinho={
      ...this.produto!,
      quantidade : this.quantidade
    } 
    this.carrinhoSerice.adicionarAoCarrinho(produto)
  }

}
