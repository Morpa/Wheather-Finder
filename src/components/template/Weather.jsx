import React from 'react'
import './Weather.css'
import '../../assets/css/open-weather-icons.css'

export default props =>
    <div className="weather__info ">
        {
            props.country && <div className="weather__key p-2">Localização: <span className="weather__value">{props.country}</span></div>
        }

        {
            props.icon && <div className="weather__key p-2"><i className={'owi owi-' + props.icon}></i></div>
        }
        {
            props.temperature && props.temp_min && props.temp_max &&
            <div className="weather__key p-2">Temperatura: <span className="weather__value">{props.temperature}°C</span><br />
                Mínima: <span className="weather__value">{props.temp_min}°C</span> <br />
                Máxima: <span className="weather__value">{props.temp_max}°C</span></div>
        }

        {
            props.humidity && <div className="weather__key p-2">Humidade: <span className="weather__value">{props.humidity}%</span></div>
        }

        {
            props.description && <div className="weather__key p-2">Descrição: <span className="weather__value_desc">{props.description}</span></div>
        }


        {
            props.error && <div className="weather__error p-2">{props.error}</div>
        }

    </div>

