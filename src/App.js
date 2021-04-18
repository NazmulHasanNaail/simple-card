import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

 let data = Sdata.map((Sdata)=>{
     return <>
        <Card 
            imgSrc={Sdata.imgSrc} 
            cat={Sdata.category}
            title={Sdata.title}
            btnLink={Sdata.link} 
         /> 
     </>
 })
 
function App(){
    return<>
      <h2 className="heading">List of top zee5 series 2021</h2>
      {data}
     </>
}
export default App;