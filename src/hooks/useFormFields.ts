import { useState } from 'react'

type Values = {
    [key: string]: any
}

export function useFormFields(
    initialState: Values,
): {
    fields: Values
    handleFormChange: (event: { [key: string]: any }, type?: string) => void
    resetForm: () => void
} {
    const [fields, setValues] = useState(initialState)

    return {
        fields,
        handleFormChange: function (event, id = '') {
            const fieldId = event.target.id || id

            setValues({
                ...fields,
                [fieldId]: event.target.value,
            })
        },
        resetForm: function () {
            setValues(initialState)
        },
    }
}
