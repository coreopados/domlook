import React, { useState } from "react";
import { connect } from 'react-redux';
import {
    IdFilterCreator
} from '../../../../redux/actionHomeFilterCreators';

const FilterById = ({
    setFilterIdFunc,
    cancel
}) => {

    const [idField, setIdField] = useState('');

    return (
        <div className="idField">
            {/* <input type="number" onChange={e => setIdField(e.target.value)} value={idField} placeholder="введите ID" /> */}
            <input type="number" onChange={e => (setFilterIdFunc(e.target.value), setIdField(e.target.value))} value={idField} placeholder="введите ID" />
            <p className="searchButton" onClick={() => (setFilterIdFunc(idField), cancel())}>Найти</p>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => ({
    setFilterIdFunc: (selectedOption) => dispatch(IdFilterCreator(selectedOption))
});

const Enhanced = connect(null, mapDispatchToProps)(FilterById);

export { Enhanced as FilterById };