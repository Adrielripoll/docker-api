import express from 'express'
import { config } from 'dotenv'
import { MainController } from './controllers/MainController.mjs'

const app = express()

app.use(express.json())

config()

const mainController = new MainController()

app.post('/', mainController.create)
app.get('/', mainController.getAll)
app.get('/:id', mainController.getOne)
app.put('/:id', mainController.update)
app.delete('/:id', mainController.delete)

app.listen(process.env.PORT, () => console.log(`Rodando na ${process.env.PORT}`))