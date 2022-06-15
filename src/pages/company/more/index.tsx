import React from 'react';
import { Link } from 'react-router-dom';
import ContactsBlock from '../contactsBlock';
import Info from '../info';
import Navigation from '../navigation';
import SubscribersItem from '../subscribers/item';
import styles from './More.module.scss';

const More:React.FC = () => {
    return (
        <div className={styles.more}>
            <div className='container-full'>
                <Info />
                <div className={styles.main}>
                    <div className={styles.contact}>
                        <div className={styles.subscribers}>
                            <p className={styles.title}>Подписчики </p>
                            <div className={styles.items}>
                                <SubscribersItem />
                                <SubscribersItem />
                                <SubscribersItem />
                                <SubscribersItem />
                                <SubscribersItem />
                                <SubscribersItem />
                                <SubscribersItem />
                                <SubscribersItem />
                            </div>
                            <Link to="/company/details/subscribers" className={styles.all}>
                                Показать всех
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3766a9" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                        <div className={styles.contacts}>
                            <ContactsBlock />
                        </div>
                    </div>
                    <div className={'block-right'}>
                        <Navigation active={'1'} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default More;