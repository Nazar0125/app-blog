import React from 'react';
import SquareAvatar from '../../../components/avatar/squareAvatar';
import styles from './Info.module.scss';

interface typeProps {
    data: any
}

const InfoUser:React.FC<typeProps> = ({data}) => {
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
                {data.name}
            </div>
        </div>
    );
}

export default InfoUser;