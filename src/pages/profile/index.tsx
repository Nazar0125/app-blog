import React from 'react';
import Feed from '../../components/feed';
import CoverBlock from './cover';
import styles from './Profile.module.scss';
import Subscribers from './subs/subscribers';
import Subscriptions from './subs/subscriptions';
import User from './user';

const Profile:React.FC = () => {
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
                        <Feed/>
                        <Feed/>
                        <Feed/>
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

export default Profile;