import express from 'express'
import { MainController } from './controllers/MainController.mjs'

const app = express()

app.use(express.json())

const mainController = new MainController()

app.post('/', mainController.create)
app.get('/', mainController.getAll)
app.get('/:id', mainController.getOne)
app.put('/:id', mainController.update)
app.delete('/:id', mainController.delete)

app.listen(3000, () => console.log('Rodando na 3000'))