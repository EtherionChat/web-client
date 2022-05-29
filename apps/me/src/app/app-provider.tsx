import { Kbd, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight';
import React from 'react';
import { Group, Text, Anchor } from '@mantine/core';

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

function ActionsWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            <Group
                position="apart"
                px={15}
                py="xs"
                sx={(theme) => ({
                    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                        }`,
                })}
            >
                <Text size="xs" color="dimmed">
                    <Text weight={700} transform="uppercase">Protip:</Text>
                    Start searches with <Kbd>@</Kbd> <Kbd>#</Kbd> <Kbd>!</Kbd> <Kbd>*</Kbd> to narrow results.
                </Text>
                <Anchor size="xs" href="#">
                    Learn more
                </Anchor>
            </Group >
        </div >
    );
}

function AppProvider({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <MantineProvider emotionOptions={{ key: 'etherion', prepend: false }} withCSSVariables withGlobalStyles withNormalizeCSS>
            <NotificationsProvider>
                <SpotlightProvider actions={actions} shortcut={null} actionsWrapperComponent={ActionsWrapper}>
                    {children}
                </SpotlightProvider>
            </NotificationsProvider>
        </MantineProvider>
    )
}

export default AppProvider