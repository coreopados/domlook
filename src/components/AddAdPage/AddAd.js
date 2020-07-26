import React, { useState } from 'react';
import './AddAd.scss'
import SimpleMap from './SimpleMap'
import { features } from '../../api/testFeatures.json'
import { regions } from '../../api/testCities.json'
import DropZ from './DropZone';
import { useFormik } from 'formik';
import *as Yup from 'yup';

const validationSchema = Yup.object({

    type: Yup.string().required('required'),
    status: Yup.string().required('required'),
    Floor: Yup.string().required('required'),
    CeilingHeight: Yup.string().required('required'),
    Price: Yup.string().required('required'),
    StreetAddress: Yup.string().required('required'),
    DescriptionAd: Yup.string().required('required'),
    TotalArea: Yup.string().required('required'),
    LivingArea: Yup.string().required('required'),
    KitchenArea: Yup.string().required('required'),
})



const AddAd = () => {

    const type_options = [
        { id: 0, value: '', label: 'Не выбрано' },
        { id: 1, value: 'house', label: 'Дома' },
        { id: 2, value: 'apartment', label: 'Квартиры' },
        { id: 3, value: 'commerce', label: 'Коммерческая недвижимость' }
    ];
    const status_options = [
        { id: 0, value: '', label: 'Не выбрано' },
        { id: 1, value: 'rent', label: 'Аренда' },
        { id: 2, value: 'sale', label: 'Продажа' },
        { id: 3, value: 'dailyrent', label: 'Посуточно' }
    ];
    const walls_options = [
        { id: 1, value: '', label: 'Не выбрано' },
        { id: 2, value: 'силикатный кирпич', label: 'силикатный кирпич' },
        { id: 3, value: 'ракушечник', label: 'ракушечник' },
        { id: 4, value: 'пеноблок', label: 'пеноблок' },
        { id: 5, value: 'панель', label: 'панель' },
        { id: 6, value: 'монолит', label: 'монолит' },
        { id: 7, value: 'кирпич', label: 'кирпич' },
        { id: 8, value: 'бутовый камень', label: 'бутовый камень' },
    ];

    const offer_options = [
        { id: 1, value: '', label: 'Не выбрано' },
        { id: 2, value: 'от хозяина', label: 'от хозяина' },
        { id: 3, value: 'от собственника', label: 'от собственника' },
        { id: 4, value: 'от представителя застройщика', label: 'от представителя застройщика' },
        { id: 5, value: 'от посредника', label: 'от посредника' },
        { id: 6, value: 'от застройщика', label: 'от застройщика' },
    ];

    const build_options = [
        { id: 1, value: '', label: 'Не выбрано' },
        { id: 2, value: 'Чешский проект', label: 'Чешский проект' },
        { id: 3, value: 'Хрущевка', label: 'Хрущевка' },
        { id: 4, value: 'Сталинка', label: 'Сталинка' },
    ];

    const [selectedType, setTypeOption] = useState(status_options[0]);
    const [selectedStatus, setStatusOption] = useState(status_options[0]);
    const [selectedRegion, setRegionOption] = useState('');
    const [selectedCity, setCityOption] = useState('');
   
    const region = regions.region.filter((reg) => reg.name === selectedRegion)
    const cities = region.map((city) => city.cities)

    let obj = [];

    for (let i = 0, l = cities.length; i < l; i++) {
        obj = cities[i];
    }

    const [selectedDistrict, setDistrictOption] = useState('');

    let chengedCity = obj.filter((city) => city.name === selectedCity);
    let chengeddistricts = chengedCity.map((city) => city.districts)
    let districts = []

    for (let j = 0, l = chengeddistricts.length; j < l; j++) {
        districts = chengeddistricts[j];
    }
    const [selectedWalls, setWallsOption] = useState(walls_options[0]);
    const [selectedOffer, setOfferOption] = useState(offer_options[0]);
    const [selectedBuild, setBuildOption] = useState(build_options[0]);

    // const [selectedType, setTypeOption] = useState(type_options[0]);
    // const [selectedType, setTypeOption] = useState(type_options[0]);


    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            type: "",
            status: "",
            Region: "",
            City: "",
            District: "",
            Rooms: "",
            WallType: "",
            TypeOffer: "",
            TypeHeating: "",
            Floor: "",
            TotalFloor: "",
            TypeBuild: "",
            CeilingHeight: "",
            Floor: "",
            Price: "",
            StreetAddress: "",
            CityAddress: "",
            DescriptionAd: "",
            TotalArea: "",
            LivingArea: "",
            KitchenArea: "",
            Bedrooms: "",

        },
        validationSchema,
        onSubmit(values, { resetForm }) {
            console.log(values)
            // сброс формы

            // errors=undefined
            resetForm({ values: '' })

        }
    });

  

    return (
        <main className="common-main">


            <div className="inner-container">
                <h3>Создание объявления</h3>
                <form onSubmit={handleSubmit} id="ad-info">
                    <div className="wrap-form">

                        <label htmlFor="">
                            Тип недвижимости
                            <select name="type" id="type-filter-ad"
                                value={values.type}
                                onChange={e => (setTypeOption(e.target.value), values.type=e.target.value, handleChange)}>
                                {type_options.map((o, index) => (
                                    <option value={o.value} key={index}>{o.label}</option>
                                ))}
                            </select>
                            {errors.type ? <p className="error-field">* Укажите тип недвижимости!</p> : ''}
                        </label>

                        <label htmlFor="">
                            Раздел
                            <select name="status" id="status-filter-ad"
                                value={values.status}
                                onChange={e => (setStatusOption(e.target.value), values.status=e.target.value , handleChange )}>
                                {status_options.map(o => (
                                    <option value={o.value} key={o.id}>{o.label}</option>
                                ))}
                            </select>
                            {errors.status ? <p className="error-field">* Укажите раздел!</p> : ''}
                        </label>

                        <label htmlFor="">
                            Область
                            <select name="Region" id="select-region-filter-ad"
                                value={selectedRegion}
                                onChange={e => setRegionOption(e.target.value)}>
                                <option value="" >Выберите область</option>
                                {regions.region.map((o, index) => (
                                    <option value={o.name} key={index}>{o.name}</option>
                                ))}
                            </select>
                        </label>

                        <label htmlFor="">
                            Город
                            <select name="City" id="select-city-filter"
                                value={selectedCity}
                                onChange={e => setCityOption(e.target.value)}>
                                <option value="">Выберите город</option>
                                {obj.map((o, index) => (
                                    <option value={o.name} key={index}>{o.name}</option>
                                ))}
                            </select>
                        </label>

                        <label htmlFor="">
                            Район
                            <select name="District" id="select-district-filter"
                                value={selectedDistrict}
                                onChange={e => setDistrictOption(e.target.value)}>
                                <option value="">Выберите район</option>
                                {districts.map((o, index) => (
                                    <option value={o.name} key={index}>{o.name}</option>
                                ))}
                            </select>
                        </label>

                        <label htmlFor="">
                            Комнат
                           <input
                                name="Rooms"
                                type="number"
                                onChange={handleChange}
                                value={values.Rooms}
                            />
                        </label>

                        <label htmlFor="">
                            Тип стен
                            <select name="wall-filter" id="wall-filter"
                                value={selectedWalls}
                                onChange={e => setWallsOption(e.target.value)}>
                                {walls_options.map(o => (
                                    <option value={o.value} key={o.id}>{o.label}</option>
                                ))}
                            </select>
                        </label>

                        <label htmlFor="">
                            Тип предложения
                            <select name="TypeOffer" id="offer-filter"
                                value={selectedOffer}
                                onChange={e => setOfferOption(e.target.value)}>
                                {offer_options.map((o) => (
                                    <option value={o.value} key={o.id}>{o.label}</option>
                                ))}
                            </select>
                        </label>

                        <label htmlFor="">
                            Тип отопления
                            <select
                                name="TypeHeating"
                                id=""
                                onChange={handleChange}
                                value={values.TypeHeating}
                            >
                                <option value="">Не выбрано</option>
                                <option value="">централизованное</option>
                                <option value="">индивидуальное</option>
                                <option value="">автономное</option>
                            </select>
                        </label>


                        <label htmlFor="">
                            Этаж
                           <input
                                name="Floor"
                                type="number"
                                onChange={handleChange}
                                value={values.Floor}
                            />
                            {errors.Floor ? <p className="error-field">* Укажите этаж!</p> : ''}
                        </label>


                        <label htmlFor="">
                            Этажность
                           <input
                                name="TotalFloor"
                                type="number"
                                onChange={handleChange}
                                value={values.TotalFloor}
                            />
                        </label>

                        <label htmlFor="">
                            Тип здания
         
                            <select name="TypeBuild" id="building-filter"
                                value={selectedBuild}
                                onChange={e => setBuildOption(e.target.value)}>
                                {build_options.map(o => (
                                    <option value={o.value} key={o.id}>{o.label}</option>
                                ))}
                            </select>
                        </label>

                        <label htmlFor="">
                            Высота потолков
                           <input
                                type="number"
                                name="CeilingHeight"
                                onChange={handleChange}
                                value={values.CeilingHeight}
                            /><span>м</span>
                            {errors.CeilingHeight ? <p className="error-field">* Укажите высоту потолков!</p> : ''}
                        </label>

                        <label htmlFor="">
                            Цена
                           <input
                                type="number"
                                name="Price"
                                onChange={handleChange}
                                value={values.Price}
                            /><span>$</span>
                            {errors.Price ? <p className="error-field">* Укажите цену!</p> : ''}
                        </label>

                    </div>

                    <div className="bottom-part-form">
                        <div className="street-address">
                            <label htmlFor="">
                                Название улицы и № дома
                                <input
                                    name="StreetAddress"
                                    type="text"
                                    placeholder="ул. Иванова, 57"
                                    onChange={handleChange}
                                    value={values.StreetAddress}
                                />
                                {errors.StreetAddress ? <p className="error-field">* Укажите название улицы!</p> : ''}
                            </label>

                            <label htmlFor="">
                                Адрес
                                <input
                                    type="text"
                                    name="CityAddress"
                                    onChange={handleChange}
                                    value={values.CityAddress}
                                />
                                {errors.CityAddress ? <p className="error-field">* Укажите адрес недвижимости!</p> : ''}

                            </label>
                        </div>
                        <div className="description">
                            <label htmlFor="">
                                Описание
                                <textarea
                                    name="DescriptionAd"
                                    id=""
                                    cols="30"
                                    rows="10"
                                    onChange={handleChange}
                                    value={values.DescriptionAd}
                                >
                                </textarea>
                                {errors.DescriptionAd ? <p className="error-field">* Укажите описание!</p> : ''}
                            </label>
                            <div className="wrap-map">
                                <button className="searchAdress">Найти адрес</button>
                                <SimpleMap />
                            </div>
                        </div>


                        <div className="wrap-addintional-info">
                            <label htmlFor="">Общая площадь в м²
                                <input
                                    type="text"
                                    name="TotalArea"
                                    onChange={handleChange}
                                    value={values.TotalArea}
                                />
                                {errors.TotalArea ? <p className="error-field">* Укажите общую площадь!</p> : ''}
                            </label>
                            <label htmlFor="">Жилая площадь в м²
                                <input
                                    type="text"
                                    name="LivingArea"
                                    onChange={handleChange}
                                    value={values.LivingArea}
                                />
                                {errors.LivingArea ? <p className="error-field">* Укажите жилую площадь!</p> : ''}
                            </label>
                            <label htmlFor="">Площадь кухни в м²
                                <input
                                    type="text"
                                    name="KitchenArea"
                                    onChange={handleChange}
                                    value={values.KitchenArea}
                                />
                                {errors.KitchenArea ? <p className="error-field">* Укажите площадь кухни!</p> : ''}
                            </label>
                            <label htmlFor="">Количество спальных мест
                                <input
                                    type="text"
                                    name="Bedrooms"
                                    onChange={handleChange}
                                    value={values.Bedrooms}
                                />
                            </label>

                        </div>


                        <div className="parametrs">
                            <label htmlFor="">
                                Удобства
                            </label>


                            <div className="facilities">
                                {features.map((fac, index) => {
                                    return <span key={index} >
                                        <input
                                            type="checkbox"
                                            id={"" + fac.name + ""}
                                            value={"" + fac.name + ""}
                                            name={"" + fac.name + ""}
                                        // checked={Features[fac.name]}
                                        />
                                        <label htmlFor={"" + fac.name + ""}>{fac.name}</label>
                                    </span>
                                })}
                            </div>
                        </div>




                    </div>

                    <DropZ />

                    <input

                        type="submit"
                        value="Создать"
                        className="orangeButton"

                    />
                </form>
            </div>
        </main >
    )
}


export default AddAd;

