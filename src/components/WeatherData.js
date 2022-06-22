import React, { useEffect, useState } from 'react'
// import Weather from './Weather';

export default function WeatherData() {
    const apiKey = 'fa66cc9b06b14e6122536a51e8d508c8';
    const [city, setCity] = useState('Asansol')
    const [temp, setTemp] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${apiKey}&units=metric`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('There is some issue in url')
                }
                return res.json();
            })
            .then((data) => {
                
                console.log(data);
                setTemp(data.main);
                console.log(data.main);
                setSearch(data);
                console.log(data);
                // setCity('') 

                
            })
            .catch((error) => {
                console.log(error);
            })
    },[city])

    return (
        <>

            <div className="main-div">
                <div className="txt">
                    <input type="text" placeholder='Write here...'  onChange={(e) => {setCity(e.target.value)}}/>
                </div>
                    { !city ? (<p>No data found</p>) : 
                        (
                            <>
                            <div className="content" style={{padding : "20px"}}>
                            <p>Location - <span style={{color :"white", fontWeight : "bold", fontSize : "18px"}}>{search.name}</span></p>
                            <p id='temp'> <span style={{color : "white"}}>{temp.temp}°C</span></p>
                            </div>
                            <div className='weather_details' style={{padding : "10px"}}>
                                <p>Real Feel - <span style={{color :"black", fontWeight : "bold"}}>{temp.feels_like}°C</span> </p>
                                <p>Humidity - <span style={{color :"black", fontWeight : "bold"}}>{temp.humidity}%</span> </p>
                                <p>Pressure - <span style={{color :"black", fontWeight : "bold"}}>{temp.pressure}mbar</span> </p>
                                
                            </div>
                            </>

                        
                        )
                        
                    }
                
            </div>





        </>

    )
}
