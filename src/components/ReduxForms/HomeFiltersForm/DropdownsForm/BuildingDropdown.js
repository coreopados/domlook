import React, { useState } from "react";
import { connect } from 'react-redux';
import {
    propBuildingFilterCreator
} from '../../../../redux/actionHomeFilterCreators';

const BuildingDropdown = ({
    propBuildingFilterFunc,
    buildingFilter
}) => {

    const build_options = [
        { id: 1, value: '', label: 'Не выбрано' },
        { id: 2, value: 'Чешский проект', label: 'Чешский проект' },
        { id: 3, value: 'Хрущевка', label: 'Хрущевка' },
        { id: 4, value: 'Сталинка', label: 'Сталинка' },
    ];
    const [selectedOption, setSelectedOption] = useState(buildingFilter);

    propBuildingFilterFunc(selectedOption)

    return (
        <select name="building-filter" id="building-filter"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}>
            {build_options.map(o => (
                <option value={o.value} key={o.id}>{o.label}</option>
            ))}
        </select>
    );
}

// const mapStateToProps = (state) => ({
//     buildingFilter: state.filterReducer.buildingFilter,
// })

const mapDispatchToProps = (dispatch) => ({
    propBuildingFilterFunc: (selectedOption) => dispatch(propBuildingFilterCreator(selectedOption)),
});

const Enhanced = connect(null, mapDispatchToProps)(BuildingDropdown);

export { Enhanced as BuildingDropdown };