import { Button, Group, Input, Popover, useMantineTheme } from '@mantine/core';
import type { SpotlightAction } from '@mantine/spotlight';
import { openSpotlight, SpotlightProvider } from '@mantine/spotlight';
import React, { useState } from 'react';
import PageHeader from '../../components/page-header';
import MessageChannel from './message-channel';
import NoteChannel from './note-channel';
import { useSpotlight } from '@mantine/spotlight';

function SpotlightControl() {
    return (
        <Group position="center">
            <Button onClick={openSpotlight}>Open spotlight</Button>
        </Group>
    );
}

const actions: SpotlightAction[] = [
    {
        title: 'Home',
        description: 'Get to home page',
        onTrigger: () => console.log('Home'),
    },
    {
        title: 'Dashboard',
        description: 'Get full information about current system status',
        onTrigger: () => console.log('Dashboard'),
    },
    {
        title: 'Documentation',
        description: 'Visit documentation to lean more about all features',
        onTrigger: () => console.log('Documentation'),
    },
];


function Demo() {
    return (
        <SpotlightProvider
            actions={actions}
            searchPlaceholder="Search..."
            shortcut="Ctrl + shift + 1"
            nothingFoundMessage="Nothing found..."
        >
            <SpotlightControl />
        </SpotlightProvider>
    );
}

export default function ChannelPage({ type = 'note' }) {
    const [referenceElement, setReferenceElement] = useState(null);
    const [visible, setVisible] = useState(true);
    const theme = useMantineTheme();
    const spotlight = useSpotlight();
    switch (type) {
        case 'note':
            return (
                <>
                    <PageHeader
                        left={
                            <Group position="center">

                                <Popover
                                    opened={visible}
                                    onClose={() => setVisible(false)}
                                    target={<Button onClick={() => setVisible((m) => !m)} variant="subtle" color="gray" compact>
                                        Settings
                                    </Button>}
                                    width={260}
                                    position="bottom"
                                    spacing={4}
                                >
                                    <Input
                                        variant="filled"
                                        placeholder="Your email"
                                    />
                                </Popover>
                            </Group>
                        }
                        right={
                            <Button onClick={spotlight.openSpotlight} variant="subtle" color="gray" compact>
                                Help
                            </Button>}

                    />
                    <NoteChannel />
                </>
            )
        default:
            return (
                <MessageChannel />
            )
    }
}
