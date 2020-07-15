import React, { useState, useMemo } from "react";
import { connect } from 'react-redux';
import {
    typeFilterCreator
} from '../../../../redux/actionHomeFilterCreators';

const TypeDropdown = ({
    typeFilter,
    typeFilterFunc,

}) => {

    const [selectedOption, setSelectedOption] = useState(typeFilter);

    const type_options = [
        { id: 0, value: '', label: 'Не выбрано' },
        { id: 1, value: 'house', label: 'Дома' },
        { id: 2, value: 'apartment', label: 'Квартиры' },
        { id: 3, value: 'commerce', label: 'Коммерческая недвижимость' }
    ];

    typeFilterFunc(selectedOption)

    return (
        <select name="type-filter" id="type-filter"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}>
            {type_options.map((o, index) => (
                <option value={o.value} key={index}>{o.label}</option>
            ))}
        </select>
    );
}

const mapDispatchToProps = dispatch => ({
    typeFilterFunc: selectedOption => dispatch(typeFilterCreator(selectedOption))
});

const Enhanced = connect(null, mapDispatchToProps)(TypeDropdown);

export { Enhanced as TypeDropdown };





