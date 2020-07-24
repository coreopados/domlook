import React, { useMemo, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../CommonSection.scss";

import { PaginationSale } from "../CommonParts/Pagination/PaginationSalePage";
import { AsideFilters } from "../../components/ReduxForms/FiltersForm/AsideFilters";
// import { handleLoadAds } from "../../redux/actionCreators";
import About from "../CommonParts/About/About";

const FilterComponent = ({
    ads,
    isLoaded,
    isLoading,
    orientation,
    match,
    currentPageSale,
    itemsPerPage,
    sort_price,
    sort_date,

    // loadData,
    idFilter,
    typeFilter,
    totalAreaFilter,
    statusFilter,
    cityFilter,
    floorFilter,
    roomsFilter,
    propWallsFilter,
    propOfferFilter,
    propHeatingFilter,
    propBuildingFilter,
    propCeilingHeightFilter,
    propRegionFilter,
    propCityFilter,
    propDistrictFilter,
    priceFromFilter,
    priceToFilter,
    featuresArr,
    typeTransaction
}) => {

    let saleAds = useMemo(() => ads.filter((ad) => ad.prop_status === "sale"), [ads]);
    const List = orientation === "vertical" ? AdsGrid : AdsList;


    //по id
    if (idFilter) {
        saleAds = saleAds.filter((ad) => ad.id === Number(idFilter))
    }

    //по типу
    if (typeFilter) {
        saleAds = saleAds.filter((ad) => ad.prop_type === typeFilter)
    }

    //по статусу
    if (statusFilter) {
        saleAds = saleAds.filter((ad) => ad.prop_status === statusFilter)
    }

    // по городу
    if (cityFilter === "Kiev") {
        saleAds = saleAds.filter((ad) => ad.prop_city === 'Киев')
    } else if (cityFilter === "Kharkov") {
        saleAds = saleAds.filter((ad) => ad.prop_city === 'Харьков')
    } else if (cityFilter === "Odessa") {
        saleAds = saleAds.filter((ad) => ad.prop_city === 'Одесса')
    } else if (cityFilter === "Dnepr") {
        saleAds = saleAds.filter((ad) => ad.prop_city === 'Днепр')
    } else if (cityFilter === "Lvov") {
        saleAds = saleAds.filter((ad) => ad.prop_city === 'Львов')
    }

    //по площади
    if (totalAreaFilter !== "") {
        saleAds = saleAds.filter((ad) => Math.floor(ad.total_area) >= Math.floor(totalAreaFilter))
    }

    //по этажу
    if (floorFilter !== "") {
        saleAds = saleAds.filter((ad) => Math.floor(ad.floor) <= Math.floor(floorFilter))
    }

    //по количеству комнат
    if (roomsFilter !== "") {
        saleAds = saleAds.filter((ad) => ad.rooms === roomsFilter)
    }

    //по типу стен
    if (propWallsFilter !== '') {
        saleAds = saleAds.filter((ad) => ad.prop_walls === propWallsFilter)
    }

    //по типу предложения
    if (propOfferFilter !== '') {
        saleAds = saleAds.filter((ad) => ad.prop_offer === propOfferFilter)
    }

    //по типу отопления
    if (propHeatingFilter !== '') {
        saleAds = saleAds.filter((ad) => ad.prop_heating === propHeatingFilter)
    }

    //по типу здания
    if (propBuildingFilter !== "") {
        saleAds = saleAds.filter((ad) => ad.prop_building === propBuildingFilter)
    }

    //по высоте потолков
    if (propCeilingHeightFilter !== "") {
        saleAds = saleAds.filter((ad) => Math.floor(ad.ceiling_height) <= Math.floor(propCeilingHeightFilter))
    }

    //по области
    if (propRegionFilter) {
        saleAds = saleAds.filter((ad) => ad.prop_region === propRegionFilter)
    }
    //по городу
    if (propCityFilter) {
        saleAds = saleAds.filter((ad) => ad.prop_city === propCityFilter)
    }
    //по району
    if (propDistrictFilter) {
        saleAds = saleAds.filter((ad) => ad.prop_district === propDistrictFilter)
    }
    //по цене от
    if (priceFromFilter !== "") {
        saleAds = saleAds.filter((ad) => Math.floor(ad.price) >= Math.floor(priceFromFilter))
    }
    //по цене до
    if (priceToFilter !== "") {
        saleAds = saleAds.filter((ad) => Math.floor(ad.price) <= Math.floor(priceToFilter))
    }



    //по удобствам
    if (featuresArr !== false) {
        var keys = [];
        for (var key in featuresArr) {
            keys.push(key)
        }
        saleAds = saleAds.filter((ad) => ad.prop_features)
        saleAds = saleAds.filter(item => item.prop_features.some(i => (keys).includes(i)))
    }

    //по типу сделки
    if (typeTransaction !== false) {
        var keys = [];
        for (var key in typeTransaction) {
            keys.push(key)
        }
        saleAds = saleAds.filter((ad) => ad.prop_features_add)
        saleAds = saleAds.filter(item => item.prop_features_add.some(i => (keys).includes(i)))
    }

    //фильтр цен по низкой/по высокой
    sort_price === 'low-price' ? saleAds = saleAds.sort((prev, next) => prev.price - next.price) : saleAds = saleAds.sort((prev, next) => next.price - prev.price);




    //фильтр по дате 0/7/30
    const lastMonth = new Date().getTime() - 86400000 * 30;
    const lastWeek = new Date().getTime() - 86400000 * 7;
    const today = new Date().getTime() - 86400000;


    if (Number(sort_date) === 31) {
        saleAds = saleAds.filter((ad) => Date.parse(ad.post_date) >= lastMonth)
    } else if (Number(sort_date) === 7) {
        saleAds = saleAds.filter((ad) => Date.parse(ad.post_date) >= lastWeek)
    } else if (Number(sort_date) === 0) {
        saleAds = saleAds.filter((ad) => Date.parse(ad.post_date) >= today)
    }

    const indexOfLastAd = currentPageSale * itemsPerPage;
    const indexOfFirstAd = indexOfLastAd - itemsPerPage;
    const currentAds = saleAds.slice(indexOfFirstAd, indexOfLastAd);



};

const mapStateToProps = (state) => ({
    ads: state.mainReducer.ads,
    isLoaded: state.mainReducer.isLoaded,
    isLoading: state.mainReducer.isLoading,
    orientation: state.mainReducer.orientation,
    sort_price: state.filterReducer.sort_price,
    sort_date: state.filterReducer.sort_date,
    // sort_by_date: state.filterByDateReducer.sort_by_date,
    itemsPerPage: state.paginationReducer.itemsPerPage,
    currentPageSale: state.paginationReducer.currentPageSale,

    idFilter: state.filterReducer.idFilter,
    typeFilter: state.filterReducer.typeFilter,
    statusFilter: state.filterReducer.statusFilter,
    cityFilter: state.filterReducer.cityFilter,
    totalAreaFilter: state.filterReducer.totalAreaFilter,
    floorFilter: state.filterReducer.floorFilter,
    roomsFilter: state.filterReducer.roomsFilter,
    propWallsFilter: state.filterReducer.propWallsFilter,
    propOfferFilter: state.filterReducer.propOfferFilter,
    propHeatingFilter: state.filterReducer.propHeatingFilter,
    propBuildingFilter: state.filterReducer.propBuildingFilter,
    propCeilingHeightFilter: state.filterReducer.propCeilingHeightFilter,
    propRegionFilter: state.filterReducer.propRegionFilter,
    propCityFilter: state.filterReducer.propCityFilter,
    propDistrictFilter: state.filterReducer.propDistrictFilter,
    priceFromFilter: state.filterReducer.priceFromFilter,
    priceToFilter: state.filterReducer.priceToFilter,
    featuresArr: state.filterReducer.featuresArr,
    typeTransaction: state.filterReducer.typeTransaction,
});

// const mapDispatchToProps = (dispatch) => ({
//   loadData: () => dispatch(handleLoadAds())
// })

const Enhanced = connect(mapStateToProps, null)(SalePage);

export { Enhanced as SalePage };

SalePage.propTypes = {
    ads: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            prop_status: PropTypes.string.isRequired,
            prop_type: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            imgUrl: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            prop_city: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            total_area: PropTypes.string.isRequired,
            living_space: PropTypes.string.isRequired,
            floor: PropTypes.string.isRequired,
            total_floors: PropTypes.string.isRequired,
            rooms: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    isLoaded: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    // loadData: PropTypes.func.isRequired,
    orientation: PropTypes.string.isRequired,
    match: PropTypes.shape().isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    currentPageSale: PropTypes.number.isRequired,
    statusFilter: PropTypes.string.isRequired,
    cityFilter: PropTypes.string.isRequired,
    totalAreaFilter: PropTypes.string.isRequired,
    propWallsFilter: PropTypes.string.isRequired,
    propOfferFilter: PropTypes.string.isRequired,
    propHeatingFilter: PropTypes.string.isRequired,
    propBuildingFilter: PropTypes.string.isRequired,
    propCeilingHeightFilter: PropTypes.string.isRequired,
};