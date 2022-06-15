import React from 'react';
import Comments from './comments';
import styles from './Post.module.scss';
import { useParams } from 'react-router-dom';
import { PostApi } from '../../api/postApi';
import moment from 'moment';
import LetLike from './letLike';

const Post:React.FC = () => {
    const {id} = useParams();
    const [data, setData] = React.useState<any>();
    const getData = async () => {
        try {
            let obj = await PostApi.getByPost(id)
            setData(obj.content)
        } catch(error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getData()
    }, [id])

    let newDate =  moment.utc(data && data.date).format('DD.MM.YY');

    if(!data) {
        return null;
    }

    return (
        <div className='container-full'>
            <div className={styles.post}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.user}>
                            <div className={styles.ava}>
                
                            </div>
                            <p className={styles.name}>
                                zh
                            </p>
                        </div>
                        <div className={styles.date}>
                            {newDate}
                        </div>
                    </div>
                    <h1 className={styles.title}>
                        {
                            data && data.title
                        }
                    </h1>
                </div>
                    {
                        data.photo &&
                        <div className={styles.photo}>
                            <img src={`http://localhost:4000/${data.photo}`}
                                alt='#'
                                className={styles.img}
                            />
                        </div>
                    }
                <div className={styles.container}>
                    
                    <div className={styles.body} contentEditable='true' dangerouslySetInnerHTML={{ __html: data.text }}>
                    </div>
                    
                    <div className={styles.footer}>
                        <div className = {styles.comments}>
                            {/*<span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#595959" className="bi bi-chat" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                                </svg>
                            </span>
                            <p>
                                {data.commentUser.length}
                            </p>*/}
                        </div>
                        <LetLike post_id={data.id} user_id={data.user_id}/>
                    </div>
                </div>
            </div>
            <Comments comments = {data.commentUser} />
        </div>
    );
}

export default Post;