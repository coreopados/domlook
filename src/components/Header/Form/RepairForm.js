
import React from 'react';
import { useFormik } from 'formik';
import *as Yup from 'yup';

const validationSchema = Yup.object({
    repairName: Yup.string().required('required'),
})

const RepairForm = ({ isopen, defaultactiveLink }) => {



    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            repairName: ""
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
        <div className="wrap-repair wrapper-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input
                        onChange={handleChange}
                        value={values.repairName}
                        type="text"
                        name="repairName"
                        placeholder="Имя пользователя или логин"
                    />
                    {errors.repairName ? <p className="error-field">*Это поле обязательно</p> : null}
                </label>
                <input type="submit" value="Войти" />

            </form>
        </div>
    )
}

export default RepairForm