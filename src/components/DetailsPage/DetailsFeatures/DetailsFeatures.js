import React from 'react';

const DetailsFeatures = ({ ad }) => {
    return (
        <div className="details-features">
            <h3 className="details-description__title">Удобства</h3>
            <div className="details-features-wrap">

                {ad.prop_features.map((elem) => {

                    let clasName = ''
                    switch (elem) {
                        case "Wi-Fi":
                            clasName = "wifi";
                            break;
                        case "Баня":
                            clasName = "wathhouse";
                            break;
                        case "Бассейн":
                            clasName = "pool";
                            break;
                        case "Бойлер":
                            clasName = "boiler";
                            break;
                        case "Бронедвери":
                            clasName = "doors";
                            break;
                        case "Газовая плита":
                            clasName = "gas_stove";
                            break;
                        case "Гараж":
                            clasName = "garage";
                            break;
                        case "Джакузи":
                            clasName = "jaquzee";
                            break;
                        case "Душевая кабинка":
                            clasName = "bath_cab";
                            break;
                        case "Интернет":
                            clasName = "inet";
                            break;
                        case "Кабельное ТВ":
                            clasName = "cable_tv";
                            break;
                        case "Камин":
                            clasName = "kamin";
                            break;
                        case "Кондиционер":
                            clasName = "conditioner";
                            break;
                        case "Кухня":
                            clasName = "kitchen";
                            break;
                        case "Лифт":
                            clasName = "elevator";
                            break;
                        case "Мебель":
                            clasName = "furniture";
                            break;
                        case "Микроволновая печь":
                            clasName = "microwave";
                            break;
                        case "Сауна":
                            clasName = "sauna";
                            break;
                        case "Стиральная машина":
                            clasName = "washer";
                            break;

                        case "Телевизор":
                            clasName = "tv";
                            break;
                        case "Телефон":
                            clasName = "phone";
                            break;
                        case "Холодильник":
                            clasName = "refrigerator";
                            break;

                        default:
                            clasName = ""
                    }

                    return <span className={"details-description__text__" + clasName} >
                        {elem}
                    </span>
                })}
            </div>
        </div >
    )
}
export default DetailsFeatures