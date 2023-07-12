import { useState } from 'react'

export function useFormFields(initialState: { [key: string]: any }) {
    const [fields, setValues] = useState(initialState)

    return [
        fields,
        function (event: { [key: string]: any }) {
            setValues({
                ...fields,
                [event.target.id]: event.target.value,
            })
        },
    ]
}
