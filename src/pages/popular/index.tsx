import React from 'react';
import { PostApi } from '../../api/postApi';
import Section from '../../components/section';
import styles from './Popular.module.scss';
import Requset from './request'

const Popular:React.FC = () => {
    let [content, setContent] = React.useState<any[]>()
    const getData = async () => {
        let obj = await PostApi.getlist();
        setContent(obj.content)
    }
    React.useEffect(() => {
        getData()
    }, [])
    return (
        <div className={styles.popular}>
            <div className='container'>
                <Requset />
                {
                    content && content.map((item:any, i:number):any => {
                        return (
                                <Section
                                    key={i}
                                    id = {item.id}
                                    title = {item.title}
                                    photo = {item.photo}
                                    user = {item.user}
                                    comments = {item.comments}
                                />
                            )
                    })
                }
                
            </div>
        </div>
    );
}

export default Popular;