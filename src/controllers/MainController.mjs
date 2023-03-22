import { connection } from "../config.mjs"

export class MainController {

    async create(request, response){
        const data = request.body

        const query = 'INSERT INTO `users` (email, password) VALUES (?, ?)'

        connection.query(query, [data.email, data.password], (error, results, fields) => {
            console.log(results)            
        })

        connection.end()
    }

    async getAll(request, response){
        const query = 'SELECT * FROM `users`'

        connection.query(query, (error, results, fields) => {
            return response.status(201).json(results)
        })
        connection.end()
    }

    async getOne(request, response){
        const { id } = request.params
        const query = 'SELECT * FROM `users` WHERE id = ?'

        connection.query(query, [id], (error, results, fields) => {
            return response.status(200).json(results[0])
        })
        connection.end()
    }

    async update(request, response){
        const data = request.body
        const { id } = request.params

        const query = 'UPDATE `users` SET email = ?, password = ? WHERE id = ?'

        connection.query(query, [data.email, data.password, id], (error, results, fields) => {
            console.log(results)
            return response.status(200).json()
        })
        connection.end()
    }

    async delete(request, response){
        const { id } = request.params

        const query = 'DELETE FROM `users` WHERE id = ?'

        connection.query(query, [id], (error, results, fields) => {})
        connection.end()
    }
}

