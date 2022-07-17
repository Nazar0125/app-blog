import React from 'react';
import { Link } from 'react-router-dom';
import { descriptionApi } from '../../../../api/descriptionApi';
import styles from './Description.module.scss';

interface typeProps {
    text: string
}

const Description:React.FC<typeProps> = ({text}) => {
    return (
        <div className={styles.description}>
            <p className={styles.text}>{text}</p>
            <Link to ="/settings/profile" className={styles.change}>Изменить описание </Link>
        </div>        
    );
}

export default Description;