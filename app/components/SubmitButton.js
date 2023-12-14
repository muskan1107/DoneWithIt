import { useFormikContext } from 'formik';
import React from 'react';

function SubmitButton({title}) {
    const [handleSubmit] = useFormikContext();
    return (
        <AppButton title={title} onPress={handleSubmit} />
    );
}

export default SubmitButton;