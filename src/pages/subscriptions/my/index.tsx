import React from 'react';
import Сhoice from '../choice';
import styles from './My.module.scss';

const My:React.FC = () => {
    return (
        <div className={styles.my}>
            <div className={styles.left}>
                <div className={styles.ava}>

                </div>
                <p>Маркетинг</p>
            </div>
                <Сhoice />
        </div>
    );
}

export default My;