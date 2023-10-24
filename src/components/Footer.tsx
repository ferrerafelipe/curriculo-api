"use client"

import {useEffect, useState} from 'react'
import {User} from '@/types/User'

export function Footer(){
    const[users, setUsers] = useState<User[]>([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=> res.json())
            .then(json=>{
                setUsers(json)
            })
}, [])

    return(
        <div>
            <div className='bg-blue-900 w-full p-5 max-w-[1246px]  mx-auto h-80'>
               <div className=" flex justify-center flex-col items-center">
               <div className=" text-white">
                    <h1 className='text-2xl'>API - Lista de Usuários</h1>
                    <ul>
                        {users.map(item =>(
                            <li key={item.id}>{item.name}({item.email})</li>
                        ))}
                    </ul>
               </div>
               </div>
            </div>
            </div>
    )
}