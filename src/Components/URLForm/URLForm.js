import React from 'react'
import './URLForm.css';
const URLForm = ({onInputChange, onButtonSubmit})=>{
    return (
            <div className='center'>
                <div className="form pa4 br3 shadow-5" >
                    <input className='f4 pa2 w-70' type='text' onChange={onInputChange}/>
                    <button className="w-25 grow link ph1 pv2 dib mt-2 white 0-0" onClick={onButtonSubmit} >Download</button>
                </div>
            </div>
    )
}

export default URLForm;