import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { PostApi } from '../../../api/postApi';
import { uploadApi } from '../../../api/uploadApi';
import Back from '../../../components/back';
import { MyInput } from '../../../components/forms/myInput';
import MySubmit from '../../../components/forms/mySubmit';
import LoadingRing from '../../../components/loading/loadingRing';
import { TinyEditor } from '../../../components/tinyEditor';
import { RootState } from '../../../store/store';
import styles from './New.module.scss';
import { useNavigate } from "react-router-dom";

const NewPost:React.FC = () => {
    let navigate = useNavigate();

    const [loadingImg, setLoadingImg] = React.useState<boolean>(false);
    const [loadingSava, setLoadingSava] = React.useState<boolean>(false);
    const [imgPost, setImgPost] = React.useState<any>(null);
    const [img, setImg] = React.useState<string | null>(null);

    const {user} = useSelector((state:RootState) => {
        return {
            user: state.user.user
        }
    });
    
    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm();
    


    const sendFile = async (e:any) => {
        setLoadingImg(true)
        try {
            const data = new FormData()
            data.append("img", e.target.files[0])
            let obj = await uploadApi.upload(data);
            setImgPost(obj.saveBase)
            setImg(obj.showNow)
            setLoadingImg(false)
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmit = async (data:any, e:any) => {
        setLoadingSava(true)
        try {
            let news = {
                title: data.title,
                text: data.text,
                user_id: user.id,
                photo: imgPost
            }

            const post = await PostApi.addPost(news)
            setLoadingSava(false)
            return navigate(`/post/${post.content.id}`);
        } catch (error) {
            console.log(error)
            setLoadingSava(false)
        }
    };

    const onDeleteImg = () => {
        setImg(null)
    }

    return (
        <div className='container-full'>
            <div className={styles.new}>
                <Back />
                <h1 className={styles.h1}>Добавить пост</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.title}>
                        <MyInput
                            type='text'
                            placeholder = 'Заголовка'
                            name='title'  
                            register = {register}
                            errors = {errors}
                        />
                    </div>
                    
                    {
                        img === null ?
                        <div className={styles.upload}>
                            <input type="file" id="files" name="files" className={styles.input_file} onChange={e => sendFile(e)} />
                            <label htmlFor="files">
                                {
                                    !loadingImg &&
                                    <span className={styles.add_image}>
                                        Добавить изображение
                                    </span>
                                }
                                <output id="list"></output>
                            </label>
                            {
                                loadingImg
                                &&
                                <div className={styles.upload_loading}>
                                    <LoadingRing />
                                </div>
                            }
                        </div>
                        :
                        <div className={styles.img}>
                            <img src={img} alt=""/>
                            <div className={styles.close} onClick={onDeleteImg}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e55c78" className="bi bi-x-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </div>
                            <div className={styles.overflay}>

                            </div>
                        </div>
                    }

                    <div className={styles.editor}>
                        <TinyEditor setValue={setValue} getValues={getValues} name="text" register={register} />
                    </div>
                    <div className={styles.footer}>
                        <MySubmit text={loadingSava ? 'Сохранение' : 'Опубликовать'} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewPost;