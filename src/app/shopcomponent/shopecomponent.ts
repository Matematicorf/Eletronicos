import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wjbeukjncvxletodzbsa.supabase.co';
const supabaseKey = 'sb_publishable_nfWQt8cwF4st_S6mzLolIg_JU0hleEP';
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-shopecomponent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopecomponent.html',
  styleUrls: ['./shopecomponent.css']
})
export class Shopecomponent implements OnInit {
  produtos: any[] = [];
  carregando: boolean = true;
  erroMensagem: string | null = null;
  
  // Variável que guarda o texto digitado na busca
  termoPesquisa: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.buscarProdutos();
  }

  // Getter que filtra a lista em tempo real pelo campo 'titulo'
  get produtosFiltrados() {
    if (!this.termoPesquisa.trim()) {
      return this.produtos;
    }
    return this.produtos.filter(p => 
      p.titulo?.toLowerCase().includes(this.termoPesquisa.toLowerCase())
    );
  }

  async buscarProdutos() {
    try {
      this.carregando = true;
      this.erroMensagem = null;

      const { data, error } = await supabase
        .from('cadastro')
        .select('*');

      if (error) throw error;
      
      this.produtos = data || [];
    } catch (error: any) {
      console.error('Erro ao carregar produtos:', error);
      this.erroMensagem = error.message || 'Erro desconhecido ao conectar com o banco de dados.';
    } finally {
      this.carregando = false;
      this.cdr.detectChanges(); 
    }
  }
}