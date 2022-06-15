import React from 'react';
import styles from './MyTextarea.module.scss';

interface typeProps {
    text?: string | undefined
    placeholder?: string
    name?: string
}

export const MyTextarea:React.FC<typeProps> = ({text, placeholder, name}) => {
    return (
        <textarea name={name} className={styles.textarea} defaultValue={text}/>
    )
}