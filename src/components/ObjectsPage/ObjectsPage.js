import React from 'react';
import './Objects.scss'
const ProfilePage = () => {


    return (
        <main className="common-main">

            <div className="objects">

                <div className="inner-container">
                    <h3 className="myObjects-title">Мои объявления</h3>

                    <div className="wrap-objects">
                        <div className="wrap-objects__item">

                            <div className="wrap-objects__item__photo">
                                <img src="img/header/default.jpg" alt="" />
                            </div>
                            <div className="wrap-objects__item__desc">
                                Test
                            </div >
                            <div className="wrap-objects__item__date">
                                <i className="far fa-calendar-alt" ></i> создано : 23.07.2020
                            </div>
                            <div className="wrap-objects__item__status">
                                Опубликовано
                            </div>
                            <div className="wrap-objects__item__payment">

                            </div>
                            <div className="wrap-objects__item__buttons">
                                <button><i className="fas fa-pencil-alt"></i></button>
                                <button><i className="fas fa-eye"></i></button>
                                <button><i className="fas fa-times"></i></button>
                            </div>
                        </div>

                        <div className="wrap-objects__item">

                            <div className="wrap-objects__item__photo">
                                <img src="img/header/default.jpg" alt="" />
                            </div>
                            <div className="wrap-objects__item__desc">
                                Test
</div >
                            <div className="wrap-objects__item__date">
                                <i className="far fa-calendar-alt" ></i> создано : 23.07.2020
</div>
                            <div className="wrap-objects__item__status">
                                Опубликовано
</div>
                            <div className="wrap-objects__item__payment">

                            </div>
                            <div className="wrap-objects__item__buttons">
                                <button><i className="fas fa-pencil-alt"></i></button>
                                <button><i className="fas fa-eye"></i></button>
                                <button><i className="fas fa-times"></i></button>
                            </div>
                        </div>

                        <div className="wrap-objects__item">

                            <div className="wrap-objects__item__photo">
                                <img src="img/header/default.jpg" alt="" />
                            </div>
                            <div className="wrap-objects__item__desc">
                                Test
                            </div >
                            <div className="wrap-objects__item__date">
                                <i className="far fa-calendar-alt" ></i> создано : 23.07.2020
                            </div>
                            <div className="wrap-objects__item__status">
                                Опубликовано
                            </div>
                            <div className="wrap-objects__item__payment">

                            </div>
                            <div className="wrap-objects__item__buttons">
                                <button><i className="fas fa-pencil-alt"></i></button>
                                <button><i className="fas fa-eye"></i></button>
                                <button><i className="fas fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main >
    )
}


export default ProfilePage;