import React from "react";
import { connect } from 'react-redux';
import {
    floorFilterCreator
} from '../../../../redux/actionHomeFilterCreators';

const FloorDropdown = ({
    floorFilterFunc,
    floorFilter
}) => {

    const floor_options = [
        { id: 1, value: '', label: 'Не выбрано' },
        { id: 2, value: '6', label: 'до 6 эт.' },
        { id: 3, value: '10', label: 'до 10 эт.' },
        { id: 4, value: '17', label: 'до 17 эт.' },
        { id: 5, value: '25', label: 'до 25 эт.' },
    ];
    // const [selectedOption, setSelectedOption] = useState(floorFilter);

    // floorFilterFunc(selectedOption)
    return (
        <select name="floor-filter" id="floor-filter"
            value={floorFilter}
            onChange={e => floorFilterFunc(e.target.value)}>
            {floor_options.map(o => (
                <option value={o.value} key={o.id}>{o.label}</option>
            ))}
        </select>
    );
}

const mapStateToProps = (state) => ({
    floorFilter: state.filterReducer.floorFilter,
})

const mapDispatchToProps = (dispatch) => ({
    floorFilterFunc: (selectedOption) => dispatch(floorFilterCreator(selectedOption)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(FloorDropdown);

export { Enhanced as FloorDropdown };