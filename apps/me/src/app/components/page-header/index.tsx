import { Box, Group, Header } from '@mantine/core'
import React from 'react'

interface PageHeaderProps {
    left?: React.ReactNode
    right?: React.ReactNode
    center?: React.ReactNode
}

function PageHeader({ left, right, center }: PageHeaderProps) {
    return (
        <Header height={48} p="xs" sx={{
            alignItems: 'center',
        }}>
            <Group position="apart">
                <Box sx={{
                    width: 'fit-content',
                }}>{left}</Box>
                <Box sx={{
                    width: 'fit-content',
                }}>{center}</Box>
                <Box sx={{
                    width: 'fit-content',
                }}>{right}</Box>
            </Group>
        </Header>
    )
}

export default PageHeader