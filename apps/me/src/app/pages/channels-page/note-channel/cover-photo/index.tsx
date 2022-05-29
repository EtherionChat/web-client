import { BackgroundImage, Box, Button, createStyles, Group } from '@mantine/core';
import React from 'react';
const useStyles = createStyles((theme) => ({
    button: {
        borderRadius: 0,

        '&:not(:first-of-type)': {
            borderLeftWidth: 0,
        },

        '&:first-of-type': {
            borderTopLeftRadius: theme.radius.sm,
            borderBottomLeftRadius: theme.radius.sm,
        },

        '&:last-of-type': {
            borderTopRightRadius: theme.radius.sm,
            borderBottomRightRadius: theme.radius.sm,
        },
    },
}));

function CoverPhoto() {
    const { classes } = useStyles();
    return (
        <Box sx={{ width: "100%", position: "relative" }} mb={48}>
            <BackgroundImage
                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                radius={0}
                sx={{ width: "100%", height: "30vh" }}
            >
                <Box sx={{
                    position: "absolute",
                    right: "128px",
                    bottom: "32px",
                    margin: "0.5rem",
                }}>
                    <Group grow spacing={0}>
                        <Button compact variant="default" className={classes.button}>
                            Change Cover
                        </Button>
                        <Button compact variant="default" className={classes.button}>
                            Remove Cover
                        </Button>
                    </Group>
                </Box>
            </BackgroundImage>
        </Box>
    )
}

export default CoverPhoto