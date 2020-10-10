import React from 'react'
import styles from './styles.module.css'

export * from "./components";

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}


