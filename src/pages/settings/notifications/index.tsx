import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './../menu';
import styles from './Notifications.module.scss';
import styles1 from './../Settings.module.scss'
import { MyButton } from '../../../components/btn';

const Notifications:React.FC = () => {
    return (
        <div className={styles1.settings}>
            <div className='container-full'>
                <div className={styles1.wrapper}>
                    <div className={styles1.content}>
                        <h1 className={styles.title}>Уведомления на сайте </h1>
                        <div className={styles.items}>
                            <div className={styles.item}>
                                <label className={styles.label}>
                                    <input type="checkbox" className = {styles.checkbox} name="checkbox" value="value"/>
                                    <span className={styles.text}>Ответы на мои комментарии</span>
                                </label>
                            </div>
                            <div className={styles.item}>
                                <label className={styles.label}>
                                    <input type="checkbox" className = {styles.checkbox} name="checkbox" value="value"/>
                                    <span className={styles.text}>Упоминания в комментариях к постам</span>
                                </label>
                            </div>
                            <div className={styles.item}>
                                <label className={styles.label}>
                                    <input type="checkbox" className = {styles.checkbox} name="checkbox" value="value"/>
                                    <span className={styles.text}>Оценки записей и комментариев</span>
                                </label>
                            </div>
                            <div className={styles.item}>
                                <label className={styles.label}>
                                    <input type="checkbox" className = {styles.checkbox} name="checkbox" value="value"/>
                                    <span className={styles.text}>Новые комментарии к постам</span>
                                </label>
                            </div>
                            <div className={styles.item}>
                                <label className={styles.label}>
                                    <input type="checkbox" className = {styles.checkbox} name="checkbox" value="value"/>
                                    <span className={styles.text}>Новые подписчики</span>
                                </label>
                            </div>
                        </div>
                        <div className={styles1.footer}>
                            <MyButton text='Сохранить'/>
                        </div>
                    </div>
                    <div>
                        <Menu actve={2}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notifications;