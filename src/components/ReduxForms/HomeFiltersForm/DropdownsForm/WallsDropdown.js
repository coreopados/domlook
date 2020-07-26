import React, { useState } from "react";
import { connect } from 'react-redux';
import {
    propWallsFilterCreator
} from '../../../../redux/actionHomeFilterCreators';

const WallsDropdown = ({
    propWallsFilterFunc,
    wallsFilter
}) => {

    const walls_options = [
        { id: 1, value: '', label: 'Не выбрано' },
        { id: 2, value: 'силикатный кирпич', label: 'силикатный кирпич' },
        { id: 3, value: 'ракушечник', label: 'ракушечник' },
        { id: 4, value: 'пеноблок', label: 'пеноблок' },
        { id: 5, value: 'панель', label: 'панель' },
        { id: 6, value: 'монолит', label: 'монолит' },
        { id: 7, value: 'кирпич', label: 'кирпич' },
        { id: 8, value: 'бутовый камень', label: 'бутовый камень' },
    ];
    const [selectedOption, setSelectedOption] = useState(wallsFilter);

    propWallsFilterFunc(selectedOption)
    return (
        <select name="wall-filter" id="wall-filter"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}>
            {walls_options.map(o => (
                <option value={o.value} key={o.id}>{o.label}</option>
            ))}
        </select>
    );
}

const mapStateToProps = (state) => ({
    propWallsFilter: state.filterReducer.propWallsFilter,
})

const mapDispatchToProps = (dispatch) => ({
    propWallsFilterFunc: (selectedOption) => dispatch(propWallsFilterCreator(selectedOption)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(WallsDropdown);

export { Enhanced as WallsDropdown };