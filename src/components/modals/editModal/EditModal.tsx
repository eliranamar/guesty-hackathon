import { Button } from '@mui/material'

import Modal from '../modal/Modal'
import { useFormFields } from '../../../hooks/useFormFields'

export default function EditModal({
    isOpen,
    values,
    handleCloseModal,
    handleSaveModal,
}: {
    isOpen: boolean
    values: { [key: string]: any }
    handleCloseModal: () => void
    handleSaveModal: () => void
}) {
    const [fields, handleFieldChange] = useFormFields({
        name: values.name,
        address: values.address,
    })

    const renderButtonStyles = (color: string) => ({
        backgroundColor: color,
        color: 'text.primary',
        textTransform: 'none',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: color,
            opacity: '0.7',
        },
    })

    return (
        <Modal
            open={isOpen}
            title="Edit"
            onClose={handleCloseModal}
            values={fields}
            handleFormChange={handleFieldChange}
            renderFooter={() => (
                <>
                    <Button
                        onClick={handleCloseModal}
                        sx={() => renderButtonStyles('#62DB29')}
                    >
                        Save
                    </Button>
                    <Button
                        onClick={handleCloseModal}
                        sx={() => renderButtonStyles('#FF5833')}
                    >
                        Cancel
                    </Button>
                </>
            )}
        />
    )
}
