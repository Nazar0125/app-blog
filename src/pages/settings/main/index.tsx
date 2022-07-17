import React from 'react';
import Menu from './../menu';
import styles from './Main.module.scss';
import styles1 from './../Settings.module.scss'
import BackSettings from '../../../components/back';
import { MyButton } from '../../../components/btn';
import { MyInput } from '../../../components/forms/myInput';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';

const Main:React.FC = () => {
    let [show, setShow] = React.useState(false);
    const changeShow = () => {
        setShow(!show)
    }
    const {user} = useSelector((state:RootState) => {
        return {
            user: state.user.user
        }
    });
    return (
        <div className={styles1.settings}>
            <div className='container-full'>
                <div className={styles1.wrapper}>
                    <div>
                        <div className={styles1.content}>
                            <BackSettings />
                            <div className={styles1.item}>
                                <p className={styles1.title}>
                                    Отображаемое имя  
                                </p>
                                <MyInput type='text' placeholder='Имя' text={user.name} />  
                            </div>
                            <div className={styles1.item}>
                                <p className={styles1.title}>
                                    Логин  
                                </p>
                                <MyInput type='text' placeholder='Имя' text={user.login} />  
                            </div>
                            {
                                !show &&
                                <p onClick={changeShow} className={styles.change}> Изменить пароль</p>        
                            }
                            <div className={styles1.footer}>
                                <MyButton text='Сохранить'/>
                            </div>
                        </div>

                        {
                            show &&
                            <div className={styles1.content}>
                                <div className={styles.password}>
                                    <div className={styles1.item}>
                                        <p className={styles1.title}>
                                            Текущая пароль
                                        </p>
                                        <MyInput type='text' placeholder='Имя' text='Zh' />  
                                    </div>
                                    <div className={styles1.item}>
                                        <p className={styles1.title}>
                                            Новый пароль
                                        </p>
                                        <MyInput type='text' placeholder='Имя' text='Zh'/>  
                                    </div>
                                    <div className={styles1.item}>
                                        <p className={styles1.title}>
                                            Повторите пароль
                                        </p>
                                        <MyInput type='text' placeholder='Имя' text='Zh'/>  
                                    </div>
                                </div>               
                            
                                <div className={styles1.footer}>
                                    <MyButton text='Сохранить'/>
                                </div>
                            </div>
                        }
                    </div>
                    <div>
                        <Menu actve={1}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;