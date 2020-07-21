
import React from 'react';
import { useFormik } from 'formik';
import *as Yup from 'yup';

const validationSchema = Yup.object({
    namePrivate: Yup.string().required('required'),
    emailPrivate: Yup.string().required('required')
})

const RegFormPrivate = ({ isopen, defaultactiveLink }) => {



    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            namePrivate: "",
            emailPrivate: ""
        },
        validationSchema,
        onSubmit(values, { resetForm }) {

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
                <label htmlFor="">
                    <input
                        onChange={handleChange}
                        value={values.namePrivate}
                        type="text"
                        name="namePrivate"
                        placeholder="Имя"
                    />
                    {errors.namePrivate ? <p className="error-field">*Это поле обязательно</p> : null}
                </label>
                <label htmlFor="">
                    <input
                        onChange={handleChange}
                        value={values.emailPrivate}
                        type="email"
                        name="emailPrivate"
                        placeholder="E-mail"
                    />
                    {errors.emailPrivate ? <p className="error-field">*Это поле обязательно</p> : null}
                </label>
                <input type="submit" value="Войти" />

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

export default RegFormPrivate