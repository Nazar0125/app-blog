import React from 'react';
import Subs from '../subs';
import styles from './Recommended.module.scss';

const Recommended:React.FC = () => {
    return (
        <div className={styles.recommended}>
            <p className={styles.title}> Рекомендовано </p>
            <Subs />
            <Subs />
            <Subs />
            <Subs />
        </div>
    );
}

export default Recommended;