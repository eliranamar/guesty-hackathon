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
    const [fields, handleFieldChange, resetForm] = useFormFields({
        name: values.name,
        address: values.address,
        type: values.type,
    })

    const onCloseModal = () => {
        handleCloseModal()
        resetForm()
    }

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
            onClose={onCloseModal}
            values={fields}
            handleFormChange={handleFieldChange}
            renderFooter={() => (
                <>
                    <Button
                        onClick={handleSaveModal}
                        sx={() => renderButtonStyles('#62DB29')}
                    >
                        Save
                    </Button>
                    <Button
                        onClick={onCloseModal}
                        sx={() => renderButtonStyles('#FF5833')}
                    >
                        Cancel
                    </Button>
                </>
            )}
        />
    )
}
