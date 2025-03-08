import express from "express";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()


const app = express()
app.use(express.json())

app.post('/users', async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
            address: req.body.address
        }})

    res.status(201).send(req.body)
})

app.put('/users/:id', async (req, res) => {
    await prisma.user.update({
        where:{
            id: req.params.id
        },

        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
            address: req.body.address
        }})

    res.status(201).send(req.body)
})

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
})

app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
    where:{
        id: req.params.id
    },
})

    res.status(200).json({message: 'User deleted'})
})

app.listen(3000)


/* 
polvohumano10
k09Wie7Okw1XWvYB
*/