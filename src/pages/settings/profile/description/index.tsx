import React from 'react';
import styles1 from './../../Settings.module.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { descriptionApi } from '../../../../api/descriptionApi';
import MySubmit from '../../../../components/forms/mySubmit';
import styles from './Description.module.scss'
import { useForm } from 'react-hook-form';
import { MyError } from '../../../../components/forms/myError';

const Description:React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [description, setDescription] = React.useState<any>();
    const [loading, setLoading] = React.useState<boolean>(false);

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

    const {user} = useSelector((state:RootState) => {
        return {
            user: state.user.user
        }
    });
    
    const getData = async () => {
        try {
            let obj = await descriptionApi.getDescription(user.id)
            if (obj.statusCode === 200) {
                setDescription(obj)
            }
        } catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        getData()
    }, [])
    
    const onSubmit = async (data:any, e:any) => {
        e.preventDefault();
        setLoading(true)
        try {
            if (description) {
                let item = {
                    id: description.content.id,
                    text: data.text
                }
                
                let obj = await descriptionApi.updataDescription(item);
                if (obj.statusCode === 200) {
                    setLoading(false)
                }
            }
        } catch(error) {
            setLoading(true)
            console.log(error);
        }
    };

    return (
        <div className={styles1.item}>
            <h1 className={styles1.title}>
                Описание к блогу 
            </h1>
            <div className={styles.write}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea 
                        className={styles.textarea}                
                        defaultValue = {description && description.content.text}
                        {...(register && register('text', { required: true, max: 280 }))}> 
                    </textarea>
                    {errors && errors.text && <MyError text='Поля обязательные для заполнения'/>}
                    <div className={styles.submit}>
                        <MySubmit text={loading ? 'Cохранение' : 'Сохранить'} />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Description;
