import { NextRequest } from "next/server";


export type User = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
}


let users: Array<User> = [
    {
        id: '1',
        email: 'info@forum.de',
        password: '123456',
        firstName: 'Max',
        lastName: 'Mustermann'
    },
    {
        id: '2',
        email: 'info2@forum.de',
        password: '123456',
        firstName: 'Max',
        lastName: 'Mustermann'
    }
]


export async function POST(req: NextRequest) {


    const data = await req.json();

    if (data === null) return

    const email = data.email
    const password = data.password

    console.log('body', data)
    console.log('email', email)
    console.log('password', password)

    const user = users.find(user => user.email === email && user.password === password)

    if (user === undefined) return Response.json({
        message: 'User not found'
    })

    return Response.json(user)
}