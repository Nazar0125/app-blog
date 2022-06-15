import React from 'react';
import styles from './Avatar.module.scss';

interface typeProps {
    img: string | null;
}

const SquareAvatar:React.FC<typeProps> = ({img}) => {
    return (
       <div className={styles.square}>
           {
                img &&
                    <img src={`http://localhost:4000/${img}`} alt=""/>
            }
        </div>
    );
}

export default SquareAvatar;