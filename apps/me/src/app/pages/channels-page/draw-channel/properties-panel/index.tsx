import React from 'react'
import { Box, CloseButton, Divider, Group, SegmentedControl, Tabs } from '@mantine/core'
import DragInput from '../drag-input'

function PropertiesPanel() {
    return (
        <Box sx={{
            width: 240,
            height: "100%",
            zIndex: 100,
            backgroundColor: "#e1e1e1",
            position: "absolute",
            right: 0,
            top: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Tabs grow>
                <Tabs.Tab label="Design">
                    <DragInput  />
                    <Group spacing="xs">
                        <CloseButton />
                        <CloseButton />
                        <CloseButton />
                        <CloseButton />
                        <CloseButton />
                    </Group>
                    <Divider />
                </Tabs.Tab>
                <Tabs.Tab label="Properties">Second tab content</Tabs.Tab>
                <Tabs.Tab label="Inspect">Third tab content</Tabs.Tab>
            </Tabs>
        </Box>
    )
}

export default PropertiesPanel