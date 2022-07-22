import React from 'react'
import { useEffect, useState } from 'react';
import '../components/fetch.css'




function Fetch() {
    const url = 'http://universities.hipolabs.com/search?country=Guatemala';
    const [universities, setUniversities] = useState(); //func que almacena los datos
    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        const response = await fetch(url);
        const responseJSON = await response.json();
        setUniversities(responseJSON);
        console.log(responseJSON.name)
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