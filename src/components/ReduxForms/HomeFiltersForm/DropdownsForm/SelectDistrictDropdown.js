import React, { useState } from "react";
import { connect } from 'react-redux';
import {
    propDistrictFilterCreator
} from '../../../../redux/actionHomeFilterCreators';
import { regions } from '../../../../api/testCities.json'

const SelectDistrictDropdown = ({
    propDistrictFilterFunc,
    propCityFilter,
    propRegionFilter,
}) => {

    const region = regions.region.filter((reg) => reg.name === propRegionFilter)
    const cities = region.map((city) => city.cities)

    let obj = [];
    for (let i = 0, l = cities.length; i < l; i++) {
        obj = cities[i];
    }

    let chengedCity = obj.filter((city) => city.name === propCityFilter);
    let chengeddistricts = chengedCity.map((city) => city.districts)
    let districts = []

    for (let j = 0, l = chengeddistricts.length; j < l; j++) {
        districts = chengeddistricts[j];
    }

    const [selectedOption, setSelectedOption] = useState('');

    propDistrictFilterFunc(selectedOption)

    if (propCityFilter === "Не выбрано" || !propCityFilter) {
        return (
            <select name="select-district-filter" id="select-district-filter"
                value={"Выберите город"}
                onChange={e => setSelectedOption(e.target.value)}>
                <option value='Выберите город' >Выберите район</option>
            </select>
        );
    } else {
        return (
            <select name="select-district-filter" id="select-district-filter"
                value={selectedOption}
                onChange={e => setSelectedOption(e.target.value)}>
                <option value="Выберите район">Выберите район</option>
                {districts.map((o, index) => (
                    <option value={o.name} key={index}>{o.name}</option>
                ))}
            </select>
        );
    }

}

const mapStateToProps = (state) => ({
    propCityFilter: state.filterReducer.propCityFilter,
    propRegionFilter: state.filterReducer.propRegionFilter,
})

const mapDispatchToProps = (dispatch) => ({
    propDistrictFilterFunc: (selectedOption) => dispatch(propDistrictFilterCreator(selectedOption)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(SelectDistrictDropdown);

export { Enhanced as SelectDistrictDropdown };