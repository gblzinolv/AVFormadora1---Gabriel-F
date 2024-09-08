import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  aluno = {
    nome: 'Gabriel de Oliveira Fernandes',
    matricula: '22204441',
    foto: 'assets/img/img-carteirinha.jpg' // O caminho da foto pode ser um link externo ou interno
  };

  constructor() {}
}