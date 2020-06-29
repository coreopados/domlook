import React, { useState } from "react";
import { connect } from 'react-redux';
import {
    sortByTodayCreator,
    sortByWeekCreator,
    sortByMounthCreator,

} from '../../../../redux/actionCreators';


const DropdownDateSort = ({
    sortByToday,
    sortByWeek,
    sortByMounth,
    activeTopFilterDate,
}) => {
    const price_options = [
        { id: 1, value: 0, label: 'за сегодня' },
        { id: 2, value: 7, label: 'за неделю' },
        { id: 3, value: 30, label: 'за месяц' }];
    const [selectedOption, setSelectedOption] = useState(price_options[0].value);

    if (selectedOption === 'byToday') {
        sortByToday();
    } else if (selectedOption === 'byWeek') {
        sortByWeek();
    } else if (selectedOption === 'byMounth') {
        sortByMounth();
    }


    return (
        <select name="top-filter-price" id="top-filter-price"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}>
            {price_options.map(o => (
                <option value={o.value} key={o.id}>{o.label}</option>
            ))}
        </select>
    );
};

const mapStateToProps = state => ({
    selectedOption: state.filterByDateReducer.selectedOption,
    // active_top_filter: state.mainReducer.active_top_filter,
})

const mapDispatchToProps = dispatch => ({
    sortByToday: () => dispatch(sortByTodayCreator()),
    sortByWeek: () => dispatch(sortByWeekCreator()),
    sortByMounth: () => dispatch(sortByMounthCreator()),

});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(DropdownDateSort);

export { Enhanced as DropdownDateSort };
