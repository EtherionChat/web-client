import { Button, Menu, Modal, Select, TextInput, TypographyStylesProvider } from '@mantine/core';
import { ServerAvatar, StripesScreen } from '@root/ui';
import React from 'react';
import { GenericSettings } from '@root/ui';
import { Text } from '@mantine/core';
import * as commonmark from "commonmark";

const reader = new commonmark.Parser();
const writer = new commonmark.HtmlRenderer();
const parsed = reader.parse(`# Textme - chat app
Heading 2
---------`);
const result = writer.render(parsed);

export default function SettingsPage() {
    return (
        <GenericSettings pages={[
            {
                // category: <div>{getChannelName(channel, true)}</div>,
                id: "my-account",
                icon: <span></span>,
                title: (
                    <Text>
                        My Account
                    </Text>
                ),
            },
            {
                id: "profile",
                icon: <span></span>,
                title: (
                    <Text>
                        User Profile
                    </Text>
                ),
            },
            {
                id: "privacy-and-safety",
                icon: <span></span>,
                title: (
                    <Text>
                        Privacy and Safety
                    </Text>
                ),
            },
            {
                id: "authorized-apps",
                icon: <span></span>,
                title: (
                    <Text>
                        Authorized Apps
                    </Text>
                ),
            },
            {
                id: "connections",
                icon: <span></span>,
                title: (
                    <Text>
                        Connections
                    </Text>
                ),
            },
            {
                id: "sessions",
                icon: <span></span>,
                title: (
                    <Text>
                        Sessions
                    </Text>
                ),
            },
            {
                id: "appearance",
                icon: <span></span>,
                title: (
                    <Text>
                        Appearance
                    </Text>
                ),
            },
            {
                id: "accessibility",
                icon: <span></span>,
                title: (
                    <Text>
                        Accessibility
                    </Text>
                ),
            },
            {
                id: "voice-and-video",
                icon: <span></span>,
                title: (
                    <Text>
                        Voice and Video
                    </Text>
                ),
            },
            {
                id: "text-and-images",
                icon: <span></span>,
                title: (
                    <Text>
                        Text and Images
                    </Text>
                ),
            },
            {
                id: "notifications",
                icon: <span></span>,
                title: (
                    <Text>
                        Notifications
                    </Text>
                ),
            },
            {
                id: "shortcuts",
                icon: <span></span>,
                title: (
                    <Text>
                        Shortcuts
                    </Text>
                ),
            },
            {
                id: "language",
                icon: <span></span>,
                title: (
                    <Text>
                        Language
                    </Text>
                ),
            },
        ]}
            children={
                <>
                    <Select
                        label="Timezone"
                        placeholder="Pick one"
                        data={[
                            { value: 'react', label: 'React' },
                            { value: 'ng', label: 'Angular' },
                            { value: 'svelte', label: 'Svelte' },
                            { value: 'vue', label: 'Vue' },
                        ]}
                    />
                    <Select
                        label="Keyboard layout"
                        placeholder="Pick one"
                        data={[
                            { value: 'react', label: 'React' },
                            { value: 'ng', label: 'Angular' },
                            { value: 'svelte', label: 'Svelte' },
                            { value: 'vue', label: 'Vue' },
                        ]}
                    />
                    <Modal opened={true} onClose={() => { return; }}
                        title="What's New"
                    >
                        <TypographyStylesProvider>
                            <div dangerouslySetInnerHTML={{ __html: result }} />
                        </TypographyStylesProvider>
                    </Modal>
                </>
            }
            category="channel_pages"
            switchPage={() => { return; }}
            defaultPage="overview"
            showExitButton />
    )
}
