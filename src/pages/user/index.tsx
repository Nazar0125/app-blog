import React from 'react';
import styles from './User.module.scss';
import { useParams } from 'react-router-dom';
import { usersApi } from '../../api/usersApi';
import SquareAvatar from '../../components/avatar/squareAvatar';
import InfoUser from './info';

const UserPg:React.FC = () => {
    const {id} = useParams();
    const [data, setData] = React.useState<any>()
    
    const getData = async (userId:any) => {
        let obj = await usersApi.getUserBy(userId)
        setData(obj.content)
    }

    React.useEffect(() => {
        getData(id)
    }, [id])

    if(!data) {
        return null
    }

    return (
        <div className={styles.profile}>
            <div className='container-full'>
                
                <InfoUser data={data} />
                
                <div className={styles.main}>
                    <div className={styles.content}>
                        
                    </div>
                    <div className={styles.right}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPg;