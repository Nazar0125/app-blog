import React from 'react';
import styles from './MyError.module.scss';

interface typeProps {
    text: string,
}

export const MyError:React.FC<typeProps> = ({text}) => {
    return (
        <div className={styles.error}>
            <p>
                {text}
            </p>
        </div>
    )
}
