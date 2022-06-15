import React from 'react';
import { ProfileApi } from '../../../../api/profileApi';
import { uploadApi } from '../../../../api/uploadApi';
import LoadingRing from '../../../../components/loading/loadingRing';
import styles from './Ava.module.scss';

interface typeProps {
    id: number,
    avatar: any
}

const Ava:React.FC<typeProps> = ({id, avatar}) => {
    const [loadingImg, setLoadingImg] = React.useState<boolean>(false);
    const [imgAvatar, setImgAvatar] = React.useState<any>(null);
    const [img, setImg] = React.useState<string | null>(avatar);

    React.useEffect(() => {
        setImg(avatar)
    }, [])

    const sendFile = async (e:any) => {
        setLoadingImg(true)
        try {
            const data = new FormData()
            data.append("img", e.target.files[0])
            let obj = await uploadApi.avatar(data);
            setImgAvatar(obj.saveBase)
            setImg(obj.saveBase)
            setLoadingImg(false)            
        } catch (error) {
            setLoadingImg(true)
            console.log(error)
        }
    }

    const saveAvatar = async (id:any, imgAvatar:any) => {
        try {
            await ProfileApi.updateAvatar({id, imgAvatar})
        } catch(error) {

        }
    }

    React.useEffect(() => {
        if (id && imgAvatar) {
            saveAvatar(id, imgAvatar)
        }
    }, [imgAvatar]);

    return (
        <div className={styles.ava}>
            {
                img &&
                <div className={styles.photo}>
                    <img src={`http://localhost:4000/${img}`} alt=""/>
                </div>
            }

            <div className={styles.add}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                </svg>
                <input type="file" id="files" name="files" className={styles.input_file} onChange={e => sendFile(e)}/>
                <label htmlFor="files">          
                </label>
            </div>
            {
                loadingImg
                    &&
                <div className={styles.upload_loading}>
                    <LoadingRing />
                </div>
            }
        </div>
    );
}

export default Ava;