import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_ROUTE } from '../../utils/consts/consts';
import styles from './Lists.module.scss';

const Lists:React.FC = () => {
    React.useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

           
    const isSticky = (e:any) => {
        const header = document.querySelector('.lists-company');
        if (header !== null) {
            const scrollTop = window.scrollY;
            scrollTop >= 370 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        }
    };
    return (
        <div className='lists-company'>
            <div className={styles.header}>
                <p>
                    Компании
                </p>
                <span>
                    187
                </span>
            </div>
            <div className={styles.items}>
                <Link to = {COMPANY_ROUTE} className={styles.item}>
                    <div className={styles.photo}>
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNumxh-Anwb_ogEHfgUa-PrdTQvxm1dq7cdQ&usqp=CAU" 
                            alt=""
                        />
                    </div>
                    <p>
                        Тинькофф
                    </p>
                </Link>
                <Link to = {COMPANY_ROUTE} className={styles.item}>
                    <div className={styles.photo}>
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNumxh-Anwb_ogEHfgUa-PrdTQvxm1dq7cdQ&usqp=CAU" 
                            alt=""
                        />
                    </div>
                    <p>
                        Сбер
                    </p>
                </Link>
                <Link to = {COMPANY_ROUTE} className={styles.item}>
                    <div className={styles.photo}>
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNumxh-Anwb_ogEHfgUa-PrdTQvxm1dq7cdQ&usqp=CAU" 
                            alt=""
                        />
                    </div>
                    <p>
                        ВКонтакте
                    </p>
                </Link>
                <Link to = {COMPANY_ROUTE} className={styles.item}>
                    <div className={styles.photo}>
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNumxh-Anwb_ogEHfgUa-PrdTQvxm1dq7cdQ&usqp=CAU" 
                            alt=""
                        />
                    </div>
                    <p>
                        hh.ru
                    </p>
                </Link>
                <Link to = {COMPANY_ROUTE} className={styles.item}>
                    <div className={styles.photo}>
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNumxh-Anwb_ogEHfgUa-PrdTQvxm1dq7cdQ&usqp=CAU" 
                            alt=""
                        />
                    </div>
                    <p>
                        VK
                    </p>
                </Link>
                <Link to = {COMPANY_ROUTE} className={styles.item}>
                    <div className={styles.photo}>
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNumxh-Anwb_ogEHfgUa-PrdTQvxm1dq7cdQ&usqp=CAU" 
                            alt=""
                        />
                    </div>
                    <p>
                        Skillbox
                    </p>
                </Link>
                <Link to = {COMPANY_ROUTE} className={styles.item}>
                    <div className={styles.photo}>
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNumxh-Anwb_ogEHfgUa-PrdTQvxm1dq7cdQ&usqp=CAU" 
                            alt=""
                        />
                    </div>
                    <p>
                        Ozon
                    </p>
                </Link>
                <Link to = {COMPANY_ROUTE} className={styles.item}>
                    <div className={styles.photo}>
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNumxh-Anwb_ogEHfgUa-PrdTQvxm1dq7cdQ&usqp=CAU" 
                            alt=""
                        />
                    </div>
                    <p>
                        Яндекс Go
                    </p>
                </Link>
                <Link to = {COMPANY_ROUTE} className={styles.item}>
                    <div className={styles.photo}>
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNumxh-Anwb_ogEHfgUa-PrdTQvxm1dq7cdQ&usqp=CAU" 
                            alt=""
                        />
                    </div>
                    <p>
                        Афито
                    </p>
                </Link>
                <Link to = {COMPANY_ROUTE} className={styles.item}>
                    <div className={styles.photo}>
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNumxh-Anwb_ogEHfgUa-PrdTQvxm1dq7cdQ&usqp=CAU" 
                            alt=""
                        />
                    </div>
                    <p>
                        Альфа-Банк
                    </p>
                </Link>
            </div>
            <div className={styles.footer}>
                <p>Показать все</p>
            </div>
        </div>
    );
}

export default Lists;

