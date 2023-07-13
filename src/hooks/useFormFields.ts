import { useState } from 'react'

type Values = {
    [key: string]: any
}

export function useFormFields(
    initialState: Values,
): [
    Values,
    (event: { [key: string]: any }, type?: string) => void,
    () => void,
] {
    const [fields, setValues] = useState(initialState)

    return [
        fields,
        function (event, id = '') {
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
