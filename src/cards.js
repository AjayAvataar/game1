import BasicExample from "./example";

import React, { useEffect, useState } from "react";
function Cards({arr1, last, first, A1ind,setA1ind}) {
    
    let ind = new Array(2 * (last - first + 1));
    for(let i = 0; i < ind.length; i++) {
      ind[i] = i;
    }
    let y = new Array(ind.length);
    for(let i = 0; i < ind.length; i++) {
      y[i] = false;
    }

    const [openArr, setOpenArr] = useState(y);

    const [attempts, setAttempts] = useState(0);
    const [opened, setOpened] = useState(0);

    
    const [already1, setAlready1] = useState(-1);

    useEffect(() => {
      const past = JSON.parse(localStorage.getItem('attempts'));
      if (past) {
       setAttempts(past);
      }
      const pastArr = JSON.parse(localStorage.getItem('arr'));
      if(pastArr){
        arr1 = pastArr;
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('attempts', JSON.stringify(attempts));
    }, [attempts]);

    let x = ind.map((item) => {
        
      return (
          <div className='rowC'>
            <BasicExample key={item} index = {item} foo={setAttempts} attempts = {attempts} current={arr1[item]} curOpen={opened} setOpen = {setOpened} openArr = {openArr} A1 = {already1} setA1 = {setAlready1} setOpenArr = {setOpenArr} A1ind = {A1ind} setA1ind={setA1ind}/>
          </div>
          
        );
      });

    return (
        x
      );    

}
  
export default Cards;

