import React from "react";
import { connect } from 'react-redux';
import {
    propCityFilterCreator
} from '../../../../redux/actionHomeFilterCreators';
import { regions } from '../../../../api/testCities.json'

const SelectCityDropdown = ({
    propCityFilterFunc,
    propRegionFilter,
    cityFilter
}) => {

    // const [selectedOption, setSelectedOption] = useState(cityFilter);
    const region = regions.region.filter((reg) => reg.name === propRegionFilter)
    const cities = region.map((city) => city.cities)

    let obj = [];

    for (let i = 0, l = cities.length; i < l; i++) {
        obj = cities[i];
    }

    // if (propRegionFilter !== '') {
    //     propCityFilterFunc(cityFilter)
    // } else {
    //     propCityFilterFunc('')
    // }

    if (propRegionFilter === "" || !propRegionFilter) {
        return (
            <select name="select-city-filter" id="select-city-filter"
                value={"Выберите город"}
                onChange={e => propCityFilterFunc('')}>
                {/* onChange={e => setSelectedOption(e.target.value)}> */}
                <option value='' >Выберите город</option>
            </select>
        );
    } else {
        return (
            <select name="select-city-filter" id="select-city-filter"
                value={cityFilter}
                // value={selectedOption}
                onChange={e => propCityFilterFunc(e.target.value)}>
                <option value="">Выберите город</option>
                {obj.map((o, index) => (
                    <option value={o.name} key={index}>{o.name}</option>
                ))}
            </select>
        );
    }

}

const mapStateToProps = (state) => ({
    propRegionFilter: state.filterReducer.propRegionFilter,
})

const mapDispatchToProps = (dispatch) => ({
    propCityFilterFunc: (selectedOption) => dispatch(propCityFilterCreator(selectedOption)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(SelectCityDropdown);

export { Enhanced as SelectCityDropdown };