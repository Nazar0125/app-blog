import React from 'react';
import styles from './MySubmit.module.scss';

interface typeProps {
    text: string
}

const MySubmit:React.FC<typeProps> = ({text}) => <input type="submit" value={text} className={styles.MySubmit}/>

export default MySubmit;