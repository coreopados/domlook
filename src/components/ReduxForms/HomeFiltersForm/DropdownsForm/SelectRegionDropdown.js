import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import {
    propRegionFilterCreator
} from '../../../../redux/actionHomeFilterCreators';
import { regions } from '../../../../api/testCities.json'

const SelectRegionDropdown = ({
    propRegionFilterFunc,

}) => {

    const [selectedOption, setSelectedOption] = useState('');

    propRegionFilterFunc(selectedOption)


    return (
        <select name="select-region-filter" id="select-region-filter"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}>
            <option value="" >Выберите область</option>
            {regions.region.map((o, index) => (
                <option value={o.name} key={index}>{o.name}</option>
            ))}
        </select>
    );
}

const mapStateToProps = (state) => ({
    propRegionFilter: state.filterReducer.propRegionFilter,
})

const mapDispatchToProps = (dispatch) => ({
    propRegionFilterFunc: (selectedOption) => dispatch(propRegionFilterCreator(selectedOption)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(SelectRegionDropdown);

export { Enhanced as SelectRegionDropdown };