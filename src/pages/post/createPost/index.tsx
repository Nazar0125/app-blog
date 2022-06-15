import React from 'react';
import Modal from 'react-modal';
import { MyEditor } from '../editor';
import styles from './CreatePost.module.scss';
import { useForm } from "react-hook-form";
import MySubmit from '../../../components/forms/mySubmit';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 2,
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '880px',
        height: '700px',
    },
};

interface typeProps {
    modalIsOpen: boolean,
    closeModal: () => void,
}

export const CreatePost:React.FC<typeProps> = ({modalIsOpen, closeModal}) => {
    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm();
    
    const onSubmit = async (data:any, e:any) => {
        console.log(data)
    };

    return (
        <div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
                <span onClick={closeModal} className = {styles.close}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </span>
                <div className={styles.main}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.input}>
                            <input
                                type={'text'}
                                placeholder="Заголовок"
                                {...(register('title', { required: true }))}
                            />
                        </div>
                        <div className={styles.body}>
                            <MyEditor
                                setValue={setValue} 
                                getValues={getValues} 
                                name="text"
                                register={register}
                            />
                        </div>
                        <div className={styles.footer}>
                            <MySubmit text='Опубликовать' />
                        </div>
                    </form>
                </div>    
            </Modal>
        </div>
    );
}