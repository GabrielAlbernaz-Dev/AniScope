import React from 'react'
import styles from './Form.module.css';

const Select = ({options,name,value,onChange,...props}) => {
  return (
    <select className={styles.select} value={value} name={name} id={name} onChange={onChange} {...props}>
      <option value="">Select your animal</option>
      {options.map(option => (<option key={option.id} value={option.id}>{option.text}</option>))}
    </select>
  )
}

export default Select