import { Avatar, BackgroundImage, Box, Text } from '@mantine/core';
import React from 'react';

import styles from './index.module.scss';

interface StoryProps {
    storyImage: string;
    profilePic: string;
    username: string;
}

function Story(props: StoryProps): React.ReactElement {
    const { storyImage, profilePic, username } = props;
    return (
        <Box sx={{ height: 200 }}>
            <BackgroundImage
                src={storyImage}
                radius="md"
                className="relative"
                sx={{
                    height: '100%',
                }}
            >
                <Box sx={{ padding: 12 }}>
                    <Avatar src={profilePic} radius={56} sx={{
                        border: "4px solid #fff",
                        margin: "0.1rem",
                    }} />
                </Box>
                <Box sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    padding: 12,
                }}>
                    <Text weight={700} color="#fff" >{username}</Text>
                </Box>
            </BackgroundImage>
        </Box>
    );
}

export default Story;