import React from 'react';
import styles from './../Comments.module.scss';

interface typeProps {
    userId: number,
    item: any,
    onDeleteComment: any,
    onEditComment: any
}

const CommentRight:React.FC<typeProps> = ({userId, item, onDeleteComment, onEditComment}) => {
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

    const onDelete = (id:number) => {
        try {
            onDeleteComment(id)
            setOpen(!open)
        } catch (error) {
            console.log(error)
        }
    }

    const onEdit = (id:number) => {
        try {
            onEditComment(id)
            setOpen(!open)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.right} ref={refMenu}>
            <div className={styles.letLike}>
                <div className={styles.dislike}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#595959" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
                <p className={styles.counter}>
                    52
                </p>
                <div className={styles.like}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#595959" className="bi bi-chevron-up" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                    </svg>
                </div>
            </div>
                {
                    userId === item.user_id &&
                    <div className={styles.panel} onClick = {changeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                    </div>
                }
                                            
                {
                    open &&
                    <div className={styles.menu}>
                        <div className={styles.menu_item} onClick={() => onEdit(item.id)}>
                            <span className={styles.menu_icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                </svg>
                            </span>
                            <span className={styles.menu_text}>
                                Редактировать
                            </span>
                        </div>
                        <div className={styles.menu_item} onClick={() => onDelete(item.id)}>
                            <span className={styles.menu_icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </span>
                            <span className={styles.menu_text}>
                                Удалить
                            </span>
                        </div>
                    </div>
                }
            </div>
        );
}

export default CommentRight;