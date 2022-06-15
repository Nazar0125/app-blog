import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SubscribersBlock.module.scss';
const user1 = require('./../../../img/user1.jpg');
const user2 = require('./../../../img/user2.jpg');
const user3 = require('./../../../img/user3.jpg');
const user4 = require('./../../../img/user4.jpg');
const user5 = require('./../../../img/user5.jpg');
const user6 = require('./../../../img/user6.jpg');

const SubscribersBlock:React.FC = () => {
    return (
       <div className={styles.subscribers}>
            <div className={styles.header}>
               <p className={styles.title}>Подписчики</p>
               <span>18 570</span>
            </div>
            <div className={styles.items}>
                <div className={styles.item}>
                    <img
                        src={user1}
                        alt=""
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src={user5}
                        alt=""
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src={user4}
                        alt=""
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src={user3}
                        alt=""
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src={user2}
                        alt=""
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src={user6}
                        alt=""
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src={user6}
                        alt=""
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src={user1}
                        alt=""
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src={user3}
                        alt=""
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src={user4}
                        alt=""
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src={user5}
                        alt=""
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src={user2}
                        alt=""
                    />
                </div>
            </div>
            <Link to="/company/details/subscribers" className={styles.link}>Показать всех</Link>
       </div>
    );
}
export default SubscribersBlock;