import 'reflect-metadata'
import express from 'express'
import './database'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

export { app }
