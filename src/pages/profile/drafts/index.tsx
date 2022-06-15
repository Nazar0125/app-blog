import React from 'react';
import CoverBlock from '../cover';
import Subscribers from '../subs/subscribers';
import Subscriptions from '../subs/subscriptions';
import User from '../user';
import styles from './../Profile.module.scss';
import styles1 from './../Drafts.module.scss';

const Drafts:React.FC = () => {
    return (
        <div className={styles.profile}>
            <div className='container-full'>
                <CoverBlock />
                <User />
                <div className={styles.main}>
                    <div className={styles.content}>
                        <div className={styles.add}>
                            <div className={styles.top}>
                                <div className={styles.ava}>

                                </div>
                                <p>
                                    Новая запись
                                </p>
                            </div>
                            <div className={styles.buttons}>
                                <div className={styles.button}>
                                    Фото и видео
                                </div>
                                <div className={styles.button}>
                                    Ссылка
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <Subscribers />
                        <Subscriptions />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drafts;