import React from 'react';
import { Link } from 'react-router-dom';
import { descriptionApi } from '../../../../api/descriptionApi';
import styles from './Description.module.scss';

interface typeProps {
    id: number
}

const Description:React.FC<typeProps> = ({id}) => {
    let [description, setDescription] = React.useState();
    
    const getData = async () => {
        try {
            let obj = await descriptionApi.getDescription(id)
            setDescription(obj.content.text)
        } catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        getData()
    }, [])

    return (
        <div className={styles.description}>
            <p className={styles.text}>{description}</p>
            <Link to ="/settings/profile" className={styles.change}>Изменить описание </Link>
        </div>        
    );
}

export default Description;