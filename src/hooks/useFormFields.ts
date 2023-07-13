import { useState } from 'react'

export function useFormFields(initialState: { [key: string]: any }) {
    const [fields, setValues] = useState(initialState)

    return [
        fields,
        function (event: { [key: string]: any }, id = '') {
            const fieldId = event.target.id || id

            setValues({
                ...fields,
                [fieldId]: event.target.value,
            })
        },
        function () {
            setValues(initialState)
        },
    ]
}
