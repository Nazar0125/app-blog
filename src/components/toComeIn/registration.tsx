import React from 'react';
import { MyInput } from '../forms/myInput';
import styles from './Come.module.scss';
import { useForm } from "react-hook-form";
import {AuthApi} from './../../api/authApi'
import MySubmit from '../forms/mySubmit';

interface typeProps {
    registrationChenge: any,
}
const Registration:React.FC<typeProps> = ({registrationChenge}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = async (data:any, e:any) => {
        e.preventDefault();
        try {
            let item = await AuthApi.registration(data);
            if (item.statusCode === 200) {
                registrationChenge()
            }
        } catch(error) {
            console.log('error')
        }
    };
    
    return (
        <>
            <p className={styles.title}>Регистрация</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className = {styles.block}>
                    <MyInput 
                        type='text'
                        placeholder='Имя'
                        name = 'name'
                        register = {register}
                        errors = {errors}
                    />
                </div>
                <div className = {styles.block}>
                    <MyInput
                        type='text'
                        placeholder='фамилия'
                        name = 'surname'
                        register = {register}
                        errors = {errors}
                    />
                </div>
                <div className = {styles.block}>
                    <MyInput
                        type='text'
                        placeholder='Логин'
                        name = 'login'
                        register = {register}
                        errors = {errors}
                    />
                </div>
                <div className = {styles.block}>
                    <MyInput
                        type='password'
                        placeholder='Пароль'
                        name = 'password'
                        register = {register}
                        errors = {errors}
                    />
                </div>
                <div className = {styles.block}>
                    <MyInput
                        type='password'
                        placeholder='Повторите пароль'
                        name = 'password2'
                        register = {register}
                        errors = {errors}
                    />
                </div>
                <div className = {styles.block}>      
                    <MySubmit text={'Зарегистрироваться'}/>
                </div>
            </form>
        </>
    );
}
export default Registration;