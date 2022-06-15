import React from 'react';
import Menu from './menu';
import My from './my';
import Recommended from './recommended';
import Search from './search';
import styles from './Subscriptions.module.scss';

const Subscriptions:React.FC = () => {
    return (
        <div className={styles.subscriptions}>
            <div className="container-full">
                <div className={styles.wrapper}>
                    <Menu />
                    <Search />
                    <div className={styles.my}>
                        <My />
                        <My />
                        <My />
                    </div> 
                    <Recommended />
                </div>
            </div>
        </div>
    );
}

export default Subscriptions;