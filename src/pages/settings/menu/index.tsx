import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN_ROUTE, NOTIFICATIONS_ROUTE, PROFILE_ROUTE, SETTINGS_ROUTE } from '../../../utils/consts/consts';
import styles from './Menu.module.scss';
import svgIcons from './../../../img/icons.svg';

interface activeMenu {
    actve: number
}

const Menu:React.FC<activeMenu> = ({actve}) => {
    let menu = [
        {
            text: 'Профиль',
            url: SETTINGS_ROUTE+PROFILE_ROUTE,
            icon: 'user',
        },
        {
            text: 'Основные',
            url: SETTINGS_ROUTE+MAIN_ROUTE,
            icon: 'settings',
        },
        {
            text: 'Уведомления',
            url: SETTINGS_ROUTE+NOTIFICATIONS_ROUTE,
            icon: 'notifications',
        }
    ]
    return (
        <div className={styles.menu}>
            <p className={styles.title}>Настройки</p>
            <ul>
                {
                    menu.map((item, i) => {
                        return (
                            <li key={i} className={actve === i ? `${styles.item} ${styles.avtive}` : styles.item} >
                                <Link to={item.url}>
                                    <span>
                                        <svg width="16" height="16" fill="#595959cc">
                                            <use xlinkHref={`${svgIcons}#${item.icon}`}/>
                                        </svg>
                                    </span>
                                    {item.text}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}
export default Menu;