import express from 'express';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Carrega as variáveis do arquivo .env
dotenv.config();

const app = express();
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';

// Inicializa a conexão com o Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Rota para buscar os produtos do banco de dados
app.get('/produtos', async (req, res) => {
  const { data, error } = await supabase
    .from('Controles tvs lg')
    .select('*');

  if (error) {
    return res.status(400).json({ erro: error.message });
  }

  return res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Servidor rodando com sucesso na porta ${PORT}!`);
});