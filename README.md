# Consulta de CEP - API

Este projeto é uma API em **Node.js** usando **Express** para consultar informações de um CEP através da API do [ViaCEP](https://viacep.com.br/).

## 🚀 Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [Cors](https://www.npmjs.com/package/cors)

## 📌 Pré-requisitos
Antes de começar, você precisa ter instalado em sua máquina:
- **Node.js** 
- **NPM** 

## 📦 Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Acesse o diretório do projeto:
   ```sh
   cd nome-do-repositorio
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```

## 🚀 Como executar
1. Inicie o servidor:
   ```sh
   npm start
   ```

2. O servidor será iniciado na porta **3000** por padrão.

## 📡 Rotas da API

### 🔍 Consultar CEP
**Endpoint:** `GET /cep/:cep`

**Exemplo de requisição:**
```sh
GET http://localhost:3000/cep/01001000
```

**Exemplo de resposta:**
```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP"
}
```

**Erros possíveis:**
| Código | Mensagem |
|--------|---------|
| 400 | "CEP inválido. Deve conter exatamente 8 dígitos numéricos." |
| 404 | "CEP não encontrado" |
| 500 | "Erro interno ao buscar CEP" |

