import React from 'react';
import styles from './Comments.module.scss';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { commentsApi } from '../../../api/commentsApi';
import moment from 'moment';
import CommentRight from './right';
import AddComment from './addComment';
import EditComment from './editComment';


interface typeProps {
    comments: any,
}

const Comments:React.FC<typeProps> = ({comments}) => {
    const {id} = useParams();
    const [content, setContent] = React.useState(comments)
    
    const {user} = useSelector((state:RootState) => {
        return {
            user: state.user.user
        }
    });



    React.useEffect(() => {
        document.querySelectorAll('textarea').forEach((el:any) => {
            el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
            el.classList.add('auto');
            el.addEventListener('input', (e:any) => {
                el.style.height = 'auto';
                el.style.height = (el.scrollHeight) + 'px';
            });
        });
        setContent(comments)

    }, [])

    const setComment = (commentAddUser:any) => {
        setContent([commentAddUser, ...content])
    };

    const getDate = (date:any) => {
        return moment.utc(date && date).format('DD.MM.YY');
    }

    const onDeleteComment = async (deleteId:number) => {
        try {
            await commentsApi.deleteComment(deleteId)
            let items = content.filter((list:any) => {
                return list.id !== deleteId
            })
            setContent(items)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.comments}>
            <div className={styles.container}>
                <p className={styles.title}>{ content && content.length <= 0 ? "Комментарий нету" : `${content && content.length} комментарий` } </p>
               
                <AddComment user={user} id = {id} setComment = {setComment}/>
                <div className={styles.items}>
                    {
                        content.map((item:any, i:number) => {
                            return (
                                <div className={styles.item} key={i}>
                                    <div className={styles.info}>
                                        <div className={styles.user}>
                                            <div className={styles.ava}>
                                                {
                                                    item.user?.avatar &&
                                                    <img src={`http://localhost:4000/${item.user?.avatar}`} alt={user.user?.name} />
                                                }
                                            </div>
                                            <div className={styles.p}>
                                                <p className={styles.name}> {item.user?.name}, {item.user?.surname} </p>
                                                <p className={styles.date}>{getDate(item.date)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.content}>
                                        <EditComment
                                            item = {item}
                                            post_id = {id}
                                            user_id = {user.id}
                                            onDeleteComment = {onDeleteComment}
                                        />                    
                                    </div>
                                </div>            
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Comments;