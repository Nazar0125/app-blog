import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Subs.module.scss';

const Subscriptions:React.FC = () => {
    return (
        <div className={styles.subs}>
            <p className={styles.title}>Подписки</p>
            <div className={styles.items}>
                <Link to="" className={styles.item}>
                    <div className={styles.ava}>
                        
                    </div>
                    <p className={styles.text}>
                        Финансы
                    </p>
                </Link>
                <Link to="" className={styles.item}>
                    <div className={styles.ava}>
                        
                    </div>
                    <p className={styles.text}>
                        Финансы
                    </p>
                </Link>
                <Link to="" className={styles.item}>
                    <div className={styles.ava}>
                        
                    </div>
                    <p className={styles.text}>
                        Финансы
                    </p>
                </Link>
            </div>
            <div className={styles.footer}>
                <Link to="/" >Показать все</Link>
            </div>
        </div>
    );
}

export default Subscriptions;