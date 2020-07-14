import React, { useState } from 'react';
import { connect } from 'react-redux';
import { features_add } from '../../../../api/testFeatures'
import {
    setTypeTransactionCreator
} from '../../../../redux/actionHomeFilterCreators';


const TypeTransaction = ({
    setTypeTransactionFunc
}) => {

    const [x, setForm] = useState(false);

    const handler = (e) => {
        const { target } = e;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { id } = target;

        setForm(f => ({ ...f, [id]: value }));

    };
    setTypeTransactionFunc(x)

    return (
        <div className="terms">
            <p className="label-filter">Тип сделки:</p>
            <div className="type_transaction">
                {features_add.map((fac, index) => {
                    return <span key={index} >
                        <input
                            type="checkbox"
                            id={"" + fac.name + ""}
                            value={"" + fac.name + ""}
                            onChange={handler}
                        />
                        <label htmlFor={"" + fac.name + ""}>{fac.name}</label>
                    </span>
                })}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setTypeTransactionFunc: (ads) => dispatch(setTypeTransactionCreator(ads)),
});

const Enhanced = connect(null, mapDispatchToProps)(TypeTransaction);

export { Enhanced as TypeTransaction };
