import { connection } from "../config.mjs"

export class MainController {

    async create(request, response){
        const data = request.body

        const query = 'INSERT INTO `users` (email, password) VALUES (?, ?)'

        connection.query(query, [data.email, data.password], (error, results, fields) => {
            return response.status(201).json({ message: 'Usuário criado com sucesso!'})      
        })

    }

    async getAll(request, response){
        const query = 'SELECT * FROM `users`'

        connection.query(query, (error, results, fields) => {
            return response.status(201).json(results)
        })
    }

    async getOne(request, response){
        const { id } = request.params
        const query = 'SELECT * FROM `users` WHERE id = ?'

        connection.query(query, [id], (error, results, fields) => {
            return response.status(200).json(results[0])
        })
    }

    async update(request, response){
        const data = request.body
        const { id } = request.params

        const query = 'UPDATE `users` SET email = ?, password = ? WHERE id = ?'

        connection.query(query, [data.email, data.password, id], (error, results, fields) => {
            return response.status(204)
        })
    }

    async delete(request, response){
        const { id } = request.params

        const query = 'DELETE FROM `users` WHERE id = ?'

        connection.query(query, [id], (error, results, fields) => {
            return response.status(200).send({ message: 'Usuário deletado com sucesso!'})
        })
    }
}

