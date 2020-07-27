import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import {
    sortPriceCreator,
} from '../../../../redux/actionCreators';


const DropdownPriceSort = ({
    sortPrice,
    sortPriceFunc
}) => {

    const price_options = [
        { id: 1, value: 'low-price', label: 'от дешевых к дорогим' },
        { id: 2, value: 'hight-price', label: 'от дорогих к дешевым' }
    ];


    return (

        <select name="top-filter-price" id="top-filter-price"
            value={sortPrice}
            onChange={e => sortPriceFunc(e.target.value)}>
            {price_options.map(o => (
                <option value={o.value} key={o.id}>{o.label}</option>
            ))}
        </select>

    );
};



const mapDispatchToProps = dispatch => ({
    sortPriceFunc: selectedOption => dispatch(sortPriceCreator(selectedOption)),
});

const Enhanced = connect(null, mapDispatchToProps)(DropdownPriceSort);

export { Enhanced as DropdownPriceSort };