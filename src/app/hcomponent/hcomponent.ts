import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { createClient } from '@supabase/supabase-js';

// 1. CREDENCIAIS E INICIALIZAÇÃO DO SUPABASE
const supabaseUrl = 'https://wjbeukjncvxletodzbsa.supabase.co';
const supabaseKey = 'sb_publishable_nfWQt8cwF4st_S6mzLolIg_JU0hleEP';
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './hcomponent.html',
  styleUrls: ['./hcomponent.css']
})
export class HeaderComponent {

  dadosLogin = {
    email: '',
    senha: ''
  };

  constructor(private router: Router) {}

 async fazerLogin() {
    console.log('Botão ENTRA clicado!'); // <--- Testa se o botão está funcionando

    if (!this.dadosLogin.email || !this.dadosLogin.senha) {
      alert('Por favor, preencha o e-mail e a senha.');
      return;
    }

    try {
      console.log('Tentando conectar ao Supabase com o e-mail:', this.dadosLogin.email);

      // Faz a consulta
      const { data, error } = await supabase
        .from('cadastro')
        .select('*')
        .eq('email', this.dadosLogin.email.trim());

      // SE HOUVER ERRO DE CONEXÃO DO SUPABASE:
      if (error) {
        console.error('Erro retornado pelo Supabase:', error);
        alert('Erro de conexão com o banco de dados: ' + error.message);
        return;
      }

      console.log('Dados recebidos do Supabase:', data);

      if (!data || data.length === 0) {
        alert('E-mail não cadastrado!');
        return;
      }

      const usuario = data[0];

      if (usuario.senha === this.dadosLogin.senha) {
        alert('Login realizado com sucesso!');
        this.router.navigate(['/shop']);
      } else {
        alert('Senha incorreta! Tente novamente.');
      }

    } catch (err) {
      console.error('Erro crítico no bloco try/catch:', err);
      alert('Erro inesperado ao tentar fazer login.');
    }
  }}