import React from 'react';
import Create from '../create';
import Logo from '../logo';
import Search from '../search';
import ToComeIn from '../toComeIn';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Account from '../account';
import Menu from '../menu/menu';
import Saved from '../saved';

const Header:React.FC = () => {
    
    const {auth} = useSelector((state:RootState) => {
        return {
            auth: state.user.auth
        }
    });

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <Menu />
                    <Logo />
                </div>
                <div className="container-full">
                    <div className={styles.items}>
                        <Search />
                        <Create />
                    </div>
                </div>
                <div className={styles.right}>
                    {
                        auth ? 
                        <>
                            <Saved />
                            <Account />
                        </>
                        
                        :
                        <ToComeIn />
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;

