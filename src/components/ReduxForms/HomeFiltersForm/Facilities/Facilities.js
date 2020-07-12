import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { features } from '../../../../api/testFeatures'
import {
    setFeaturesCreator,
    addFeaturesCreator,
    removeFeaturesCreator
} from '../../../../redux/actionHomeFilterCreators';


const Facilities = ({
    setFeaturesFunc,
    // addFeaturesFunc,
    // removeFeaturesFunc
}) => {

    const [x, setForm] = useState(false);

    const handler = (e) => {
        const { target } = e;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { id } = target;

        setForm(f => ({ ...f, [id]: value }));

    };
    setFeaturesFunc(x)
    console.log(x)

    return (
        <div className="parametrs">
            <p>Удобства:</p>
            <div className="facilities">
                {features.map((fac, index) => {
                    return <span    >
                        <input
                            key={index}
                            type="checkbox"
                            id={"" + fac.name + ""}
                            value={"" + fac.name + ""}
                            onChange={handler}
                        />
                        <label for={"" + fac.name + ""}>{fac.name}</label>
                    </span>
                })}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setFeaturesFunc: (ads) => dispatch(setFeaturesCreator(ads)),
    // addFeaturesFunc: (ads) => dispatch(addFeaturesCreator(ads)),
    // removeFeaturesFunc: (ads) => dispatch(removeFeaturesCreator(ads)),
});

const Enhanced = connect(null, mapDispatchToProps)(Facilities);

export { Enhanced as Facilities };
