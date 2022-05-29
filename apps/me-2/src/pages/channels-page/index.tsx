import { Button, Menu } from '@mantine/core';
import { ServerAvatar, StripesScreen } from '@root/ui';
import React from 'react';

export default function ChannelPage() {
    return (
        <StripesScreen>
            <Button>DMPage</Button>
            <Menu>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item >Settings</Menu.Item>
            </Menu>
            <ServerAvatar />
        </StripesScreen>
    )
}
