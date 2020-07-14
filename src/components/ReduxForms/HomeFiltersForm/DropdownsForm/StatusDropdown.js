import React, { useState } from "react";
import { connect } from 'react-redux';
import {
    propStatusFilterCreator
} from '../../../../redux/actionHomeFilterCreators';

const StatusDropdown = ({
    statusFilter,
    statusFilterFunc,
}) => {

    const [selectedOption, setSelectedOption] = useState(statusFilter);

    const status_options = [
        { id: 0, value: '', label: 'Не выбрано' },
        { id: 1, value: 'rent', label: 'Аренда' },
        { id: 2, value: 'sale', label: 'Продажа' },
        { id: 3, value: 'dailyRent', label: 'Посуточно' }
    ];

    // let startopt = '';

    // if (match.path === "/sale") {
    //     startopt = type_options[0].value
    // } else if (match.path === "/rent") {
    //     startopt = type_options[0].value
    // } else if (match.path === "/dailyRent") {
    //     startopt = type_options[0].value
    // } else if (match.path === "/commonAds") {
    //     startopt = type_options[0].value
    // } else if (match.path === "/") {
    //     startopt = type_options[1].value
    // }





    statusFilterFunc(selectedOption)

    return (
        <select name="status-filter" id="status-filter"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}>
            {status_options.map(o => (
                <option value={o.value} key={o.id}>{o.label}</option>
            ))}
        </select>
    );
}



const mapDispatchToProps = dispatch => ({
    statusFilterFunc: selectedOption => dispatch(propStatusFilterCreator(selectedOption))
});

const Enhanced = connect(null, mapDispatchToProps)(StatusDropdown);

export { Enhanced as StatusDropdown };