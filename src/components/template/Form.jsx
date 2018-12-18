import React from 'react'
import './Form.css'

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey = props.handleCall()
        }
    }

    return (
        <div role='form' className="col-sm-12 pt-4">
            <input id="city" type="text"
                placeholder="Cidade..."
                onChange={props.handleChange}
                onKeyUp={keyHandler}
                value={props.city}></input>
            <button onClick={props.handleCall}>Buscar</button>
        </div>
    )
}