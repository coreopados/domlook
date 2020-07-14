import React, { useState } from "react";
import { connect } from 'react-redux';
import {
    priceFromFilterCreator,
    priceToFilterCreator
} from '../../../../redux/actionHomeFilterCreators';

const PriceFromTo = ({
    PriceFromFunc,
    PriceToFunc,
    priceFrom,
    priceTo
}) => {


    const [selectedOptionFrom, setSelectedOptionFrom] = useState(priceFrom);
    const [selectedOptionTo, setSelectedOptionTo] = useState(priceTo);

    PriceFromFunc(selectedOptionFrom);
    PriceToFunc(selectedOptionTo);

    return (
        <div className="wrap-price">
            <input type="number" onChange={e => setSelectedOptionFrom(e.target.value)} value={selectedOptionFrom} placeholder="От" />
            <input type="number" onChange={e => setSelectedOptionTo(e.target.value)} value={selectedOptionTo} placeholder="До" />
            <select name="" id="">
                <option value="dollar">$</option>
                <option value="euro">€</option>
                <option value="hrn">грн.</option>
            </select>
        </div>
    );
}

// const mapStateToProps = (state) => ({
// priceFromFilter: state.filterReducer.priceFromFilter,
// priceToFilter: state.filterReducer.priceToFilter,
// })

const mapDispatchToProps = (dispatch) => ({
    PriceFromFunc: (selectedOption) => dispatch(priceFromFilterCreator(selectedOption)),
    PriceToFunc: (selectedOption) => dispatch(priceToFilterCreator(selectedOption)),
});

const Enhanced = connect(null, mapDispatchToProps)(PriceFromTo);

export { Enhanced as PriceFromTo };