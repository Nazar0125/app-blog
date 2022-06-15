import React from 'react';
import { Link } from 'react-router-dom';
import { CreatePost } from '../../pages/post/createPost';
import styles from './Create.module.scss';

const Create:React.FC = () => {
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
    
    let [modalIsOpen, setIsOpen] = React.useState(false);
    
    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div className={styles.create} ref={refMenu}>
                <div className={styles.block} onClick={changeMenu}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </span>
                    <p>
                        Создать
                    </p>
                </div>
                    {
                        open &&
                        <div className={styles.menu}>
                            <Link to={'/post/new'} className={styles.item} onClick={changeMenu}>
                                <span className={styles.img}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg>
                                </span>
                                <span>
                                    Пост
                                </span>
                            </Link>
                            <Link to={'/events/new'} className={styles.item} onClick={changeMenu}>
                                <span className={styles.img}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar-date" viewBox="0 0 16 16">
                                        <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                    </svg>
                                </span>
                                <span>
                                    Мероприятие
                                </span>
                            </Link>                
                        </div>
                    }
                </div>
            <CreatePost modalIsOpen={modalIsOpen} closeModal={closeModal}/>
        </>
            
    );
}

export default Create;