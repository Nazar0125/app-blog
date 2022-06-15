import React from 'react';
import styles from './../Comments.module.scss';
import { useForm } from 'react-hook-form';
import { commentsApi } from './../../../../api/commentsApi';
import CommentRight from '../right';

interface typeProps {
    item: any,
    post_id: any,
    user_id: any,
    onDeleteComment: any
}

const EditComment:React.FC<typeProps> = ({item, post_id, user_id, onDeleteComment}) => {
    const [edit, setEdit] = React.useState(false);
    const [text, setText] = React.useState<string>('')
    const { register, handleSubmit, formState: { errors } } = useForm();

    React.useEffect(() => {
        document.querySelectorAll('textarea').forEach((el:any) => {
            el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
            el.classList.add('auto');
            el.addEventListener('input', (e:any) => {
                el.style.height = 'auto';
                el.style.height = (el.scrollHeight) + 'px';
            });
        });
        setText(item.text)
    }, [])

    
    const onSubmit = async (data:any, e:any) => {
        e.preventDefault();
        console.log(data)
        try {
            let updateComment = {
                id: item.id,
                post_id: post_id,
                user_id: user_id,
                text: data.text
            }
            setEdit(!edit)
            let a = await commentsApi.updateComment(updateComment);
            if(a.statusCode === 200) {
                setText(data.text)
            }
            console.log(a);
        } catch(error) {
            console.log(error);
        }
    };

    const onEditComment = () => {
        setEdit(!edit)
    }

    return (
        <>
            <CommentRight
                userId = {user_id}
                item = {item}
                onDeleteComment = {onDeleteComment}
                onEditComment = {onEditComment}
            />
            {
                edit
                    ?
                <form onSubmit = {handleSubmit(onSubmit)}>
                    <div className = {styles.write}>
                        <textarea
                            className = {styles.textarea}
                            defaultValue = {item.text}
                            placeholder = "Написать комментарий"
                            {...(register && register('text', { required: true, max: 280 }))}
                        >
                        </textarea>
                        <div className={styles.btns}>
                            <div className={styles.close} onClick={() => setEdit(false)}>
                                Отмена
                            </div>
                            <button className = {styles.send}>
                                Редактировать
                            </button>
                        </div>
                    </div>
                </form>
                    :
                <p className={styles.text}>
                    {text}
                </p>
            }
        </>
    );
}

export default EditComment;