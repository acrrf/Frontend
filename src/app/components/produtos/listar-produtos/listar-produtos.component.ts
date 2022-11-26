import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.model';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  objetoModelo = {
    nome: 'Fatima',
    idade:18,
    altura: 1.56,
    graduado: true
  };

  listaProdutos: IProduto[] = [];
  
  constructor(private produtosService: ProdutosService) {
    
   }

  ngOnInit(): void {
    this.carregarProdutos();
  }
  carregarProdutos(): void{
    this.produtosService.buscarTodos().subscribe(retorno =>{
      this.listaProdutos = retorno;
    })
  }

}
