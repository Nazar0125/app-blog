import React from 'react';
import styles from './../Post.module.scss';
import { useParams } from 'react-router-dom';
import { PostApi } from '../../../api/postApi';

interface typeProps {
    post_id: number,
    user_id: number
}

const LetLike:React.FC<typeProps> = ({post_id, user_id}) => {
    const {id} = useParams();
    const [userLike, setUserLike] = React.useState<boolean>(true)

    const getData = async () => {
        try {
            let data = {
                id: post_id
            }
            let obj = await PostApi.getLike(data)
            console.log(obj)
        } catch(error) {
            console.log(error)
        }
    }


    const onAddLike = async () => {
        let data = {
            post_id,
            user_id
        }
        let obj = await PostApi.addLike(data)
        console.log(obj)
    }

    const onDeleteLike = async () => {
        let data = {
            post_id,
            user_id
        }
        console.log(data)
    }

    React.useEffect(() => {
        getData()
    }, [post_id])


    return (
        <div className={styles.letLike}>
            {
                userLike ?
                <div className={styles.dislike} onClick = {onDeleteLike}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#cd192e" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                </div>
                :
                <div className={styles.like} onClick = {onAddLike}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                </div>
            }
            <p className={styles.counter}>
                52
            </p>
        </div>
    );
}

export default LetLike;