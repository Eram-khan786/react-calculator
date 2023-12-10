import React, { useState } from 'react';
import styles from './App.module.css';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import Heading from './components/Heading';

const App = () => {
  const [calVal, setCalVal] = useState('');

  const ButtonClicked = (btntext) => {
    if (btntext === "C") {
      setCalVal('');
    } else if (btntext === "=") {
      if (btntext.length!==0){
        try{
          const result=eval(calVal)
          setCalVal(result)
        }
        catch{
          setCalVal("Syntax Error")
        }
      }
    } 
    else if (btntext==="+" || btntext==="-" || btntext==="*" || btntext==="/" || btntext==="."){
      let lastchar = calVal[calVal.length - 1];
        const operatorArray = ["+", "-", "*", "/", "^", "%","."];

      if (operatorArray.includes(lastchar)) {
        
        setCalVal(prevCalVal => prevCalVal.slice(0, -1) + btntext);
      } else {
   
        setCalVal(prevCalVal => prevCalVal + btntext);
    }

    }
    else{
      setCalVal(calVal+btntext)
    }
    }
  

  return (
    <div className={styles.main}>
    <Heading/>
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={ButtonClicked} />
    </div>
    </div>
  );
}

export default App;
