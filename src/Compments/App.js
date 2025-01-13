import React from 'react';
import AppAll from './AppAll'
import { useState } from 'react';
import { Footer } from './footer/Footer';
const App = () => {
    const [color , setColor] = useState('rgb(182, 230, 93)')

    function rendomColor(length)
    {
        return Math.floor(Math.random()*length)
    }

    function hundelHEXColor()
    {
        const Alpha = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#'
        for(let i=0 ; i<6 ; i++)
        {
            hexColor+= Alpha[rendomColor(Alpha.length)]
            if(color === hexColor)
            {
                alert('Stop')
            }
        }
        
        setColor(hexColor)
        console.log(hexColor)
    }
    return (
        <div >
            <AppAll/>
            <Footer/>
        </div>
    );
}

export default App;
