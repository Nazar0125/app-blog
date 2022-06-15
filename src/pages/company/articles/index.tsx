import React from 'react';
import Section from '../../../components/section';
import ContactsBlock from '../contactsBlock';
import SubscribersBlock from '../subscribersBlock';
import styles from './Articles.module.scss';

const Articles:React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.articles}>
                <div className={styles.content}>
                    <Section />
                    <Section />
                    <Section />
                </div>
                <div className={'block-right'}>
                    <SubscribersBlock />
                    <ContactsBlock />
                </div>
            </div>
        </div>
    );
}
export default Articles;