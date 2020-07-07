import React, { useState } from "react";
import { connect } from 'react-redux';
import {
    propOfferFilterCreator
} from '../../../../redux/actionHomeFilterCreators';

const OfferDropdown = ({
    propOfferFilterFunc
}) => {

    const offer_options = [
        { id: 1, value: '', label: 'Не выбрано' },
        { id: 2, value: 'от хозяина', label: 'от хозяина' },
        { id: 3, value: 'от собственника', label: 'от собственника' },
        { id: 4, value: 'от представителя застройщика', label: 'от представителя застройщика' },
        { id: 5, value: 'от посредника', label: 'от посредника' },
        { id: 6, value: 'от застройщика', label: 'от застройщика' },
    ];
    const [selectedOption, setSelectedOption] = useState(offer_options[0].value);

    propOfferFilterFunc(selectedOption)
    return (
        <select name="offer-filter" id="offer-filter"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}>
            {offer_options.map((o) => (
                <option value={o.value} key={o.id}>{o.label}</option>
            ))}
        </select>
    );
}

const mapStateToProps = (state) => ({
    propOfferFilter: state.filterReducer.propOfferFilter,
})

const mapDispatchToProps = (dispatch) => ({
    propOfferFilterFunc: (selectedOption) => dispatch(propOfferFilterCreator(selectedOption)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(OfferDropdown);

export { Enhanced as OfferDropdown };