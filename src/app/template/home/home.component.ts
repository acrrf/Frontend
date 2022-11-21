import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto:string = 'assets/img/crud.png'
  dataValidade = '2021-12-31'

  constructor() { 
    //this.anuncio = `O ` + this.nomeProduto + `está em promoção`;
    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('anuncio: ', this.anuncio);
    console.log('Id: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);
    //var variavel1;
    //let variavel2;
    /*const variavel3 : number = 10;*/
    /*var idade = 15;
    console.log ('Minha idade é: ', idade);*/
    /*let idadeLet = 20;
    console.log ('Sua idade é: ', idadeLet);*/

    /*function imprimeIdade() {
      var idade = 40;
      console.log('Minha idade é: ', idade);
    }*/

    /*function imprimeIdade() {
      let idade = 30;
      console.log('Sua idade é: ', idade);
    }*/
    /*function imprimeIdadeFor() {
      for(var idade = 30; idade <= 40; idade ++){
        console.log('Idade dentro do for: ', idade);        
      }
      console.log('Idade fora do for: ', idade);
    }*/
    /*let idade = 12
    function imprimeIdadeFor() {
      for(let idade = 30; idade <= 40; idade ++){
        console.log('Idade dentro do for: ', idade);        
      }
      console.log('Idade fora do for: ', idade);
    }*/
    //imprimeIdade();
    //imprimeIdadeFor();

    //EXERCÍCIOS DE VARIÁVEIS
    //ex.01
    /*var variavel = 0;
    var variavel = 10;
    console.log('variável', variavel);
    function funcao(){
      var outra_variavel = 20;
      var outra_variavel = 30;
      console.log('outra_variavel:', outra_variavel);*/

    //ex.02
    /*let variavel = 0;
    let variavel = 10;
    console.log('variável', variavel);
    function funcao(){
      let outra_variavel = 20;
      let outra_variavel = 30;
      console.log('outra_variavel:', outra_variavel);
    }

    funcao();*/

    //ex.03
  /*var a = 10;
    let b = 20;
    function bar() {
      var a = 30;
      let b = 40;
      if(true) {
        var a = 50;
        let b = 60;
        console.log('Variável a dentro do if', a);
        console.log('Variável b dentro do if', b);
      }
      console.log('Variável a dentro da função', a);
      console.log('Variável b dentro da função', b);
    }
    bar();
    console.log('Variável a fora da função', a);
    console.log('Variável b fora da função', b);*/

    //ex.04
    /*let a = 1;
    function bar() {
      console.log('Variável a: ', a);
      let b = 2;
      if(true) {
        let c = 3;
        let a = 4;
        console.log('Variável a dentro do if: ', a);
        console.log('Variável b dentro do if: ', b);
        console.log('Variável c dentro do if: ', c);        
      }
      console.log('Variável a fora do if: ', a);
      console.log('Variável b fora do if: ', b);
      //console.log(c);
    }
    bar();*/

    //ex.05
    /*var a = 5;
    var b = 10;
    if(a = 5) {
      let a = 4;
      var b = 1;
      console.log('Variável a dentro do if: ', a);
      console.log('Variável b dentro do if: ', b);
    }
    console.log('Variável a fora do if: ', a);
    console.log('Variável b fora do if: ', b);*/

    
  }    

  ngOnInit(): void {}

}
