import express from "express";

const app = express()

// http:localhost:3333/
app.get('/', (request, response) => {
  return response.send("Seja bem vindo a minha API!")
})

// http:localhost:3333/techs
app.get('/techs', (request, response) => {
  return response.send(['HTML', 'CSS', 'Javascript', 'Node', 'React', 'SQL'])
})

app.get('/players', (request, response) => {
  return response.send(['Cristiano Ronaldo', 'Neymar', 'Messi'])
})

// Executa a API em um servidor na porta 3333
app.listen(3333)
