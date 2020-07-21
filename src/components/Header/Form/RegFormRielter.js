
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import *as Yup from 'yup';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



const validationSchema = Yup.object({
    email: Yup.string().required('required'),
    password: Yup.string()
        .required('required')
        .min(6, 'to short'),
    confirmPassword: Yup
        .string()
        .required()
        .label('Confirm password')
        .test('passwords-match', 'Passwords must match ya fool', function (value) {
            return this.parent.password === value;
        }),
    agenstvo: Yup.string().required('required'),
    certificatenum: Yup.string().required('required'),
    city: Yup.string().required('required'),
    address: Yup.string().required('required'),
    phone: Yup.string()
        .min(10, 'to short')
        .required('required')

})



const RegFormRielter = ({ isopen, defaultactiveLink }) => {

    const [phone, setphone] = useState('')

    const handleOnChange = (value) => {
        values.phone = phone
        setphone(value)
    }
    // useEffect(() => {
    //     handleOnChange()
    // }, [phone])

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            agenstvo: "",
            certificatenum: "",
            city: "",
            address: "",
            phone: "",
        },
        validationSchema,
        onSubmit(values, { resetForm }) {
            console.log(values)
            // сброс формы
            resetForm({ values: '' })
            // закрываем попап
            isopen()
            //активная форма логина
            defaultactiveLink()
        }
    });







    return (
        <div className="wrapper-form">
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        onChange={handleChange}
                        value={values.email}
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                    />
                    {errors.email ? <p className="error-field">*Это поле обязательно</p> : null}
                </label>
                <div className="field-wrap">
                    <label htmlFor="">
                        <input
                            onChange={handleChange}
                            value={values.password}
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            autoComplete="off"
                        />
                        {errors.password ? <p className="error-field">*Не менее 6 символов</p> : null}
                    </label>
                    <label htmlFor="">
                        <input
                            onChange={handleChange}
                            value={values.confirmPassword}
                            type="password"
                            name="confirmPassword"
                            placeholder="Повторите пароль"
                            autoComplete="off"
                        />
                        {errors.confirmPassword ? <p className="error-field">*Введите повторно пароль</p> : null}
                    </label>
                </div>

                <div className="field-wrap">
                    <label htmlFor="">
                        <input
                            onChange={handleChange}
                            value={values.agenstvo}
                            type="text"
                            name="agenstvo"
                            placeholder="Агенство"
                            autoComplete="off"
                        />
                        {errors.agenstvo ? <p className="error-field">*Это поле обязательно</p> : null}
                    </label>
                    <label htmlFor="">
                        <input
                            onChange={handleChange}
                            value={values.certificatenum}
                            type="number"
                            name="certificatenum"
                            placeholder="№ свидетельства АСНУ"
                            autoComplete="off"
                        />
                        {errors.certificatenum ? <p className="error-field">*Это поле обязательно</p> : null}
                    </label>
                </div>

                <div className="field-wrap">
                    <label htmlFor="">
                        <input
                            onChange={handleChange}
                            value={values.city}
                            type="text"
                            name="city"
                            placeholder="Город"
                            autoComplete="off"
                        />
                        {errors.city ? <p className="error-field">*Это поле обязательно</p> : null}
                    </label>
                    <label htmlFor="">
                        <input
                            onChange={handleChange}
                            value={values.address}
                            type="text"
                            name="address"
                            placeholder="Адрес"
                        />
                        {errors.address ? <p className="error-field">*Это поле обязательно</p> : null}
                    </label>
                </div>

                <label htmlFor="">
                    <PhoneInput
                        inputProps={{
                            name: 'phone',
                            autoFocus: true
                        }}
                        country='ua'
                        regions={'europe'}
                        value={phone}
                        onChange={handleOnChange}
                    />

                    {errors.phone ? <p className="error-field">*Это поле обязательно</p> : null}
                </label>
                <input type="submit" value="Регистрация" />

            </form>
            <div className="soc-block">
                <p>Нажимая на кнопку «Регистрация»,<br />
   я соглашаюсь с <a href="#">правилами сервиса</a></p>
                <p><span>или войдите через: </span></p>

                <div className="soc-icons">
                    <a href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                    <a href="google.com"><i className="fab fa-google-plus-g"></i></a>
                    <a href="twitter.com"><i className="fab fa-twitter"></i></a>
                    <a href="vk.com"><i className="fab fa-vk"></i></a>
                </div>
            </div>
        </div>
    )
}

export default RegFormRielter