import React, { useEffect } from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from "react-redux";
import './App.scss';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { Header } from './components/Header/Header';
import { HomePage } from './components/HomePage/HomePage';
import { SalePage } from './components/SalePage/SalePage';
import { RentPage } from './components/RentPage/RentPage';
import { DailyRentPage } from './components/DailyRentPage/DailyRentPage';
import { NewsPage } from './components/NewsPage/NewsPage';
import { CommonAds } from './components/CommonAds/CommonAds';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';
import { DetailsPage } from './components/DetailsPage/DetailsPage';
import { Favourites } from './components/Favourites/Favourites';
import { ListRielters } from './components/RieltersPage/ListRielters';
import { ListPrivates } from './components/PrivatesPage/ListPrivates';
import Profile from './components/ProfilePage/ProfilePage';
import AddAd from './components/AddAdPage/AddAd';
import Objects from './components/ObjectsPage/ObjectsPage';
import { User } from './components/UserPage/User';
import { NewsDetailsPage } from './components/NewsPage/NewsDetailsPage/NewsDetailsPage';
import { handleLoadAds } from "./redux/actionCreators";

function App({ loadData, activeCategoryNews, activeMainForm, activeRegForm, propRegionFilter }) {
  useEffect(() => {
    loadData();
  }, []);

  return (
    <React.Fragment>
      <ScrollToTop />
      <Header mainform={activeMainForm} regform={activeRegForm} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/sale" exact component={SalePage} />
        <Route path="/rent" exact component={RentPage} />
        <Route path="/dailyRent" exact component={DailyRentPage} />
        <Route path="/news" exact component={NewsPage} />
        <Route path="/favourites" exact component={Favourites} />
        <Route path="/rielters" exact component={ListRielters} />
        <Route path="/privates" exact component={ListPrivates} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/addAd" exact component={AddAd} />
        <Route path="/objects" exact component={Objects} />
        <Route path="/user/:id" exact component={User} />
        <Route path="/advertisement" exact component={CommonAds} />
        <Route path="/advertisement/:id" exact component={DetailsPage} />
        <Route path="/news/:id" exact component={NewsDetailsPage} />
        <Route path="/sale/:id" component={DetailsPage} />
        <Route path="/rent/:id" component={DetailsPage} />
        <Route path="/dailyRent/:id" component={DetailsPage} />
        <Route path="/favourites/:id" component={DetailsPage} />
        <Route path="/:id" component={DetailsPage} />
        <Route path="/404" component={ErrorPage} />
        <Redirect from="*" to="/404" />
      </Switch>
      {/* activeCategory={activeCategoryNews} */}
      {/* <Footer propRegionFilter={propRegionFilter} /> */}
      <Footer />
    </React.Fragment>
  );
}
const mapStateToProps = state => ({
  activeCategoryNews: state.filterReducer.activeCategoryNews,
  activeMainForm: state.filterReducer.activeMainForm,
  activeRegForm: state.filterReducer.activeRegForm,
  // propRegionFilter: state.filterReducer.propRegionFilter,
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(handleLoadAds()),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(App);

export { Enhanced as App };
// export default App;
