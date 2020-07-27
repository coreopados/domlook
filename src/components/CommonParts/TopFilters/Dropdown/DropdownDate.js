import React from "react";
import { connect } from 'react-redux';
import {
    sortDateCreator
} from '../../../../redux/actionCreators';


const DropdownDateSort = ({
    sortDateFunc,
    sortDate
}) => {
    const date_options = [
        { id: 0, value: 'false', label: 'не выбран', disabled: true },
        { id: 1, value: 31, label: 'за месяц' },
        { id: 2, value: 7, label: 'за неделю' },
        { id: 3, value: 0, label: 'за сегодня' }
    ];

    // const [selectedOption, setSelectedOption] = useState(date_options[0]);


    // sortDateFunc(selectedOption)

    return (
        <select name="top-filter-date" id="top-filter-date"
            value={sortDate}
            // value={selectedOption}
            onChange={e => sortDateFunc(e.target.value)}>
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
