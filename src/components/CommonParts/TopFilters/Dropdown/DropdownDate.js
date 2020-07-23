import React, { useState } from "react";
import { connect } from 'react-redux';
import {
    sortDateCreator
} from '../../../../redux/actionCreators';


const DropdownDateSort = ({
    sortDateFunc
}) => {
    const date_options = [
        { id: 0, value: null, label: 'не выбран', disabled: true },
        { id: 1, value: 31, label: 'за месяц' },
        { id: 2, value: 7, label: 'за неделю' },
        { id: 3, value: 0, label: 'за сегодня' }
    ];

    const [selectedOption, setSelectedOption] = useState(date_options[0]);


    sortDateFunc(selectedOption)

    return (
        <select name="top-filter-date" id="top-filter-date"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}>
            {date_options.map(o => (
                <option value={o.value} key={o.id}>{o.label}</option>
            ))}
        </select>
    );
};



const mapDispatchToProps = dispatch => ({
    sortDateFunc: selectedOption => dispatch(sortDateCreator(selectedOption)),
});

const Enhanced = connect(null, mapDispatchToProps)(DropdownDateSort);

export { Enhanced as DropdownDateSort };
