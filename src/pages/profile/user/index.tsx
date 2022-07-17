import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../store/store';
import { PROFILE_ROUTE, SETTINGS_ROUTE } from '../../../utils/consts/consts';
import Ava from './ava';
import Description from './description';
import styles from './User.module.scss';

const User:React.FC = () => {
    let menu = [
        {
            text: 'Статьи',
            url: '/profile'
        },
        {
            text: 'Черновики',
            url: '/profile/drafts'
        }
    ]
    const {user} = useSelector((state:RootState) => {
        return {
            user: state.user.user
        }
    });

    return (
        <div className={styles.user}>
            <div className={styles.header}>
                <Ava
                    id={user.id}
                    avatar={user.avatar}
                />
                <div className={styles.right}>
                    <Link to={SETTINGS_ROUTE+PROFILE_ROUTE} className={styles.settings}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                        </svg>
                    </Link>
                    <div className={styles.write}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat-left-dots" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>        
                        <span>
                            Написать
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.name}>
                {user.name}
            </div>
            <Description text = {user.description}/>
            <div className={styles.data}>
                На проекте с 20 мая 2022 
            </div>
            <div className={styles.footer}>
                <ul className={styles.menu}>
                    {
                        menu.map((item, i) => {
                            return (
                                <li key={i}>
                                    <Link to={item.url}>{item.text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default User;