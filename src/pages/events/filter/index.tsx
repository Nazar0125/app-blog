import React from 'react';
import { MyButton } from '../../../components/btn';
import MySelect from '../../../components/forms/mySelect';
import Topic from '../topic';
import styles from './Filter.module.scss';

const optionsStatus = [
    { value: 'value1', label: 'Без разницы' },
    { value: 'value2', label: 'Онлайн' },
    { value: 'value3', label: 'Москва' },
    { value: 'value4', label: 'Санкт-Петербург' },
    { value: 'value5', label: 'Токио' },
    { value: 'value6', label: 'Лондон' },
    { value: 'value7', label: 'Анталия' },
];

const Filter:React.FC = () => {
    const [selectedOptionStatus, setSelectedOptionStatus] = React.useState(optionsStatus[0]);
    
    const handleChangeStatus = () => {
        setSelectedOptionStatus(selectedOptionStatus)
    }

    return (
        <div className={styles.filter}>
            <p className={styles.h1}>Фильтры мероприятий</p>
            <div className={styles.item}>
                <p className={styles.title}>
                    Где
                </p>
                <MySelect
                    options = {optionsStatus}
                    selectedOption = {selectedOptionStatus}
                    handleChange = {handleChangeStatus}
                />
            </div>
            <div className={styles.item}>
                <p className={styles.title}>
                    Тема 
                </p>
                <Topic text="Разработка" />
                <Topic text="Маркетинг" />
                <Topic text="Дизайн" />
                <Topic text="Менеджмент" />
                <Topic text="hr" />
                <Topic text="Тестирование" />
                <Topic text="Аналитика" />
                <Topic text="Контент" />
                <Topic text="Образование" />

            </div>
            <div className={styles.footer}>
                <MyButton text='Применить'/>
                <div className={styles.reset}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Filter;