import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";

function BasicExample({setA1ind,index, foo, attempts, current, curOpen, setOpen, A1, setA1, A1ind, openArr, setOpenArr}) {
  
  function fun(){
    console.info('A1', A1, 'index', index, 'A1ind-', A1ind);
    if(curOpen % 2 === 0){
      setA1(current);
      setA1ind(index);
      console.info('set a1 ind to', A1ind);
      
      let arr2 = openArr;
      arr2[index] = true;
      setOpenArr(arr2);
      setOpen(curOpen + 1);
    }
    else if(A1 === current){
      let arr2 = openArr;
      arr2[index] = true;
      setOpenArr(arr2);
      setOpen(curOpen + 1);
    }
    else{
      let arr2 = openArr;
      arr2[A1ind] = false;

      console.info('changed back',A1ind, arr2);
      setOpenArr(arr2);
      

      setOpen(curOpen - 1);
      setA1(-1);

      foo(attempts + 1);
    }
    if(curOpen + 1 === 10)
      alert('game over');
    console.info('A1ind', A1ind);
  }

  return (
    <Card style={{ 'width': '10rem', 'backgroundColor': 'gray', 'padding': '25px 25px 25px 25px'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      
      
        { openArr[index] ? <Card.Text> {current} </Card.Text> : null}

        <Button disabled = {openArr[index]} variant="primary" onClick={() => fun()}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;