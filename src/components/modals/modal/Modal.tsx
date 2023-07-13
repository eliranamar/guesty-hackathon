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

import { ExperienceType } from '../../../../constants/types'
import { toTitleCase } from '../../../utils'

export default function Modal({
    open,
    onClose,
    renderFooter,
    handleFormChange,
    title,
    values,
}: {
    open: boolean
    onClose: () => void
    renderFooter: () => React.ReactNode
    handleFormChange: (event: { [key: string]: any }, type?: string) => void
    title: string
    values: { [key: string]: any }
}) {
    return (
        <div>
            <Dialog open={open} onClose={onClose} maxWidth="xs">
                <DialogTitle sx={{ paddingTop: '25px' }}>{title}</DialogTitle>
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
                        <TextField
                            placeholder="MultiLine with rows: 2 and rowsMax: 4"
                            multiline
                            rows={6}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            autoFocus
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
