import React from 'react';
import styles from './Events.module.scss';
import Filter from './filter';
import Hat from './hat';
import Item from './item';

const Events:React.FC = () => {
    return (
        <div className={styles.events}>
            <div className="container-full">
                <Hat />
                <div className={styles.main}>
                    <div className={styles.content}>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                    <div>
                            <Filter />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;