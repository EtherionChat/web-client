import { Box } from '@mantine/core'
import React from 'react'
import CoverPhoto from './cover-photo'
import Toolbar from './toolbar'

function NoteChannel() {
    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
        }}>
            <CoverPhoto />
            <Toolbar />
        </Box>
    )
}

export default NoteChannel