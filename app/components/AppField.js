import React from 'react';
import ErrorMessage from './ErrorMessage';
import AppTextInput from './AppTextInput';
import { useFormikContext } from 'formik';

function AppField({name, ...otherProps}) {
    const { handleChange, setFieldTouched, errors, touched} = useFormikContext();
    return (
        <>
            <AppTextInput 
                onChangeText = {handleChange({name})}
                onBlur={()=>setFieldTouched({name})}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppField;