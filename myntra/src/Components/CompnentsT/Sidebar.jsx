import React from 'react';
import { useState } from 'react';
import styles from './Sidebar.module.css';
import {useSearchParams} from 'react-router-dom';
import { useEffect } from 'react';



const Sidebar = () => {

    const [searchParams,setSearhParams] = useSearchParams()

    console.log(searchParams.getAll("category"))

    const [category,setCategory] = useState([]);
    console.log(category)
const handleFilter = (e) => {
    let newCat = [...category];

    if(newCat.includes(e.target.value)){
        newCat.splice(newCat.indexOf(e.target.value),1)
    }else{
        newCat.push(e.target.value)
    }
    setCategory(newCat)
}

useEffect(() => {
    const params = {
        category
    }
    setSearhParams(params)

},[category])


  return (
    <div className={styles.side} >
        <input type="checkbox" value="black" onChange={handleFilter} />
        <label>Black</label>
        <input type="checkbox" value="blue" onChange={handleFilter} />
        <label>Blue</label>
    </div>
  )
}

export default Sidebar