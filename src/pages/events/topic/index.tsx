import React from 'react';
import styles from './Topic.module.scss';

interface typeProps {
    text: any,
}

const Topic:React.FC<typeProps> = ({text}) => {
    return (
        <div className={styles.topic}>
            <label className={styles.label}>
                <input type={'checkbox'} />
                <p className={styles.text}>
                    {text}
                </p>
            </label>
        </div>
    );
}

export default Topic;