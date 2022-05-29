import { Box, CloseButton, Group } from '@mantine/core'
import React from 'react'

function Toolbar() {
    return (
        <Box sx={{
            position: 'absolute',
            bottom: 4,
            left: 0,
            right: 0,
        }}>
            <Box sx={{
                padding: 4,
                backgroundColor: '#e1e1e1',
                borderRadius: 4,
                margin: '0 auto',
                width: 'fit-content',
            }}>
                <Group spacing={4}>
                    <CloseButton />
                    <CloseButton />
                    <CloseButton />
                    <CloseButton />
                    <CloseButton />
                    <CloseButton />
                    <CloseButton />
                    <CloseButton />
                    <CloseButton />
                </Group>
            </Box>
        </Box>
    )
}

export default Toolbar