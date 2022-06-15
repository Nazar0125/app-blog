import React from 'react';
import Info from '../info';
import Navigation from '../navigation';
import styles from './Contacts.module.scss';

const ContactsCompany:React.FC = () => {
    return (
       <div className={styles.contacts}>
           <div className='container-full'>
                <Info />
                <div className={styles.main}>
                    <div className={styles.contact}>
                        123                        
                    </div>
                    <div className={'block-right'}>
                        <Navigation active={'3'} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactsCompany;