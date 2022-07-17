import React from 'react';
import SquareAvatar from '../../../components/avatar/squareAvatar';
import styles from './Info.module.scss';
import moment from 'moment';

interface typeProps {
    data: any
}
const InfoUser:React.FC<typeProps> = ({data}) => {
    
    let newDate =  moment.utc(data && data.date).format('YYYY');
    return (
        <div className={styles.info}>
            <div className={styles.header}>
                <div className={styles.avatar}>
                    <SquareAvatar 
                        img = {data.avatar}
                    />
                </div>
            </div>
            <div className={styles.name}>
                {data.name} {data.surname}
            </div>
            <div className={styles.description}>

            </div>
            <div className={styles.data}>
                На проекте с {newDate}
            </div>
        </div>
    );
}

export default InfoUser;