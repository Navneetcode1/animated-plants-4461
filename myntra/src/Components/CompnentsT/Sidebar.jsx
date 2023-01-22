import React from 'react';
import { useState } from 'react';
import styles from './Sidebar.module.css';
import {useSearchParams} from 'react-router-dom';
import { useEffect } from 'react';



const Sidebar = () => {

    const [searchParams,setSearhParams] = useSearchParams();
    const initialState = searchParams.getAll("color")

    console.log(searchParams.getAll("color"))

    const [color,setColor] = useState(initialState || []);
    console.log(color)
const handleFilter = (e) => {
    let newCat = [...color];

    if(newCat.includes(e.target.value)){
        newCat.splice(newCat.indexOf(e.target.value),1)
    }else{
        newCat.push(e.target.value)
    }
    setColor(newCat)
}

useEffect(() => {
    const params = {
        color
    }
    setSearhParams(params)

},[color])


  return (
    <div className={styles.main}>
        <div className={styles.fill}>
            Filter by colour
        </div>
    <div className={styles.side} >
        <div>  
        <input type="checkbox" value="black" onChange={handleFilter} checked={color.includes("black")} />
        <label>Black</label>
        </div>
        <div>  
        <input type="checkbox" value="white" onChange={handleFilter} checked={color.includes("white")} />
        <label>White</label>
        </div>
        <div>  
        <input type="checkbox" value="pink" onChange={handleFilter} checked={color.includes("pink")} />
        <label>Pink</label>
        </div>
        <div>  
        <input type="checkbox" value="red" onChange={handleFilter} checked={color.includes("red")} />
        <label>Red</label>
        </div>
        <div>  
        <input type="checkbox" value="blue" onChange={handleFilter} checked={color.includes("blue")} />
        <label>Blue</label>
        </div>
        <div>  
        <input type="checkbox" value="green" onChange={handleFilter} checked={color.includes("green")}  />
        <label>Green</label>
        </div>

       
    </div>
    
   
    </div>
  )
}

export default Sidebar