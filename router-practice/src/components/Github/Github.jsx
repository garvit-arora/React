import React from 'react'
import { useLoaderData } from 'react-router-dom'




function Github() {

    const data = useLoaderData();

    return (
        <>
        <div className='text-center bg-green-600 '>Github Followers : {data.followers}</div>
        </>
    )
}

export default Github


export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/garvit-arora');
    return response.json();
}
