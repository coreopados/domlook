import React, { useState } from 'react';
import { connect } from 'react-redux';
import { features } from '../../../../api/testFeatures'
import {
    setFeaturesCreator
} from '../../../../redux/actionHomeFilterCreators';


const Facilities = ({
    setFeaturesFunc,
    Features
}) => {

  
  // const [x, setForm] = useState(Features);

  // console.log(Features);


  const handler = (e) => {
    const { target } = e;
    const { id } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    if (value === true) {
      // setForm(f => ({ ...f, [id]: value }));
      setFeaturesFunc({ [id]: value });
    } else {
      // delete x[target.id]
      delete Features[target.id]
      // const isEmpty = (x) => {
      //     for (var key in x) {
      //         return false;
      //     }
      //     return true;
      // }
      const isEmpty = Features => {
        for (var key in Features) {
            return false;
        }
        return true;
      }
      console.log(isEmpty())
      if (isEmpty(Features)) {
        setFeaturesFunc(false);
      }
    }
  };

    // setFeaturesFunc(x)
    return (
        <div className="parametrs">
            <p className="label-filter">Удобства:</p>
            <div className="facilities">
                {features.map((fac, index) => {
                    return <span key={index} >
                        <input
                            type="checkbox"
                            id={"" + fac.name + ""}
                            value={"" + fac.name + ""}
                            onChange={handler}
                            onClick={(e) => {
                              // console.log(e.target.value);
                              // console.log(e.target.checked);
                              // setFeaturesFunc(false);
                              // console.log(Features);
                            }}
                        // checked={Features[fac.name]}
                        />
                        <label htmlFor={"" + fac.name + ""}>{fac.name}</label>
                    </span>
                })}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  setFeaturesFunc: (ads) => dispatch(setFeaturesCreator(ads)),
});

const Enhanced = connect(null, mapDispatchToProps)(Facilities);

export { Enhanced as Facilities };
