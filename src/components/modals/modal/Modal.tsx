import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

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
    handleFormChange: (event: { [key: string]: any }) => void
    title: string
    values: { [key: string]: any }
}) {
    const [type, setType] = React.useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string)
    }

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
                            id="demo-simple-select"
                            value={type}
                            label="Type"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
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
