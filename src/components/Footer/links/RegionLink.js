import React from 'react';
import '../Footer.scss';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { propRegionFilterCreator, resetFilters } from '../../../redux/actionHomeFilterCreators';
import { regions } from '../../../api/testCities.json'


const RegionLink = ({ propRegionFilterFunc, propRegionFilter, resetFiltersFunc }) => {

    // const [selectedOption, setselectedOption] = useState('')

    // propRegionFilterFunc(selectedOption);

    return (
        <ul className="footer-cities__list footer-list">
            {regions.region.map((item, index) => {
                return <li className="footer-cities__list-item footer-list__item" onClick={() => (resetFiltersFunc(), propRegionFilterFunc(item.name))}
                    key={index}
                >
                    <NavLink
                        to="/advertisement"
                        className="footer-cities__list-link footer-list__link"
                    >
                        {item.name}
                    </NavLink>
                </li>
            })}
        </ul>)
}

const mapDispatchToProps = (dispatch) => ({
    propRegionFilterFunc: (selectedOption) => dispatch(propRegionFilterCreator(selectedOption)),
    resetFiltersFunc: () => dispatch(resetFilters())
});

const Enhanced = connect(null, mapDispatchToProps)(RegionLink);

export { Enhanced as RegionLink };