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
    addFeaturesFunc,
    removeFeaturesFunc
}) => {


    const [selectedOption, setSelectedOption] = useState([]);


    let check = false
    // const addToArr = (event) => {
    //     check = !check
    //     if (check === true) {
    //         setSelectedOption([...selectedOption, {
    //             id: selectedOption.length,
    //             value: ''
    //         }])
    //     }
    // }
    console.log(selectedOption)

    setFeaturesFunc(selectedOption)

    return (
        <div className="parametrs">
            <p>Удобства:</p>
            <div className="facilities">
                {features.map((fac) => {
                    return <span>
                        {/* <input type="checkbox" id={"" + fac.name + ""} chacked={check} value={"" + fac.name + ""} onChange={addToArr} /> */}
                        <input
                            type="checkbox"
                            id={"" + fac.name + ""}
                            chacked={check}
                            value={"" + fac.name + ""}
                            onChange={(e => {
                                if (check === false) {

                                    setSelectedOption([...selectedOption, {
                                        id: selectedOption.length,
                                        value: e.target.value
                                    }])
                                    check = !check;
                                } else {

                                    setSelectedOption([...selectedOption.filter((item) => item.id !== selectedOption.id)])
                                    check = !check;
                                }
                                console.log(check)
                            }
                            )}
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
    addFeaturesFunc: (ads) => dispatch(addFeaturesCreator(ads)),
    removeFeaturesFunc: (ads) => dispatch(removeFeaturesCreator(ads)),
});

const Enhanced = connect(null, mapDispatchToProps)(Facilities);

export { Enhanced as Facilities };
