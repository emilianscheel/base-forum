"use client";
import { useEffect, useState } from "react";
import { User } from "../api/user/route";






export default function Home() {


    const [user, setUser] = useState<User>()

    async function handleResponse(res: Response) {
        setTimeout(async () => {
            const data = await res.json()
            setUser(data)
        }, 2 * 1000)
    }



    useEffect(() => {

        const promise = fetch('http://localhost:3000/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'info@forum.de',
                password: '123456'
            })
        })

        promise.then(handleResponse)

    }, [])



    return (
        <main>
            /user

            {user === undefined && 'Loading...'}

            {user?.email}
        </main>
    )
}
