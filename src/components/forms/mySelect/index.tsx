import React from 'react';
import styles from './MySelect.module.scss';
import Select, { StylesConfig } from 'react-select';

interface typeProps {
    options: any,
    selectedOption: any,
    handleChange: any
}

const MySelect:React.FC<typeProps> = ({options, selectedOption, handleChange}) => {
    return (
        <Select
            defaultValue={selectedOption}
            onChange={() => handleChange()}
            options={options}
        />
    );
}

export default MySelect;