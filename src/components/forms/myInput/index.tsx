import React from 'react';
import { MyError } from '../myError';
import styles from './MyInput.module.scss';

interface typeProps {
    type: string,
    placeholder?: string
    name?: string,
    register?: any,
    text?: any,
    errors?: any,
}

export const MyInput:React.FC<typeProps> = ({type, placeholder, name, register, errors, text}) => {
    return (
        <>
            <input 
                type = {type} 
                className = {styles.input}
                placeholder = {placeholder}
                defaultValue = {text}
                {...(register && register(name, { required: true }))}
            />
            {errors && errors.name && <MyError text='Поля обязательные для заполнения'/>}
        </>
    )
}
