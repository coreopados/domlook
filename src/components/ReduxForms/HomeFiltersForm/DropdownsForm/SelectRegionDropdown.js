import React from "react";
import { connect } from 'react-redux';
import {
    propRegionFilterCreator,
    propCityFilterCreator,
    propDistrictFilterCreator
} from '../../../../redux/actionHomeFilterCreators';
import { regions } from '../../../../api/testCities.json'

const SelectRegionDropdown = ({
    propRegionFilterFunc,
    propCityFilterFunc,
    propDistrictFilterFunc,
    regionFilter
}) => {

    // const [selectedOption, setSelectedOption] = useState(regionFilter);

    // propRegionFilterFunc(selectedOption)

    // if (selectedOption === '') {
    //     propCityFilterFunc('');
    //     propDistrictFilterFunc('');
    // }

    // if (regionFilter === '') {
    //     propCityFilterFunc('');
    //     propDistrictFilterFunc('');
    // }

    return (
        <select name="select-region-filter" id="select-region-filter"
            value={regionFilter}
            onChange={e => propRegionFilterFunc(e.target.value)}>
            <option value="" >Выберите область</option>
            {regions.region.map((o, index) => (
                <option value={o.name} key={index}>{o.name}</option>
            ))}
        </select>
    );
}


const mapDispatchToProps = (dispatch) => ({
    propRegionFilterFunc: (selectedOption) => dispatch(propRegionFilterCreator(selectedOption)),
    propCityFilterFunc: () => dispatch(propCityFilterCreator()),
    propDistrictFilterFunc: () => dispatch(propDistrictFilterCreator()),


});

const Enhanced = connect(null, mapDispatchToProps)(SelectRegionDropdown);

export { Enhanced as SelectRegionDropdown };