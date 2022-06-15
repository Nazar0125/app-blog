import React from 'react';
import Info from '../info';
import Navigation from '../navigation';
import SubscribersItem from './item';
import styles from './Subscribers.module.scss';

const SubscribersCompany:React.FC = () => {
    return (
       <div className={styles.subscribers}>
           <div className='container-full'>
                <Info />
                <div className={styles.main}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Подписчики</h1>     
                        <div className={styles.items}>
                            <SubscribersItem />
                            <SubscribersItem />
                            <SubscribersItem />
                            <SubscribersItem />
                            <SubscribersItem />
                            <SubscribersItem />
                            <SubscribersItem />
                            <SubscribersItem />
                            <SubscribersItem />
                            <SubscribersItem />
                            <SubscribersItem />
                            <SubscribersItem />
                            <SubscribersItem />

                        </div>         
                    </div>
                    <div className={'block-right'}>
                        <Navigation active={'2'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SubscribersCompany;