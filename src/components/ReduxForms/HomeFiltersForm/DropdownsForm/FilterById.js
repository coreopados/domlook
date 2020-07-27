import React from "react";
import { connect } from 'react-redux';
import {
    IdFilterCreator
} from '../../../../redux/actionHomeFilterCreators';

const FilterById = ({
    setFilterIdFunc,
    cancel,
    idFilter
}) => {

    // const [idField, setIdField] = useState(idFilter);

    return (
        <div>
            <div className="idField">
                {/* <input type="number" onChange={e => setIdField(e.target.value)} value={idField} placeholder="введите ID" /> */}
                <input type="number" onChange={e => setFilterIdFunc(e.target.value)} value={idFilter} placeholder="введите ID" />
                <p className="searchButton" onClick={e => cancel()}>Найти</p>
            </div>
            <p className="cancelSearchById" onClick={e => (setFilterIdFunc(''), cancel())}>Отмена</p>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => ({
    setFilterIdFunc: (selectedOption) => dispatch(IdFilterCreator(selectedOption))
});

const Enhanced = connect(null, mapDispatchToProps)(FilterById);

export { Enhanced as FilterById };