import React from 'react'
import styles from '../App.module.css'

const ButtonsContainer = ({onButtonClick}) => {
    let array=["C",1,2,"+",3,4,"-",5,6,"*",7,8,"/",9,0,"=","."]
  return (
    <div>
        
        <div className={styles.buttonsContainer}>
            {
                array.map((b)=>{
                    return  <button className={styles.button} key={b} onClick={()=>onButtonClick(b)}>{b}</button>
                })
            }
        </div>
    </div>
  )
}

export default ButtonsContainer