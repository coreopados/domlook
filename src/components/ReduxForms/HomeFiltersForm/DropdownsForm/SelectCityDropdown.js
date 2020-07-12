import React, { useState } from "react";
import { connect } from 'react-redux';
import {
    propCityFilterCreator
} from '../../../../redux/actionHomeFilterCreators';
import { regions } from '../../../../api/testCities.json'

const SelectCityDropdown = ({
    propCityFilterFilterFunc,
    propRegionFilter,
}) => {

    const [selectedOption, setSelectedOption] = useState('');
    const region = regions.region.filter((reg) => reg.name === propRegionFilter)
    const cities = region.map((city) => city.cities)

    let obj = [];

    for (let i = 0, l = cities.length; i < l; i++) {
        obj = cities[i];
    }



    propCityFilterFilterFunc(selectedOption)

    if (propRegionFilter === "Не выбрано" || !propRegionFilter) {
        return (
            <select name="select-city-filter" id="select-city-filter"
                value={"Выберите город"}
                onChange={e => setSelectedOption(e.target.value)}>
                <option value='Выберите город' >Выберите город</option>
            </select>
        );
    } else {
        return (
            <select name="select-city-filter" id="select-city-filter"
                value={selectedOption}
                onChange={e => setSelectedOption(e.target.value)}>
                <option value="Выберите город">Выберите город</option>
                {obj.map((o) => (
                    <option value={o.name} key={o.id}>{o.name}</option>
                ))}
            </select>
        );
    }

}

const mapStateToProps = (state) => ({
    propRegionFilter: state.filterReducer.propRegionFilter,
})

const mapDispatchToProps = (dispatch) => ({
    propCityFilterFilterFunc: (selectedOption) => dispatch(propCityFilterCreator(selectedOption)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(SelectCityDropdown);

export { Enhanced as SelectCityDropdown };