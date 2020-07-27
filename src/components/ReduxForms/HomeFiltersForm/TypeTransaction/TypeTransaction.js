import React, { useState } from 'react';
import { connect } from 'react-redux';
import { features_add } from '../../../../api/testFeatures'
import {
    setTypeTransactionCreator
} from '../../../../redux/actionHomeFilterCreators';


const TypeTransaction = ({
    setTypeTransactionFunc,
    typeTransaction
}) => {
    // console.log(typeTransaction)
    const [x, setForm] = useState(typeTransaction);

    const handler = (e) => {
        const { target } = e;

        const { id } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        if (value === true) {
            setForm(f => ({ ...f, [id]: value }));
        } else {
            delete x[target.id]
            const isEmpty = (x) => {
                for (var key in x) {
                    return false;
                }
                return true;
            }
            if (isEmpty(x)) {
                setForm(false)
            }
        }
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
                            id={"" + fac.value + ""}
                            value={"" + fac.value + ""}
                            onChange={handler}

                        />
                        <label htmlFor={"" + fac.value + ""}>{fac.name}</label>
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
