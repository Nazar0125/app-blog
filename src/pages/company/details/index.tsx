import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Details.module.scss';

const Details:React.FC = () => {
    let navigate = useNavigate();
    React.useEffect(() => {
           return navigate("/company/details/more/");
     },[]);
    return (
       <div className={styles.details}>
           
       </div>
    );
}
export default Details;