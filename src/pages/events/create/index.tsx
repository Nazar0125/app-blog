import React from 'react';
import DatePicker from "react-datepicker";
import { MyInput } from '../../../components/forms/myInput';
import MySelect from '../../../components/forms/mySelect';
import styles from './Create.module.scss';
import "react-datepicker/dist/react-datepicker.css";


const optionsRibbon = [
    { value: 'ribbon1', label: 'Популярное' },
    { value: 'ribbon2', label: 'Свежее' },
    { value: 'ribbon3', label: 'Моя лента' },
]

const CreateEvents:React.FC = () => {
    const [startDate, setStartDate] = React.useState(null);
    const [selectedOptionRibbon, setSelectedOptionRibbon] = React.useState(optionsRibbon[0]);
    const handleChangeRibbon = () => {
        setSelectedOptionRibbon(selectedOptionRibbon)
    }
    return (
        <div className={styles.create}>
            <div className="container-full">
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <h1 className={styles.title}>Добавить мероприятие</h1>
                        <div className={styles.item}>
                            <p className={styles.text}>Название</p>
                            <MyInput placeholder='Например, лекция' type='text'/>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.text}>Где</p>
                            <MyInput placeholder='Например, Онлайын' type='text'/>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.text}>Когда начало, время по Москве</p>
                            <div className={styles.when}>
                                <div className={styles.date}>
                                    <DatePicker selected={startDate} onChange={(date:any) => setStartDate(date)} />
                                </div>
                                <div className={styles.select}>
                                    <MySelect 
                                        options = {optionsRibbon}
                                        selectedOption = {selectedOptionRibbon}
                                        handleChange = {handleChangeRibbon}
                                    />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateEvents;