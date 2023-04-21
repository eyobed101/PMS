
import React from 'react'
import styles from './style'
import { NavBar, Hero, Services, Trial, Features} from './components'
import { landing } from './assets';

const App = () => (
    <div className="w-full overflow-hidden">
      
      <div className={`bg-[#0c3f4f] sticky top-0 z-50  ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          
          <NavBar />
        </div>
      </div> 
       

      <div className={`bg-[#104657]  bg-cover bg-w-[100%]`}>
        <div className='lg:mx-20 mx-2'>
          <Hero />
          </div>
      </div>
      <div className='w-full items-center'>
        <Features />
        <Services />
        
        <Trial />
      </div>
    </div>
    
    
    
  );


export default App
