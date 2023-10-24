"use client"

import {useState, useEffect} from "react"
import axios from "axios"

export function Footer(){

    const[location, setLocation] = useState<boolean>(false); //STATE PARA A LOCALIZAÇÃO
    const[weather, setWeather] = useState(false); //LOCAL PARA GUARDAR DADOS DA API PARA EXIBIÇÃO

    let getWeather = async (lat: number, long: number) =>{
        let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
            params: {
                lat: lat,
                long: long,
                appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                units: 'metric'
            }
        });
        setWeather(res.data)
        console.log(res.data)
        
    }
    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{ //navigator.geolocation.getCurrentPosition = pede informaçãoes de local para o browser
            getWeather(position.coords.latitude, position.coords.longitude); // mostra no console as coordenadas entregues pelo browser
            setLocation(true)
        })
    }, [])

    if(location == false){
        return(
            <div>
                <div className='bg-blue-900 w-full p-5 max-w-[1246px]  mx-auto h-60'>
               <div className=" flex justify-center flex-col items-center">
               <h1 className="text-2xl text-white">Por favor! Habilite a localização. </h1> 
               </div>
            </div>
            </div>
        )
    } else{
        return(
            <div className='bg-blue-900 w-full p-5 max-w-[1246px]  mx-auto h-60'>
               <div className=" flex justify-center flex-col items-center">
               <h1 className="text-2xl text-white">Tempo local</h1> 
               <h1 className="text-2xl text-white">Temperatura Atual:</h1>
               </div>
            </div>
        )
    }
}

