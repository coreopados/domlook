import React, { useState } from "react";
import { connect } from 'react-redux';
import {
    roomFilterCreator
} from '../../../../redux/actionHomeFilterCreators';

const RoomDropdown = ({
    roomFilterFunc,
    roomFilter
}) => {

    const rooms_options = [
        { id: 1, value: '', label: 'Не выбрано' },
        { id: 2, value: '1', label: '1' },
        { id: 3, value: '2', label: '2' },
        { id: 4, value: '3', label: '3' },
        { id: 5, value: '4', label: '4' },
        { id: 6, value: '5', label: '5' },
        { id: 7, value: '6', label: '6' },
    ];
    const [selectedOption, setSelectedOption] = useState(roomFilter);

    roomFilterFunc(selectedOption)
    return (
        <select name="room-filter" id="room-filter"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}>
            {rooms_options.map(o => (
                <option value={o.value} key={o.id}>{o.label}</option>
            ))}
        </select>
    );
}

const mapStateToProps = (state) => ({
    roomsFilter: state.filterReducer.roomsFilter,
})

const mapDispatchToProps = (dispatch) => ({
    roomFilterFunc: (selectedOption) => dispatch(roomFilterCreator(selectedOption)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(RoomDropdown);

export { Enhanced as RoomDropdown };