import React from 'react'
import { useEffect, useState } from 'react';
import '../components/fetch.css'


const myUrl = new URL(window.location.href)
const country = myUrl.searchParams.get("country");

function Fetch() {

    
    const url = 'http://universities.hipolabs.com/search?country=Guatemala';

    const urlAPI = new URL(url)

    urlAPI.search = `?country=${(country)}`



    const [universities, setUniversities] = useState(); //func que almacena fetch a var
    useEffect(() => {
        fetchApi();
    }, []); //genera el fetch al cargar la pág.

    const fetchApi = async () => { //func asíncrona para ejecutar el fetch
        const response = await fetch(urlAPI.href);
        const responseJSON = await response.json(); 
        setUniversities(responseJSON);
        
    }
        return (
            <>
            <div className='center'>
            <div className='cardContainer'>
                
                {!universities ? 'cargando...' :
                universities.map((university, index) =>{
                return <div key = {index} className='items'>
                    <div className='alpha'> {university.alpha_two_code}</div>
                    <div className='name'>{university.name}</div>
                    <a href= {university.web_pages}>{university.web_pages}</a><br/>
                    <div className='domain'>{university.domains}</div>
                </div>
                
                })}
            </div>
            </div>
            </>
        );
    };

export default Fetch