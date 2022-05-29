import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import React from 'react';

function AppProvider({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <MantineProvider emotionOptions={{ key: 'etherion', prepend: false }} withCSSVariables withGlobalStyles withNormalizeCSS>
            <NotificationsProvider>
                {children}
            </NotificationsProvider>
        </MantineProvider>
    )
}

export default AppProvider