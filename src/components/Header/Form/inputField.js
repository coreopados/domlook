import React, { forwardRef, useImperativeHandle } from 'react';

const InputField = forwardRef((props, ref) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');


    const handleChange = (e) => {
        setValue(e.target.value)

        props.onChange(e.target.value, e.target.name)
        setError('')
    }

    const validate = () => {
        // return true;
        if (props.validation) {
            const rules = props.validation.split();

            for (let i = 0; i < rules.length; i++) {
                const current = rules[i]

                if (current === 'required') {
                    if (!value) {
                        setError('This field is required')
                        return false
                    }
                }

            }

        }
        return true;
    }

    useImperativeHandle(ref, () => {
        return {
            validate: () => validate()
        }
    })

    return (
        <div>
            <input
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                onChange={(e) => handleChange(e)}
                value={props.value ? props.value : value}
                autoComplete={props.autoComplete}
            />
            {error && <p className="error-field">*Это поле обязательно</p>}
        </div>
    )
})


InputField.defaultProps = {
    placeholder: '',
    name: '',
    type: '',
    value: '',
    autoComplete: 'off',
    validation: ''
}


export default InputField