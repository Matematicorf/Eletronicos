import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { createClient } from '@supabase/supabase-js';

// 1. CREDENCIAIS E INICIALIZAÇÃO DO SUPABASE
const supabaseUrl = 'https://wjbeukjncvxletodzbsa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqYmV1a2puY3Z4bGV0b2R6YnNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3NzcyMDIsImV4cCI6MjA5OTM1MzIwMn0.xCAf2N54sDcr3ZIngoMXnEj9SUbwWVzkx5D2EQZ2PSA';

const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-cad',
  standalone: true,
  imports: [RouterLink, FormsModule], // Importação corrigida aqui para bater com a linha 3
  templateUrl: './cadastrocomponent.html',
  styleUrls: ['./cadastrocomponent.css']
})
export class CadComponent {

  // Objeto que armazena os dados digitados na tela
  novoContato = {
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    senha: '',
    login: ''
  };

  // --- FUNÇÃO DO SUPABASE ---
  async salvarNoSupabase() {
    // Validação simples de campos obrigatórios
    if (!this.novoContato.nome || !this.novoContato.email) {
      alert('Por favor, preencha pelo menos o Nome e o E-mail.');
      return;
    }

    try {
      // Envia os dados para a tabela do Supabase
      const { data, error } = await supabase
        .from('cadastro') 
        .insert([
          {
            nome: this.novoContato.nome,
            cpf: this.novoContato.cpf,
            telefone: this.novoContato.telefone,
            email: this.novoContato.email,
            senha: this.novoContato.senha,
            login: this.novoContato.login
          }
        ]);

      if (error) {
        throw error;
      }

      alert('Cliente cadastrado com sucesso no Supabase!');

      // Limpa o formulário após o sucesso
      this.novoContato = {
        nome: '',
        cpf: '',
        telefone: '',
        email: '',
        senha: '',
        login: ''
      };

    } catch (error) {
      console.error('Erro ao salvar no Supabase: ', error);
      alert('Erro ao cadastrar cliente no Supabase. Verifique o console.');
    }
  }
}