
import React, { useState } from 'react';
import { connect } from "react-redux";
import { useFormik } from 'formik';
import { isShowLoginCreator } from '../../../redux/actionCreators'
import *as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string().required('required'),
    password: Yup.string().required('required')
})

const LoginForm = ({ isopen, isLogged, setActive }) => {


    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema,
        onSubmit(values, { resetForm }) {
            // сброс формы
            resetForm({ values: '' })
            // закрываем попап
            isopen()
            // записываем true в logged
            isLogged()
        }
    });


    return (
        <div className="wrap-login wrapper-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input
                        onChange={handleChange}
                        value={values.email}
                        type="email"
                        name="email"
                        placeholder="E-mail"
                    />
                    {errors.email ? <p className="error-field">*Это поле обязательно</p> : null}
                </label>
                <label htmlFor="">
                    <input
                        onChange={handleChange}
                        value={values.password}
                        type="password"
                        name="password"
                        placeholder="Пароль"
                    />
                    {errors.password ? <p className="error-field">*Это поле обязательно</p> : null}
                </label>
                <input type="submit" value="Войти" />
            </form>


        </div >
    )
}


const mapDispatchToProps = (dispatch) => ({
    isOpenLoginForm: isOpen => dispatch(isShowLoginCreator(isOpen)),
});

const Enhanced = connect(null, mapDispatchToProps)(LoginForm);

export { Enhanced as LoginForm };



// export default LoginForm