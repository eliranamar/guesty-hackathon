import { Button } from '@mui/material'

import Modal from '../modal/Modal'

export default function EditModal({
    isOpen,
    values,
    handleCloseModal,
    handleSaveModal,
    handleFormChange,
    handleChangeMultiSelect,
    listings,
}: {
    isOpen: boolean
    values: { [key: string]: any }
    listings: { [key: string]: any }[]
    handleFormChange: (event: { [key: string]: any }) => void
    handleChangeMultiSelect: (event: { [key: string]: any }) => void
    handleCloseModal: () => void
    handleSaveModal: () => void
}) {
    const onCloseModal = () => {
        handleCloseModal()
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
            values={values}
            listings={listings}
            handleFormChange={handleFormChange}
            handleChangeMultiSelect={handleChangeMultiSelect}
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
