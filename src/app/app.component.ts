import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <!-- Cabeçalho fixo -->
  <header style="background-color: #f4f4f4; padding: 10px; text-align: center;">
  <h1 style="font-family: Arial, sans-serif !important; margin: 0;">Alves eletrônicos</h1>
</header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  title = 'Alves eletrônicos';
}
