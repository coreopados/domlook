import React from 'react';
import { connect } from "react-redux";
import './User.css';
import { users } from '../../api/testUsers.json'
import { NavLink } from 'react-router-dom'

const User = ({

}) => {

    return (
        <main className="common-main">
            <div className="top-img-rielters">
                <div className="container">
                    <h1>Список Риэлторов</h1>
                </div>
            </div>

            <div className="inner-container">
                <h3>Список риэлторов</h3>

                <div className="table-user">
                    <div className="back-button">
                        <hr /><NavLink to='/rielters'><button>Назад</button></NavLink>
                    </div>


                    <div className="personal-info">
                        <h3>Данные</h3>

                        <div className="table-row">
                            <div className="table-row-label">

                            </div>
                            <div className="table-row-description">

                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-row-label">
                                Email:
                        </div>
                            <div className="table-row-description">

                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-row-label">
                                Имя:
                        </div>
                            <div className="table-row-description">

                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-row-label">
                                Фамилия:
                        </div>
                            <div className="table-row-description">

                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-row-label">
                                Имя на сайте:
                        </div>
                            <div className="table-row-description">

                            </div>
                        </div>
                    </div>
                    <div className="contact-info">
                        <h3>Контактная информация</h3>
                        <div className="table-row">
                            <div className="table-row-label">
                                Название агенства:
                            </div>
                            <div className="table-row-description">

                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-row-label">
                                Номер свидетельства АСНУ:
                            </div>
                            <div className="table-row-description">

                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-row-label">
                                Город:
                            </div>
                            <div className="table-row-description">

                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-row-label">
                                Адрес:
                            </div>
                            <div className="table-row-description">

                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-row-label">
                                Номер телефона:
                            </div>
                            <div className="table-row-description">

                            </div>
                        </div>
                    </div>
                    <div className="back-button">
                        <hr /><NavLink to='/rielters'><button>Назад</button></NavLink>
                    </div>
                </div>

            </div>

        </main >
    )
}

const mapStateToProps = (state) => ({
    // userId: state.mainReducer.userId,
});
const Enhanced = connect(mapStateToProps, null)(User);

export { Enhanced as User };