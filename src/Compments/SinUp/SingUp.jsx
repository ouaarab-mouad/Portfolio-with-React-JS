import React, { useState } from 'react';
import { useEffect } from 'react';
import './SingUp.css'

const SingUp = () => {
    useEffect(()=> {document.title='SingUp'})
    return (
        <div>
            <h1>Welcome To Comyouniti</h1>
            <div className="information">
               
                        
                    
                        
                        <input type="text" placeholder='Entre your User name'/>
                        <div className='type'>vc</div>
                   
            </div>
        </div>
    );
}

export default SingUp;
