import React,{useState} from 'react';
import bgrWT from '../images/wt.jpg'

function Weather(){

    const [cityName,setCityName]=useState('Hanoi');
    const [countryName,setCountryName]=useState('vn');
    const [icon,setIcon]=useState('');
    const [main,setMain]=useState('');
    const [description,setDescription]=useState('');
    const [temp,setTemp]=useState('');
    const [feels_like,setFeels_like]=useState('');
    const [temp_min,setTemp_min]=useState('');
    const [temp_max,setTemp_max]=useState('');
    const [pressure,setPressure]=useState('');
    const [humidity,setHumidity]=useState('');
    const [windspeed,setWindspeed]=useState('');
    const [winddeg,setWinddeg]=useState('');
    const [cloudsall,setCloudall]=useState('');
    const [dt,setDt]=useState('');
    const [systype,setSystype]=useState('');
    const [sysid,setSysid]=useState('');
    const [syscountry,setSyscountry]=useState('');
    const [syssunrise,setSyssunrise]=useState('');
    const [syssunset,setSyssunset]=useState('');
    const [timezone,setTimezone]=useState('');
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [cod,setCod]=useState('');
    const [coordlon,setCoordlon]=useState('');
    const [coordlat,setCoordlat]=useState('');
    const [visibility,setVisibility]=useState('');
    const [weatherid,setWeatherid]=useState('');
    const [base,setBase]=useState('');
    const [visibilityINF,setvisibilityINF]=useState('none');



    const getWeather=async()=>{
        const apiKey='c0a8bc57247aaaee9e9e7578f079161f';
        const apiCall=`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${apiKey}`;
        const data = await fetch(apiCall);
        const response = await data.json();
        setIcon(`http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`)
        setMain(response.weather[0].main);
        setDescription(response.weather[0].description);
        setWeatherid(response.weather[0].id);
        setTemp(response.main.temp);
        setTemp_max(response.main.temp_max);
        setTemp_min(response.main.temp_min);
        setFeels_like(response.main.feels_like);
        setPressure(response.main.pressure);
        setHumidity(response.main.humidity);
        setVisibility(response.visibility);
        setWinddeg(response.wind.deg);
        setWindspeed(response.wind.speed);
        setCloudall(response.clouds.all);
        setDt(response.dt);
        setSyscountry(response.sys.country);
        setSysid(response.sys.id);
        setSyssunrise(response.sys.sunrise);
        setSyssunset(response.sys.sunset);
        setSystype(response.sys.tyoe);
        setTimezone(response.timezone);
        setId(response.id);
        setName(response.name);
        setCod(response.cod);
        setBase(response.base);
        setCoordlat(response.coord.lat);
        setCoordlon(response.coord.lon);
        setvisibilityINF();
    }

    return(
        <div className='Weather' style={{backgroundImage:`url(${bgrWT})`,color:'#ffffff'}}>
            <br/><br/>
            <div className='row'>
                <div className='col' style={{marginLeft:'10%',marginRight:'10%'}}>
                <form>
                    <div className="form-group">
                        <label htmlFor="Country">Country</label>
                        <input type="text" className="form-control" id="Country" aria-describedby="countryHelp" placeholder="Enter Country Name" onChange={(e)=>{setCountryName(e.target.value)}}/>
                        <small id="countryHelp" className="form-text text-muted">You can tyoe fullName or shortName of Country</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="City">City</label>
                        <input type="City" className="form-control" id="City" aria-describedby='cityHelp' placeholder="City Name" onChange={(e)=>{setCityName(e.target.value)}}/>
                        <small id="cityHelp" className="form-text text-muted">You can tyoe fullName or shortName of City</small>
                    </div>
                    <button type="button" className="btn btn-outline-primary" onClick={getWeather}>Get Weather</button>
                </form>
                <br/>
                <h4 style={{display:visibilityINF}}>syssunset:{syssunset}</h4>
                    <h4 style={{display:visibilityINF}}>timezone:{timezone}</h4>
                    <h4 style={{display:visibilityINF}}>id:{id}</h4>
                    <h4 style={{display:visibilityINF}}>name:{name}</h4>
                    <h4 style={{display:visibilityINF}}>cod:{cod}</h4>
                    <h4 style={{display:visibilityINF}}>dt:{dt}</h4>
                    <h4 style={{display:visibilityINF}}>syscountry:{syscountry}</h4>
                    <h4 style={{display:visibilityINF}}>syssunrise:{syssunrise}</h4>
                </div>
                <div className='col' style={{marginLeft:'10%',marginRight:'10%'}}>
                    <img style={{display:visibilityINF}} src={icon} alt='Weather icon'/>
                    <h4 style={{display:visibilityINF}}>coordlat:{coordlat},coordlon:{coordlon}</h4>
                    <h4 style={{display:visibilityINF}}>temp:{temp}</h4>
                    <h4 style={{display:visibilityINF}}>weatherid:{weatherid}</h4>
                    <h4 style={{display:visibilityINF}}>description:{description}</h4>
                    <h4 style={{display:visibilityINF}}>main:{main}</h4>
                    <h4 style={{display:visibilityINF}}>base:{base}</h4>
                    <h4 style={{display:visibilityINF}}>feels_like:{feels_like}</h4>
                    <h4 style={{display:visibilityINF}}>temp_min:{temp_min}temp_max:{temp_max}</h4>
                    <h4 style={{display:visibilityINF}}>pressure:{pressure}</h4>
                    <h4 style={{display:visibilityINF}}>humidity:{humidity}</h4>
                    <h4 style={{display:visibilityINF}}>visibility:{visibility}</h4>
                    <h4 style={{display:visibilityINF}}>windspeed:{windspeed}winddeg:{winddeg}</h4>
                    <h4 style={{display:visibilityINF}}>cloudsall:{cloudsall}</h4>
                    <h4 style={{display:visibilityINF}}>systype:{systype}</h4>
                    <h4 style={{display:visibilityINF}}>sysid:{sysid}</h4>

                </div>
            </div>
            <br/>
        </div>
    );
}

export default Weather;