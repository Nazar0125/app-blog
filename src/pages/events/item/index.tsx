import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Item.module.scss';

const Item:React.FC = () => {
    return (
        <div className={styles.item}>
            <div className={styles.header}>
                <div className={styles.user}>
                    <div className={styles.ava}>
                    </div>
                    <p className={styles.name}>
                        Цифровой прорыв
                    </p>
                </div>
            </div>
            <div className={styles.body}>
                <p className={styles.title}>
                    Гибридный хакатон по искусственному интеллекту
                </p>
            </div>
            <div className={styles.footer}>
                <p className={styles.date}>
                    Сегодня
                </p>
                <p className={styles.type}>
                    Онлайн
                </p>
                <p className={styles.dop}>
                    Бесплатно
                </p>
            </div>
            <Link to="" className={styles.link}/>
        </div>        
    );
}

export default Item;