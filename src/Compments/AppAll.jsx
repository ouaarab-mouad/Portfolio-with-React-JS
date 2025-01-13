import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navegation from './Navegation';
import SingUp from './SinUp/SingUp';
import Login from './Login/Login'
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Content from './Content/Content'
import Contact from './Contact/Contact';


const App = () => {
        return ( 
        <Router>
            <Navegation/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Services' element={<Services/>}/>
                <Route path='/Content' element={<Content/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/SingUp' element={<SingUp/>}/>

            </Routes>
        </Router>
    );
}

export default App;
