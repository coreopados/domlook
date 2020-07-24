import React, { useState } from 'react';
import { connect } from "react-redux";
import './listRielters.css';
import { users } from '../../api/testUsers.json'
import { UserIdCreator } from '../../redux/actionCreators'
import { NavLink } from 'react-router-dom'

const ListRielters = ({ setUserIdFunc }) => {

    const [userId, setUserId] = useState('')

    
    setUserIdFunc(userId)

    return (
        <main className="common-main">
            <div className="top-img-rielters">
                <div className="container">
                    <h1>Список Риэлторов</h1>
                </div>
            </div>

            <div className="inner-container">
                <h3>Список риэлторов</h3>

                <div className="table-rielters">
                    <div className="table-head">
                        <div className="table-head-row">
                            <div className="table-head-col">
                                <a href="#">
                                    Имя пользователя
                                </a>
                            </div>
                            <div className="table-head-col">
                                <a href="#">
                                    Имя
                                </a>
                            </div>
                            <div className="table-head-col">
                                <a href="#">
                                    Номер телефона
                                </a>
                            </div>
                            <div className="table-head-col">
                                <a href="#">
                                    Сообщений
                                </a>
                            </div>
                            <div className="table-head-col">
                                <a href="#">
                                    Дата регистрации
                                </a>
                            </div>
                            <div className="table-head-col">
                                <a href="">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="table-body">

                        {users.map((elem) => {
                            return <div className="table-body-row">
                                <div className="col-wrap">
                                    <div className="table-body-col">
                                        {elem.avatar ? <img src={elem.avatar} alt="" /> : <img src='img/header/avatarrielter.png' alt="" />}
                                    </div>
                                    <div className="table-body-col">
                                        {elem.email && elem.email}
                                    </div>
                                </div>
                                <div className="table-body-col">
                                    {elem.name && elem.name}
                                </div>
                                <div className="table-body-col">
                                    {elem.phone}
                                </div>
                                <div className="table-body-col">
                                    {elem.messages}
                                </div>
                                <div className="table-body-col">
                                    {elem.date_reg}
                                </div>
                                <div className="table-body-col">
                                    <NavLink to={"/user/" + elem.id}>
                                        <button onClick={() => setUserId(elem.id)}>
                                            Больше...
                                        </button>
                                    </NavLink>

                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>

        </main >
    )
}


const mapDispatchToProps = (dispatch) => ({
    setUserIdFunc: (id) => dispatch(UserIdCreator(id)),
});


const Enhanced = connect(null, mapDispatchToProps)(ListRielters);

export { Enhanced as ListRielters };