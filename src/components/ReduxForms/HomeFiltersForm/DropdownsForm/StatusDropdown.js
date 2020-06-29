import React, { useState } from "react";
import { connect } from 'react-redux';
import {
    houseStatusCreator,
    appartmentStatusCreator,
    commerceStatusCreator,
} from '../../../../redux/actionHomeFilterCreators';

const StatusDropdown = ({
    statusHouse,
    statusAppartment,
    statusCommerce,
}) => {
    const status_options = [
        { id: 1, value: 'house', label: 'Дома' },
        { id: 2, value: 'appartment', label: 'Квартиры' },
        { id: 3, value: 'commerce', label: 'Коммерческая недвижимость' }
    ];
    const [selectedOption, setSelectedOption] = useState(status_options[0].value);


    if (selectedOption === 'house') {
        statusHouse();
    } else if (selectedOption === 'appartment') {
        statusAppartment();
    } else if (selectedOption === 'commerce') {
        statusCommerce();
    }

    return (
        <select name="type-filter" id="type-filter"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}>
            {status_options.map(o => (
                <option value={o.value} key={o.id}>{o.label}</option>
            ))}
        </select>
    );
}

const mapStateToProps = state => ({
    statusFilter: state.filterReducer.statusFilter,
})

const mapDispatchToProps = dispatch => ({
    statusHouse: () => dispatch(houseStatusCreator()),
    statusAppartment: () => dispatch(appartmentStatusCreator()),
    statusCommerce: () => dispatch(commerceStatusCreator())

    // setSelectedOption: () => dispatch(setSelectedOptionCreator()),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(StatusDropdown);

export { Enhanced as StatusDropdown };