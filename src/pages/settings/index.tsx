import React from 'react';
import { useNavigate } from "react-router-dom";
import BackSettings from '../../components/back';
import styles from './Settings.module.scss';

const Settings:React.FC = () => {
    let navigate = useNavigate();
    React.useEffect(() => {
           return navigate("/settings/profile/");
     },[]);
    return (
        <div className={styles.settings}>
            <div className={styles.content}>
                <BackSettings />
            </div>
        </div>
    );
}

export default Settings;