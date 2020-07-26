import React from 'react';
import './ProfilePage.scss'
const ProfilePage = () => {


    return (
        <main className="common-main">
            <div className="top-img-rielters">
                <div className="container">
                    <h1>Профиль пользователя</h1>
                </div>
            </div>

            <div className="inner-container">
                <form className="profile-info">
                    <div className="wrap-form">
                        <div className="left-part">
                            <div className="avatar">
                                <div className="img-wrap">
                                    <img src='img/header/profile-img.png' alt="" />
                                </div>
                                <div className="desc-wrap">
                                    <label htmlFor="">
                                        <input id="add-ava" type="file" />
                                    </label>
                                    <label htmlFor="">
                                        <button id="remove-ava">Удалить</button><i class="fas fa-trash-alt"></i>
                                    </label>
                                    <p>Изображение профиля должно иметь минимальную ширину 210 пикселей и минимальную высоту 210 пикселей.
Обязательно сохраните изменения после смены изображения.</p>
                                </div>
                            </div>
                            <div className="name">
                                <label htmlFor="userName">
                                    Имя
                                <input value='' type="text" id="userName" />
                                </label>
                            </div>
                            <div className="surname">
                                <label htmlFor="userSurName">
                                    Фамилия
                                <input value='' type="text" id="userSurName" />
                                </label>
                            </div>
                            <div className="userEmail">
                                <label htmlFor="userEmail">
                                    Email*
                                <input value='' type="text" id="userEmail" />
                                </label>
                            </div>
                            <div className="password">

                                <label htmlFor="password">
                                    Пароль
                                <input value='' type="text" id="password" />
                                </label>
                            </div>
                            <div className="confirm-password">
                                <label htmlFor="confirm-password">
                                    Подтверждение праоля
                                <input value='' type="text" id="confirm-password" />
                                </label>
                            </div>
                        </div>
                        <div className="right-part">
                            <div className="agenstvo">
                                <label htmlFor="agenstvo">
                                    Название агенства
                                <input value='' type="text" id="agenstvo" />
                                </label>
                            </div>
                            <div className="certificate">
                                <label htmlFor="certificate">
                                    Номер свидетельства АСНУ
                                <input value='' type="text" id="certificate" />
                                </label>
                            </div>
                            <div className="userCity">
                                <label htmlFor="userCity">
                                    Город
                                <input value='' type="text" id="userCity" />
                                </label>
                            </div>
                            <div className="userAddress">
                                <label htmlFor="userAddress">
                                    Адрес
                                <input value='' type="text" id="userAddress" />
                                </label>
                            </div>
                            <div className="phone-1 phone-number">
                                <label htmlFor="phone-1">
                                    Мобильный телефон
                                <input value='' type="text" id="phone-1" />
                                </label>
                            </div>
                            <div className="phone-2 phone-number">
                                <label htmlFor="phone-2">
                                    Второй мобильный
                                <input value='' type="text" id="phone-2" />
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="submit-wrap">
                        <input type='submit' value="Сохранить" />

                        {/* add class success */}
                        <p class=""><b>Информация о профиле успешно обновлена!</b></p>
                    </div>
                </form>

            </div>
        </main >
    )
}


export default ProfilePage;