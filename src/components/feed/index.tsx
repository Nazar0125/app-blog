import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Feed.module.scss';

const Feed:React.FC = () => {
    let refPopover = React.useRef(null);
    let [popover, setPopover] = React.useState(false);
    const popoverClick = ():void => {
        setPopover(!popover)
    }
    let effectPopover = (e:any) => {
        let path = e.path || (e.composedPath && e.composedPath());
        if (e) {
            if (path) {
                if (!path.includes(refPopover.current)) {
                     setPopover(false)         
                }
            }
        }
    };
    React.useEffect(() => {
        document.addEventListener('click', effectPopover)
    }, []);

    return (
        <div className={styles.feed}>
            <div className={styles.header}>
                <div className={styles.flex}>
                    <div className={styles.user}>
                        <div className={styles.ava}>

                        </div>
                        <p className={styles.name}>
                            Zh
                        </p>
                    </div>
                    <div className={styles.date}>
                        12.07.2021
                    </div>
                </div>
                <div className={styles.panel} ref={refPopover} onClick={popoverClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#595959" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                    {
                        popover &&
                        <div className={styles.popover}>
                            <p className={styles.popove}>Редактировать</p>
                            <p className={styles.popove}>Удалить</p>
                        </div>
                    }
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.content}>
                    <p className={styles.title}>
                        Кофейни Starbucks уйдут из России — бренд больше не будет представлен в стране 
                    </p>
                    <p className={styles.text}>
                    Starbucks приняла решение уйти из России. Она продолжит в течение полугода выплачивать зарплату всем своим сотрудникам в стране, а также поможет им с трудоустройством.
                    </p>
                </div>
                <div className={styles.photo}>

                </div>
                <Link to="/" className={styles.link}/>
            </div>
            <div className={styles.footer}>
                <div className = {styles.comments}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#595959" className="bi bi-chat" viewBox="0 0 16 16">
                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                        </svg>
                    </span>
                    <p>
                        132
                    </p>
                </div>
                <div className={styles.letLike}>
                    <div className={styles.dislike}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#595959" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                    <p className={styles.counter}>
                        52
                    </p>
                    <div className={styles.like}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#595959" className="bi bi-chevron-up" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feed;