import React from 'react'
import './Form.css'

export default props => (
    <div role='form' className="col-sm-12 pt-4">
        <input id="city" type="text"
            placeholder="Cidade..."
            onChange={props.handleChange}
            value={props.city}></input>
        <button onClick={props.handleCall}>Buscar</button>
    </div>
)