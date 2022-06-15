import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

const Logo:React.FC = () => {
    return (
        <Link to={'/'} className={styles.logo}>
            Blog
        </Link>
    );
}

export default Logo;