import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Account.module.scss';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

const Account:React.FC = () => {
    const {user} = useSelector((state:RootState) => {
        return {
            user: state.user.user
        }
    });
    let [open, setOpen] = React.useState<boolean>(false);    
    let refMenu = React.useRef(null);
    
    let effectMenu = (e:any) => {
        let path = e.path || (e.composedPath && e.composedPath());
        if (e) {
            if (path) {
                if (!path.includes(refMenu.current)) {
                    setOpen(false)         
                }
            }
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', effectMenu)
    }, []);

    const changeMenu = () => {
        setOpen(!open)
    }
    return (
        <div className={styles.account} ref={refMenu}>
            <div className={styles.show} onClick={changeMenu}>
                <div className={styles.ava}>
                    {
                        user.avatar &&
                        <img src = {`http://localhost:4000/${user.avatar}`} alt = {user.name} />
                    }
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            {
                open &&
                <div className={styles.items}>
                    <div className={styles.item}>
                        <Link to="/profile" className={styles.link}>
                            <div className={styles.photo}>
                                {
                                    user.avatar &&
                                    <img src = {`http://localhost:4000/${user.avatar}`} alt = {user.name}/>
                                }
                            </div>
                            <p className={styles.name}>
                                {user.name}
                            </p>
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link to="/settings/profile" className={styles.link}> 
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                                </svg>
                            </div>
                            <p className={styles.name}>
                                Настройки
                            </p>
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.link}> 
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e55c78" className="bi bi-gear" viewBox="0 0 16 16">
                                    <path d="M12 10V8H7V6h5V4l3 3-3 3zm-1-1v4H6v3l-6-3V0h11v5h-1V1H2l4 2v9h4V9h1z"></path>    
                                </svg>
                            </div>
                            <p className={styles.name_exit}>
                                Выход
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Account;