import { Routes } from '@angular/router';
import { Shopecomponent } from './shopcomponent/shopecomponent'; 
import { HeaderComponent } from './hcomponent/hcomponent';
import { CadComponent } from './cadastrocomponent/cadastrocomponent';

export const routes: Routes = [
    // 1. ADICIONE ESTA LINHA AQUI EM CIMA:
    // Ela diz: "Se o usuário acessar o site puro, jogue ele direto para a página 'header'"
    { path: '', redirectTo: 'header', pathMatch: 'full' },

    { path: 'shop', component: Shopecomponent },
    { path: 'header', component: HeaderComponent },
    {path:  'cadastro',component: CadComponent },

];