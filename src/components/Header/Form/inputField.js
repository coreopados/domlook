import React from 'react';

const InputField = (props) => {
    const [value, setValue] = React.useState();


    const handleChange = (e) => {
        setValue(e.target.value)
        props.onChange(event.target.value, event.target.name)
    }

    return (
        <div>
            <input
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                onChange={(e) => handleChange(e)}
                value={props.value}
                autocomplete={}
            />
        </div>
    )
}