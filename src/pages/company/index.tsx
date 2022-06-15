import React from 'react';
import Articles from './articles';
import styles from './Company.module.scss';
import Info from './info';

const Company:React.FC = () => {
    return (
       <div className={styles.company}>
           <div className='container-full'>
                <Info />
                <div className={styles.main}>
                    <Articles />
                </div>
           </div>
        </div>
    );
}
export default Company;