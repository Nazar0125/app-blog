import React from 'react';
import styles from './Section.module.scss';
import { Link } from 'react-router-dom';
import Subscribe from '../subscribe';
import SquareAvatar from '../avatar/squareAvatar';

interface typeProps {
    id?: any
    title?: string,
    photo?: string,
    comments?: any,
    user?: any
}

const Section:React.FC<typeProps> = ({id, title, photo, comments, user}) => {
    if (!user) {
        return null;
    }
    
    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <Link to = {`/profile/${user.id}`} className={styles.user}>
                    <div className={styles.ava}>
                        <SquareAvatar img = {user.avatar} />
                    </div>
                    <p className={styles.name}>
                        {user.name} {user.surname} 
                    </p>
                </Link>
                <Subscribe />
            </div>
            <div className={styles.body}>
                <div className={styles.content}>
                    <p className={styles.title}>
                        {title}
                    </p>
                    <p className={styles.text}>
                        Рассказываем о задачах, возможностях и приглашаем в команду
                    </p>
                </div>
                {
                    photo ?
                    <div className={styles.photo}>
                        <img
                            src = {`http://localhost:4000/${photo}`}
                            alt = {title}
                            className={styles.img}
                        />
                    </div>
                    :
                    <></>
                }
                
                <Link to={`/post/${id}`} className={styles.link}>
                </Link>
            </div>
            <div className={styles.footer}>
                <div className={styles.left}>
                    <div className = {styles.comments}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16">
                                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                            </svg>
                        </span>
                        <p>
                            {comments.length === 0 ? '' : comments.length}
                        </p>
                    </div>
                    <div className={styles.bookmark}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                    </div>
                </div>
                <div className={styles.right}>
                    {
                        true ? 
                        <div className={styles.like}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                        </div>
                        :
                        <div className={styles.dislike}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                        </div>
                    }
                    <p className={styles.counter}>
                        52
                    </p>
                    
                </div>
            </div>
        </div>
    );
}

export default Section;