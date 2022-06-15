import React from 'react';
import styles from './../Comments.module.scss';
import { useForm } from 'react-hook-form';
import { commentsApi } from './../../../../api/commentsApi';


interface typeProps {
    id: any,
    user: any,
    setComment: any,
}

const AddComment:React.FC<typeProps> = ({id, user, setComment}) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    React.useEffect(() => {
        document.querySelectorAll('textarea').forEach((el:any) => {
            el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
            el.classList.add('auto');
            el.addEventListener('input', (e:any) => {
                el.style.height = 'auto';
                el.style.height = (el.scrollHeight) + 'px';
            });
        });
    }, [])

    const onSubmit = async (data:any, e:any) => {
        e.preventDefault();
        try {
            let comment = {
                "post_id": Number(id),
                "user_id": user.id,
                "text": data.text
            }
            let items = await commentsApi.addComment(comment);
            let commentAddUser = items.content;
            commentAddUser.user = {
                ...user
            }
            setValue('text', '');
            setComment(commentAddUser);
        } catch(error) {
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.write}>
                    <textarea
                        className={styles.textarea}
                        placeholder="Написать комментарий"
                        {...(register && register('text', { required: true, max: 280 }))}
                    >
                    </textarea>
                    <button className={styles.send}>
                        Отправить
                    </button>
                </div>
            </form>
        </>
    );
}

export default AddComment;