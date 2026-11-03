import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
<!-- Cabeçalho fixo -->
   <!-- Cabeçalho fixo -->
    <header style="
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%; 
  display: flex; 
  align-items: center; 
  justify-content: flex-start; /* Alinhamento: flex-start (esquerda), center (centro), flex-end (direita) */
  padding: 10px 20px;
  box-sizing: border-box;
  z-index: 1000;
">
    <img
    src="assets/logo-alves.png"
    alt="Logo Alves Eletrônicos"
    style="
      width: 100%;
      max-width: 320px; /* Aumenta o tamanho máximo em computadores */
      height: auto;
      object-fit: contain;
      /* Caso queiras mover milimetricamente para o lado ou cima/baixo: */
      margin-left: 0px; 
      margin-top: -110px;
    "
>
      
  

    </header>

    <main style="margin-top: 50px; padding: 0px; background-color: #f2f2f2;">
      <router-outlet></router-outlet>
    </main>
  `
})

export class AppComponent {
  title = 'Alves';
}
