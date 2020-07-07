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
        <select name="status-filter" id="status-filter"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}>
            {status_options.map((o, index) => (
                <option value={o.value} key={index}>{o.label}</option>
            ))}
        </select>
    );
}

// const mapStateToProps = state => ({
//     statusFilter: state.filterReducer.statusFilter,
// })

// const mapDispatchToProps = dispatch => ({
//     statusHouse: () => dispatch(houseStatusCreator()),
//     statusAppartment: () => dispatch(appartmentStatusCreator()),
//     statusCommerce: () => dispatch(commerceStatusCreator())
// });


const mapStateToProps = state => ({
    statusFilter: state.filterReducer.statusFilter,
})

const mapDispatchToProps = dispatch => ({
    statusHouse: () => dispatch(houseStatusCreator()),
    statusAppartment: () => dispatch(appartmentStatusCreator()),
    statusCommerce: () => dispatch(commerceStatusCreator())
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(StatusDropdown);
export { Enhanced as StatusDropdown };





