import './App.css';
import { HeaderCs } from './components/header.tsx';
import { AboutMe } from './components/texto.tsx';
import { Ft } from './imge';

function App() {

  return (
    <>
      <div className='geral'>
  
        <div>
          <HeaderCs></HeaderCs>
        </div>

        <div className='div1'>

          <div className='div2'>
            <AboutMe></AboutMe>
          </div>
          
          <Ft></Ft>
          
        </div>
      </div>
       
    </>
  )
}

export default App
