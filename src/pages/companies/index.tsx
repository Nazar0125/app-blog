import React from 'react';
import Section from '../../components/section';
import styles from './Companies.module.scss';
import Lists from './lists';

const Companies:React.FC = () => {
    return (
        <div className={styles.companies}>
            <div className='container-full'>
                <div className={styles.header}>
                    <div className={styles.top}>

                    </div>
                    <div className={styles.bottom}>
                        <h1> Компании </h1>
                        <p>Бизнес рассказывает о себе</p>
                    </div>
                    <div className={styles.icon}>
                        <img src="https://leonardo.osnova.io/4e113c5c-72d8-1a5c-e21e-210fc640bb08/-/scale_crop/300x300/-/format/webp"
                            alt=""
                        />
                    </div>
                </div>
                <div className={styles.body}>
                    <div>
                        <Section />
                        <Section />
                        <Section />
                    </div>
                    <div>
                        <Lists />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Companies;

