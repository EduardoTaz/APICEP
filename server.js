const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors()); // Habilita CORS para todas as requisições

// Servindo o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para buscar informações do CEP
app.get('/cep/:cep', async (req, res) => {
    const { cep } = req.params;
    console.log("CEP recebido no servidor:", cep);

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;
        
        if (data.erro) {
            return res.status(404).json({ error: 'CEP não encontrado' });
        }

        console.log("Resposta da API:", data);
        res.json(data); // Retorna os dados corretamente
    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        res.status(500).json({ error: 'Erro ao buscar CEP' });
    }
});

// Iniciando o servidor
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}

module.exports = app;
