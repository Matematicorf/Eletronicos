import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
<!-- Cabeçalho fixo -->
   <!-- Cabeçalho fixo -->
    <header style="position: fixed; top: 0; left: 0; width: 100%; height: 80px; background-color:  #f1f5f9; display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 0 20px;">
      
      <img
        src="/assets/logo-alves.png"
        alt="Logo Alves Eletrônicos"
        style="
          /* --- TAMANHO --- */
          height: 280px;             /* Ajuste a altura exata aqui */
          width: auto;              /* Deixe auto para não distorcer a imagem */
          object-fit: contain;
          transform: translate(-500px, 1px); /* X: -500px (esquerda) | Y: 15px (baixo) */
          /* Opcional para ajuste milimétrico de posição */
          position: relative;
          top: 0px;                 /* Ajuste fino vertical */
          left: 0px;                /* Ajuste fino horizontal */
          
          
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
