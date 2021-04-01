import React from 'react'
import styles from './styles.module.css'
import Button from './Components/Button';


export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export {
  Button,
}