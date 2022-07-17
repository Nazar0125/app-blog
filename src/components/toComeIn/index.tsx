import React from 'react';
import { MyModal } from '../modal';
import Auth from './auth';
import styles from './Come.module.scss';
import Registration from './registration';

const ToComeIn:React.FC = () => {
    let [modalIsOpen, setIsOpen] = React.useState(false);
    let [registrationIsOpen, setRegistrationIsOpen] = React.useState(false)
    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setRegistrationIsOpen(false)
        setIsOpen(false)
    }
    const registrationChenge = ():void => {
        setRegistrationIsOpen(!registrationIsOpen)
    }
    return (
        <>
            <div className={styles.toCome} onClick={openModal}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                </span>
                <p className={styles.text}>
                    Войти
                </p>
            </div>
            <MyModal modalIsOpen = {modalIsOpen} closeModal = {closeModal}>
                {
                    !registrationIsOpen ?
                    <>
                        <Auth />
                        <div className= {styles.registrationLink}>
                            <span onClick={registrationChenge}>Регистрация</span>
                        </div>
                    </>
                    :
                    <>
                        <Registration registrationChenge = {registrationChenge}/>
                        <div className= {styles.registrationLink}>
                            <span onClick={registrationChenge}>Войти</span>
                        </div>
                    </>
                }
                <div>

                </div>
            </MyModal>
        </>
    );
}
export default ToComeIn;