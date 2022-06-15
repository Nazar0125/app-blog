import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

const Menu:React.FC = () => {
    let menu = [
        {
            text: 'Подписки',
            url: '/subscriptions'
        },
        {
            text: 'Компании',
            url: '/subscriptions/company'
        },
    ]
        
    return (
        <div className={styles.menu}>
            <ul className={styles.lists}>
                {
                    menu.map((item, i) => {
                        return <li key={i}>
                            <Link to={item.url}>
                                {item.text}
                            </Link>
                        </li>
                    })
                }
            </ul>       
        </div>
    );
}

export default Menu;