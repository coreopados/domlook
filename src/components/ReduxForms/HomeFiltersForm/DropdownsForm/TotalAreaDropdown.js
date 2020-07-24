import React, { useState } from "react";
import { connect } from 'react-redux';
import {
    totalAreaCreator
} from '../../../../redux/actionHomeFilterCreators';

const TotalAreaDropdown = ({
    totalAreaFunc,
    totalAreaFilter
}) => {

    const area_options = [
        { id: 1, value: '', label: 'Не выбрано' },
        { id: 2, value: '25', label: 'от 25м' },
        { id: 3, value: '45', label: 'от 45м' },
        { id: 4, value: '65', label: 'от 65м' },
        { id: 5, value: '100', label: 'от 100м' },
    ];
    const [selectedOption, setSelectedOption] = useState(totalAreaFilter);

    totalAreaFunc(selectedOption)
    return (
        <select name="total-area-filter" id="total-area-filter"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}>
            {area_options.map(o => (
                <option value={o.value} key={o.id}>{o.label}</option>
            ))}
        </select>
    );
}

const mapStateToProps = (state) => ({
    totalAreaFilter: state.filterReducer.totalAreaFilter,
})

const mapDispatchToProps = (dispatch) => ({
    totalAreaFunc: (selectedOption) => dispatch(totalAreaCreator(selectedOption)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(TotalAreaDropdown);

export { Enhanced as TotalAreaDropdown };