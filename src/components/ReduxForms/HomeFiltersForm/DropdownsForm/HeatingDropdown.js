import React, { useState } from "react";
import { connect } from 'react-redux';
import {
    propHeatingFilterCreator
} from '../../../../redux/actionHomeFilterCreators';

const HeatingDropdown = ({
    heatingFilterFunc
}) => {

    const heating_options = [
        { id: 1, value: '', label: 'Не выбрано' },
        { id: 2, value: 'централизованное', label: 'централизованное' },
        { id: 3, value: 'индивидуальное', label: 'индивидуальное' },
        { id: 4, value: 'автономное', label: 'автономное' },
    ];
    const [selectedOption, setSelectedOption] = useState(heating_options[0].value);

    heatingFilterFunc(selectedOption)
    return (
        <select name="heating-filter" id="heating-filter"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}>
            {heating_options.map((o) => (
                <option value={o.value} key={o.id}>{o.label}</option>
            ))}
        </select>
    );
}

const mapStateToProps = (state) => ({
    propHeatingFilter: state.filterReducer.propHeatingFilter,
})

const mapDispatchToProps = (dispatch) => ({
    heatingFilterFunc: (selectedOption) => dispatch(propHeatingFilterCreator(selectedOption)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(HeatingDropdown);

export { Enhanced as HeatingDropdown };