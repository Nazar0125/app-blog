import React from 'react';
import Menu from './../menu';
import styles from './Profile.module.scss';
import styles1 from './../Settings.module.scss'
import BackSettings from '../../../components/back';
import MySelect from '../../../components/forms/mySelect';
import { MyButton } from '../../../components/btn';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import Description from './description';

const optionsStatus = [
    { value: 'chocolate', label: 'Показывать когда я онлайн' },
    { value: 'strawberry', label: 'Скрыть от всех' },
];

const optionsRibbon = [
    { value: 'ribbon1', label: 'Популярное' },
    { value: 'ribbon2', label: 'Свежее' },
    { value: 'ribbon3', label: 'Моя лента' },
]

const optionsSort = [
    { value: 'sort1', label: 'По популярности' },
    { value: 'sort2', label: 'По дате' },
]

const optionsEntries = [
    { value: 'sort1', label: 'По популярности' },
    { value: 'sort2', label: 'По дате' },
]
const ProfileSettings:React.FC = () => {
    const {user} = useSelector((state:RootState) => {
        return {
            user: state.user.user
        }
    });
    console.log('user', user)
    const [selectedOptionStatus, setSelectedOptionStatus] = React.useState(optionsStatus[0]);
    const [selectedOptionRibbon, setSelectedOptionRibbon] = React.useState(optionsRibbon[0]);
    const [selectedOptionSort, setSelectedOptionSort] = React.useState(optionsSort[0]);
    const [selectedOptionEntries, setSelectedOptionEntries] = React.useState(optionsEntries[0]);
    
    const handleChangeStatus = () => {
        setSelectedOptionStatus(selectedOptionStatus)
    }

    const handleChangeRibbon = () => {
        setSelectedOptionRibbon(selectedOptionRibbon)
    }
    
    const handleChangeSort = () => {
        setSelectedOptionSort(selectedOptionSort)
    }
    
    const handleChangeEntries = () => {
        setSelectedOptionEntries(selectedOptionEntries)
    }

    
    return (
        <div className={styles1.settings}>
            <div className='container-full'>
                <div className={styles1.wrapper}>
                    <div>
                        <div className={styles1.content}>
                            <BackSettings />
                            <Description />
                        </div>
                        <div className={styles1.content}>
                            <div className={styles1.item}>
                                <p className={styles1.title}>
                                    Статус онлайн 
                                </p>
                                <MySelect
                                    options = {optionsStatus}
                                    selectedOption = {selectedOptionStatus}
                                    handleChange = {handleChangeStatus}
                                />
                            </div>
                            <div className={styles1.item}>
                                <p className={styles1.title}>
                                    Лента по умолчанию
                                </p>
                                <MySelect
                                    options = {optionsRibbon}
                                    selectedOption = {selectedOptionRibbon}
                                    handleChange = {handleChangeRibbon}
                                />
                            </div>
                            <div className={styles1.item}>
                                <p className={styles1.title}>
                                    Сортировака Моей ленты
                                </p>
                                <MySelect
                                    options = {optionsSort}
                                    selectedOption = {selectedOptionSort}
                                    handleChange = {handleChangeSort}
                                />
                            </div>
                            <div className={styles1.item}>
                                <p className={styles1.title}>
                                    Записи в блоге 
                                </p>
                                <MySelect
                                    options = {optionsEntries}
                                    selectedOption = {selectedOptionEntries}
                                    handleChange = {handleChangeEntries}
                                />
                            </div>
                            <div className={styles1.footer}>
                                <MyButton text='Сохранить'/>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <Menu actve={0}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileSettings;