import React from 'react';
import { useForm } from 'react-hook-form';
import { MyInput } from '../forms/myInput';
import MySubmit from '../forms/mySubmit';
import styles from './Come.module.scss';
import { useDispatch } from 'react-redux';
import { FetchUser, SetUser } from '../../store/ducks/user/actionCreators';

const Auth:React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = React.useState<boolean>(false)
    const [errorContent, setErrorContent] = React.useState<string>('Ошибка сервера')
    let dispatch = useDispatch()
    
    const onSubmit = async (data:any, e:any) => {
        e.preventDefault();
        try {
            dispatch(FetchUser(data))
        } catch(e) {
            setError(true)
            setErrorContent('Ошибка сервера')
        }
    };
    
    return (
        <>
            <p className={styles.title}>Авторизация</p>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                {
                    error &&
                <div className = {styles.block}>
                        <div className={styles.error}>
                            {errorContent}
                        </div>
                    </div>
                }
                <div className = {styles.block}>
                    <MySubmit text={'Войти'}/>
                </div>
            </form>
        </>
    );
}

export default Auth;