import * as React from 'react'

import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import { ExperienceType } from '../../../../constants/types'
import { toTitleCase } from '../../../utils'

export interface DialogTitleProps {
    id: string
    children?: React.ReactNode
    onClose: () => void
}

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props

    return (
        <DialogTitle sx={{ paddingTop: '25px' }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 16,
                        top: 20,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    )
}

export default function Modal({
    open,
    onClose,
    renderFooter,
    handleFormChange,
    handleChangeMultiSelect,
    listings,
    title,
    values,
}: {
    open: boolean
    onClose: () => void
    listings?: { [key: string]: string }[]
    renderFooter: () => React.ReactNode
    handleFormChange: (event: { [key: string]: any }, type?: string) => void
    handleChangeMultiSelect?: (
        event: { [key: string]: any },
        type?: string,
    ) => void
    title: string
    values: { [key: string]: any }
}) {
    return (
        <div>
            <Dialog open={open} onClose={onClose} maxWidth="xs">
                <BootstrapDialogTitle id="modal-title" onClose={onClose}>
                    {title}
                </BootstrapDialogTitle>
                <DialogContent>
                    <FormControl fullWidth sx={{ marginBottom: '25px' }}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={values.name}
                            onChange={(event) => handleFormChange(event)}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: '25px' }}>
                        <InputLabel id="demo-simple-select-label">
                            Type
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="type"
                            value={values?.type?.toUpperCase()}
                            label="Type"
                            onChange={(event) =>
                                handleFormChange(event, 'type')
                            }
                        >
                            {Object.values(ExperienceType).map((type) => (
                                <MenuItem key={type} value={type}>
                                    {toTitleCase(type)}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: '25px' }}>
                        <InputLabel id="demo-simple-select-label">
                            Listings
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            multiple
                            id="listing"
                            value={values.listings}
                            label="Listings"
                            onChange={(event) =>
                                handleChangeMultiSelect &&
                                handleChangeMultiSelect(event, 'listings')
                            }
                        >
                            {listings?.map((listing) => (
                                <MenuItem
                                    key={listing.listing_id}
                                    value={listing.title}
                                >
                                    {listing.title}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: '25px' }}>
                        <TextField
                            placeholder="MultiLine with rows: 2 and rowsMax: 4"
                            multiline
                            rows={6}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            margin="dense"
                            id="address"
                            label="Address"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={values.address}
                            onChange={(event) => handleFormChange(event)}
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions sx={{ padding: '25px 24px' }}>
                    {renderFooter()}
                </DialogActions>
            </Dialog>
        </div>
    )
}
