import React from "react";
import { connect } from 'react-redux';
import {
    propCeilingHeightFilterCreator
} from '../../../../redux/actionHomeFilterCreators';

const CeilingHeightDropdown = ({
    propCeilingHeightFilterFunc,
    ceilingHeightFilter
}) => {

    const ceiling_height_options = [
        { id: 1, value: '', label: 'Не выбрано' },
        { id: 2, value: '2.6', label: 'до 2.6' },
        { id: 3, value: '2.8', label: 'до 2.8' },
        { id: 4, value: '3', label: 'до 3' },
        { id: 5, value: '3.2', label: 'до 3.2' },
        { id: 6, value: '3.4', label: 'до 3.4' },
    ];
    // const [selectedOption, setSelectedOption] = useState(ceilingHeightFilter);

    // propCeilingHeightFilterFunc(selectedOption)

    return (
        <select name="ceiling-height-filter" id="ceiling-height-filter"
            value={ceilingHeightFilter}
            onChange={e => propCeilingHeightFilterFunc(e.target.value)}>
            {ceiling_height_options.map(o => (
                <option value={o.value} key={o.id}>{o.label}</option>
            ))}
        </select>
    );
}

const mapStateToProps = (state) => ({
    propCeilingHeightFilter: state.filterReducer.propCeilingHeightFilter,
})

const mapDispatchToProps = (dispatch) => ({
    propCeilingHeightFilterFunc: (selectedOption) => dispatch(propCeilingHeightFilterCreator(selectedOption)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(CeilingHeightDropdown);

export { Enhanced as CeilingHeightDropdown };