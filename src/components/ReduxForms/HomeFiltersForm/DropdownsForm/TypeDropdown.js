import React, { useState } from "react";
import { connect } from 'react-redux';
import {
    rentTypeCreator,
    saleTypeCreator,
    dailyRentTypeCreator,

} from '../../../../redux/actionHomeFilterCreators';

const TypeDropdown = ({
    typeRent,
    typeSale,
    typeDailyRent
}) => {

    const type_options = [
        { id: 1, value: 'rent', label: 'Аренда' },
        { id: 2, value: 'sell', label: 'Продажа' },
        { id: 3, value: 'dailyRent', label: 'Посуточно' }
    ];
    const [selectedOption, setSelectedOption] = useState(type_options[0].value);


    if (selectedOption === 'rent') {
        typeRent();
    } else if (selectedOption === 'sell') {
        typeSale();
    } else if (selectedOption === 'dailyRent') {
        typeDailyRent();
    }


    return (
        <select name="type-filter" id="type-filter"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}>
            {type_options.map(o => (
                <option value={o.value} key={o.id}>{o.label}</option>
            ))}
        </select>
    );
}

const mapStateToProps = state => ({
    statusFilter: state.filterReducer.statusFilter,
})

const mapDispatchToProps = dispatch => ({
    typeRent: () => dispatch(rentTypeCreator()),
    typeSale: () => dispatch(saleTypeCreator()),
    typeDailyRent: () => dispatch(dailyRentTypeCreator())
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(TypeDropdown);

export { Enhanced as TypeDropdown };