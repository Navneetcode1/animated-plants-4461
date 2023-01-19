import React from 'react'
import styles from './Filters.module.css'

const Filters = () => {
  return (
    <div className={styles.filterMain}>
        <div>
        <h4>FILTERS</h4>
        </div>
        <div className={styles.addOns}>
            <button>Add Ons</button>
            <button>Bundles</button>
            <button>Character</button>
            <button>Collar</button>
            <button>Country Origin</button>
            <button>Fabric</button>
            <button>+17 more</button>
        </div>
        <div className={styles.drop}>
            <select placeholder='Sort By' >
                <option value="#">Recommended</option>
                <option value="#">What's New</option>
            </select>
        </div>

    </div>
  )
}

export default Filters