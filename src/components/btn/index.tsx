import React from 'react';
import styles from './MyButton.module.scss';

interface typeProps {
    text: string,
    onClick?: any,
}

export const MyButton:React.FC<typeProps> = ({text, onClick}) => 
    <div className={styles.btn} onClick = {() => onClick()}>{text}</div>