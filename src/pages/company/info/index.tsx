import React from 'react';
import { Link } from 'react-router-dom';
import SubscribeColor from '../../../components/subscribeColor';

import styles from './../Company.module.scss';

const Info:React.FC = () => {
    let [activeMenu, setActiveMenu] = React.useState(0)
    let menu = [
        {
            text: 'Статьи',
            url: '/company'
        },
        {
            text: 'Подробнее',
            url: '/company/details'
        }
    ]
    const changeActiveMenu = (index: number) => {
        activeMenu = index
    }
    return (
        <div className={styles.info}>
            <div className={styles.top}>
                <img
                    src="https://leonardo.osnova.io/4728e774-3c9e-5f49-b305-ce7066161faa/-/scale_crop/1920/-/format/webp/"
                    alt='#'
                />
            </div>
            <div className={styles.bottom}>
                <div className={styles.ava}>
                    <img
                        src="https://leonardo.osnova.io/0249a3f2-7af4-5f8c-8da5-b7dc2bf804c9/-/scale_crop/300x300/-/format/webp/"
                        alt="#"
                    />
                </div>
                <div className={styles.subscribe}>
                    <SubscribeColor />
                </div>
                <h1 className={styles.name}>Тинькофф</h1>
                    <p className={styles.description}>Первый российский банк, который полностью отказался от отделений. Все банковские операции мгновенно проводятся по телефону или через интернет.</p>
                    <p className={styles.subscriber}>18 561 подписчик </p>
                    <ul className={styles.menu}>
                        {
                            menu.map((item, i) => {
                            return (
                                <li
                                    className={activeMenu === i ? styles.menuActive : ''}
                                    key={i}
                                >
                                    <Link to={item.url} onClick = {() => changeActiveMenu(i)}>
                                        {item.text}
                                    </Link>
                                </li>
                                )
                            })
                        } 
                    </ul>
                </div>
            </div>
    );
}
export default Info;
