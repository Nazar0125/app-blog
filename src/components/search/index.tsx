import React from 'react';
import styles from './Search.module.scss';

const Search:React.FC = () => {
    let [value, setValue] = React.useState('')
    const onChangeText = (text:string):void => {
        setValue(text)
    }
    return (
        <div className={styles.search}>
            <input
                type='search'
                value={value}
                onChange = {(e) => onChangeText(e.target.value)}
                placeholder='Поиск'
                className={styles.input}
            />
        </div>
    );
}

export default Search;

