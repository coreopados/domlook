import React, { useState } from 'react';
import '../Footer.scss';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

import { categories } from '../../../api/testCategoriesNews.json'
import { filterCategoryNewsCreator } from '../../../redux/actionCreators';

const AdviceLink = ({ filterCategoryNewsFunc }) => {

    const [selectedOption, setselectedOption] = useState('')

    filterCategoryNewsFunc(selectedOption);
    // activeCategoryFunc(selectedOption)
    return (
        <ul className="footer-list">
            {categories.map((item, index) => {
                return <li className="footer-list__item" onClick={e => { setselectedOption(item.name) }}
                    key={index}
                >
                    <NavLink
                        to="/news"
                        className="footer-list__link"
                    >
                        {item.name}
                    </NavLink>
                </li>
            })}
        </ul>
    )
}



const mapDispatchToProps = (dispatch) => ({
    // activeCategoryFunc: (selectedOption) => dispatch(activeCategoryNewsCreator(selectedOption)),
    filterCategoryNewsFunc: (selectedOption) => dispatch(filterCategoryNewsCreator(selectedOption)),
});

const Enhanced = connect(null, mapDispatchToProps)(AdviceLink);

export { Enhanced as AdviceLink };