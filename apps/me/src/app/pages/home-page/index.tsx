import { ActionIcon, Alert, Avatar, BackgroundImage, Badge, Box, Button, Card, Center, Checkbox, CheckboxGroup, CloseButton, Collapse, createStyles, Divider, Grid, Group, Input, Navbar, Paper, Popover, Radio, RadioGroup, ScrollArea, SegmentedControl, SimpleGrid, Stack, Tabs, Text, Tooltip, TypographyStylesProvider, UnstyledButton } from '@mantine/core';
import { useNetwork } from '@mantine/hooks';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { IconHeadphones } from '@root/ui';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/page-header';
import PictureInPicture from '../../components/picture-in-picture';
import Story from '../../components/story-reel';
import VideoCard from '../../components/video-card';
// import ChannelPage from '../channels-page';
import DrawChannel from '../channels-page/draw-channel';
// import SplitPane, { Pane } from 'split-pane-react';
// import 'split-pane-react/esm/themes/default.css'
//Todo: VirtualChannelPage
// import VirtualChannel from '../channels-page/virtual-channel';

const tabs = [
    { link: '', label: 'Home' },
    { link: '', label: 'Friends' },
    { link: '', label: 'My Cloud' },
    { link: '', label: 'More' },
];



const useStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef('icon');

    return {
        comment: {
            padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
        },

        body: {
            paddingTop: theme.spacing.sm,
            fontSize: theme.fontSizes.sm,
        },

        content: {
            '& > p:last-child': {
                marginBottom: 0,
            },
        },

        card: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        },

        avatar: {
            border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
        },
        navbar: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        },

        title: {
            textTransform: 'uppercase',
            letterSpacing: -0.25,
        },

        link: {
            ...theme.fn.focusStyles(),
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: theme.fontSizes.sm,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: theme.radius.sm,
            fontWeight: 500,

            '&:hover': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,

                [`& .${icon}`]: {
                    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                },
            },
        },

        linkIcon: {
            ref: icon,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
            marginRight: theme.spacing.sm,
        },

        linkActive: {
            '&, &:hover': {
                backgroundColor:
                    theme.colorScheme === 'dark'
                        ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                        : theme.colors[theme.primaryColor][0],
                color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
                [`& .${icon}`]: {
                    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
                },
            },
        },

        footer: {
            borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
                }`,
            paddingTop: theme.spacing.md,
        },
        user: {
            display: 'flex',
            minWidth: 120,
            paddingLeft: 2,
            marginLeft: -2,
            marginRight: theme.spacing.md,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

            '&:hover': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
        },
    };
});

const userInfo = {
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    "avatar": "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    "name": "Bill Headbanger",
    "job": "Fullstack engineer",
    "stats": [
        {
            "value": "34K",
            "label": "Followers"
        },
        {
            "value": "187",
            "label": "Follows"
        },
        {
            "value": "1.6K",
            "label": "Posts"
        }
    ],
    "email": "hspoonlicker@outlook.com"
}

const comment = {
    "postedAt": "10 minutes ago",
    "body": "<p>I use <a href=\"https://heroku.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href=\"https://www.digitalocean.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Digital Ocean</a> VPS to save some cash.</p>",
    "author": {
        "name": "Jacob Warnhalter",
        "image": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
    }
}

const storyList = [
    {
        username: 'John Doe',
        storyImage:
            'https://images.unsplash.com/photo-1611698529145-9fabdd4720c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        profilePic:
            'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        username: 'Blake Cheek',
        storyImage:
            'https://images.unsplash.com/photo-1625339591418-46878dce5f69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        profilePic:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
    {
        username: 'Bella',
        storyImage:
            'https://images.unsplash.com/photo-1625007387168-cb24505afb14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        profilePic:
            'https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        username: 'Adam Samson',
        storyImage:
            'https://images.unsplash.com/flagged/photo-1569231290150-9c6200705c5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        profilePic:
            'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    }
];

export default function HomePage() {
    const networkStatus = useNetwork();
    const history = useNavigate();
    const { classes, cx, theme } = useStyles();
    const { image, avatar, name, job, stats, email } = userInfo;
    const { postedAt, body, author } = comment;
    const [opened, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [sizes, setSizes] = useState([
        "72px",
        "256px",
        "auto",
    ]);

    const items = stats.map((stat) => (
        <div key={stat.label}>
            <Text align="center" size="lg" weight={500}>
                {stat.value}
            </Text>
            <Text align="center" size="sm" color="dimmed">
                {stat.label}
            </Text>
        </div>
    ));
    const links = tabs.map((item) => (
        <a
            className={cx(classes.link)}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                if (item.label === "More") {
                    setOpen(!opened);
                }
            }}
        >
            {/* <item.icon className={classes.linkIcon} /> */}
            <span>{item.label}</span>
        </a>
    ));

    return (
        <div className="flex flex-col w-full h-full">
            <PageHeader left={
                <Button variant="subtle" color="gray" compact>
                    Help
                </Button>
            } center={
                <Input
                    component={"input"}
                    placeholder="Find or start conversation"
                    variant="filled"
                    size="xs"
                    sx={{
                        width: "700px",
                    }}
                />
            } right={
                <Box>
                    <Avatar src={userInfo["avatar"]} radius="xl" size="sm" />
                    Nguyễn
                </Box>
            } />
            <div className="flex w-full h-full">
                <PictureInPicture />
                {/* <SplitPane
                sizes={sizes}
                onChange={(sizes) => setSizes(sizes.map(String))}
            > */}
                {/* <Pane minSize={72} maxSize='50%'> */}
                <nav className="flex flex-col w-[72px] h-full bg-slate-300">
                    aaa
                </nav>
                {/* </Pane> */}
                <Navbar height={"100%"} width={{ base: 300 }}>
                    <Navbar.Section>
                        {/* <Input
                            component={"input"}
                            placeholder="Find or start conversation"
                            variant="filled"
                            size="xs"
                        /> */}
                        <Box sx={{ height: 120 }}>
                            <BackgroundImage
                                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                                radius={0}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "flex-end"
                                }}
                            >
                                <Box p="md" sx={{
                                    background: "linear-gradient( 0deg, red, transparent )"
                                }}>
                                    <Text color="#fff" weight={600} lineClamp={1}>
                                        BackgroundImage component can be used to add any content on image. It is useful for hero
                                        headers and other similar sections
                                    </Text>
                                </Box>
                            </BackgroundImage>
                        </Box>
                    </Navbar.Section>
                    <Navbar.Section grow mt="md" component={ScrollArea} px="xs">
                        {links}
                        <Collapse in={opened}>
                            {links}
                            {links}
                            {links}
                            {links}
                            {links}
                        </Collapse>
                        <Group position='apart'>
                            <Text weight={500} size="lg">
                                Direct Messages
                            </Text>
                            <Group spacing={4}>
                                <Popover
                                    opened={visible}
                                    onClose={() => setVisible(false)}
                                    target={<Button onClick={() => setVisible(!visible)} variant="default" color="gray" radius="xl" compact>
                                        Label
                                    </Button>}
                                    width={260}
                                    position="bottom"
                                    spacing="xs"
                                >
                                    <SegmentedControl
                                        fullWidth
                                        data={[
                                            { label: 'One choice', value: 'single' },
                                            { label: 'Multi Select', value: 'multi' },
                                        ]}
                                    />
                                    <Divider my="xs" />
                                    <Stack spacing="xs">
                                        <UnstyledButton onClick={() => console.log('try focusing button with tab')}>
                                            <Group>
                                                <Badge></Badge>
                                                <Text>Bob Handsome</Text>
                                            </Group>
                                        </UnstyledButton>
                                        <UnstyledButton onClick={() => console.log('try focusing button with tab')}>
                                            <Group>
                                                <Badge></Badge>
                                                <Text>Bob Handsome</Text>
                                            </Group>
                                        </UnstyledButton>
                                        <UnstyledButton onClick={() => console.log('try focusing button with tab')}>
                                            <Group>
                                                <Badge></Badge>
                                                <Text>Bob Handsome</Text>
                                            </Group>
                                        </UnstyledButton>
                                        <UnstyledButton onClick={() => console.log('try focusing button with tab')}>
                                            <Group>
                                                <Badge></Badge>
                                                <Text>Bob Handsome</Text>
                                            </Group>
                                        </UnstyledButton>
                                    </Stack>
                                    <Divider my="xs" />
                                    <UnstyledButton onClick={() => history("/settings")}>
                                        <Group>
                                            <Badge></Badge>
                                            <Text>Bob Handsome</Text>
                                        </Group>
                                    </UnstyledButton>
                                </Popover>
                                <Popover
                                    opened={false}
                                    onClose={() => setVisible(false)}
                                    target={
                                        <Tooltip label="Create collection" withArrow position="right">
                                            <ActionIcon>
                                                +
                                            </ActionIcon>
                                        </Tooltip>}
                                    width={260}
                                    position="bottom"
                                    spacing="xs"
                                >
                                    <RadioGroup
                                        orientation="vertical"
                                        label="Sort by"
                                        spacing="xs"
                                    // description="This is anonymous"
                                    >
                                        <Radio value="Activity" label="Activity" />
                                        <Radio value="AZ" label="A-Z" />
                                        <Radio value="Z-A" label="Z-A" />
                                        <Radio value="Position" label="Position" />
                                    </RadioGroup>
                                    <Divider my="xs" />
                                    <CheckboxGroup
                                        defaultValue={['react']}
                                        orientation="vertical"
                                        label="Appearance"
                                        spacing="xs"
                                    >
                                        <Checkbox value="react" label="Show room with unread messages first" />
                                        <Checkbox value="svelte" label="Show previews of messages" />
                                    </CheckboxGroup>
                                </Popover>
                                <Tooltip label="Create DM" withArrow position="right">
                                    <ActionIcon>
                                        +
                                    </ActionIcon>
                                </Tooltip>
                            </Group>
                        </Group>
                    </Navbar.Section>
                    <Navbar.Section>
                        <div className="flex justify-between items-center">
                            <UnstyledButton className={classes.user}>
                                <Group>
                                    <Avatar src={image} radius="xl" />

                                    <div className="truncate" style={{ flex: 1 }}>
                                        <Text size="sm" weight={500}>
                                            {name}
                                        </Text>

                                        <Text color="dimmed" size="xs">
                                            {email}
                                        </Text>
                                    </div>

                                    {/* {icon || <ChevronRight size={14} />} */}
                                </Group>
                            </UnstyledButton>
                            <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                    <CloseButton size={32} aria-label="Close modal" />
                                </ContextMenu.Trigger>
                                <ContextMenu.Content>
                                    <ContextMenu.Item>
                                        <Text size="sm">Profile</Text>
                                    </ContextMenu.Item>
                                </ContextMenu.Content>
                            </ContextMenu.Root>
                            <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                    <ActionIcon size={32}>
                                        <IconHeadphones />
                                    </ActionIcon>
                                </ContextMenu.Trigger>
                                <Paper shadow="xs" p="md" component={ContextMenu.Content}>
                                    <ContextMenu.Item>
                                        <Text weight={700} transform="uppercase">Output Device</Text>
                                    </ContextMenu.Item>
                                    <ContextMenu.RadioGroup>
                                        <ContextMenu.RadioItem value="pedro1">
                                            <ContextMenu.ItemIndicator>
                                                <Radio value="pedro1" />
                                            </ContextMenu.ItemIndicator>
                                            a
                                        </ContextMenu.RadioItem>
                                        <ContextMenu.RadioItem value="pedro2">
                                            <ContextMenu.ItemIndicator>
                                                v
                                            </ContextMenu.ItemIndicator>
                                            a
                                        </ContextMenu.RadioItem>
                                        <ContextMenu.RadioItem value="pedro3">
                                            <ContextMenu.ItemIndicator>
                                                v
                                            </ContextMenu.ItemIndicator>
                                            a
                                        </ContextMenu.RadioItem>
                                    </ContextMenu.RadioGroup>
                                </Paper>
                            </ContextMenu.Root>
                            <CloseButton size={32} aria-label="Close modal"
                                onClick={() => {
                                    history("/settings");
                                }}
                            />
                        </div>
                    </Navbar.Section>
                </Navbar>
                <div className="flex flex-col flex-1">
                    {!networkStatus.online &&
                        (<Alert title="You're offline now" radius={0} color="red" withCloseButton variant="filled">
                            Oops! Internet is disconnected
                        </Alert>)
                    }
                    <div className="flex flex-col flex-1">
                        <PageHeader left={
                            <Button variant="subtle" color="gray" compact>
                                Help
                            </Button>
                        } />
                        {/* <ChannelPage /> */}
                        {/* <VirtualChannel /> */}
                        <DrawChannel />
                        {/* <Grid grow p={32} gutter={32}>
                        <Grid.Col span={9}>
                            <Stack spacing={32} className="px-32">
                                <SimpleGrid cols={5}>
                                    
                                    {storyList.map(({ username, storyImage, profilePic }, index) => (
                                        <Story key={index} username={username} profilePic={profilePic} storyImage={storyImage} />
                                    ))}
                                </SimpleGrid>
                                <Paper withBorder radius="md" className={classes.comment}>
                                    <Stack>
                                        <Group>
                                            <Avatar src={author.image} alt={author.name} radius="xl" />
                                            <Input
                                                sx={(theme) => ({
                                                    flex: 1
                                                })}
                                                variant="filled"
                                                placeholder="Nguyen oi ban dang nghi j the"
                                                radius="xl"
                                            />
                                        </Group>
                                        <Divider />
                                        <Group grow>
                                            <Button size="md" variant="subtle">
                                                Settings
                                            </Button>
                                            <Button size="md" variant="subtle">
                                                Settings
                                            </Button>
                                            <Button size="md" variant="subtle">
                                                Settings
                                            </Button>
                                        </Group>
                                    </Stack>
                                </Paper>
                                <Paper withBorder radius="md" className={classes.comment}>
                                    <Group>
                                        <Avatar src={author.image} alt={author.name} radius="xl" />
                                        <div>
                                            <Text size="sm">{author.name}</Text>
                                            <Text size="xs" color="dimmed">
                                                {postedAt}
                                            </Text>
                                        </div>
                                    </Group>
                                    <TypographyStylesProvider className={classes.body}>
                                        <div className={classes.content} dangerouslySetInnerHTML={{ __html: body }} />
                                    </TypographyStylesProvider>
                                </Paper>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <ScrollArea>
                                <Stack spacing="xs">
                                    <Card withBorder p="xl" radius="md" className={classes.card}>
                                        <Card.Section sx={{ backgroundImage: `url(${image})`, height: 140 }} />
                                        <Avatar src={avatar} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />
                                        <Text align="center" size="lg" weight={500} mt="sm">
                                            {name}
                                        </Text>
                                        <Text align="center" size="sm" color="dimmed">
                                            {job}
                                        </Text>
                                        <Group mt="md" position="center" spacing={30}>
                                            {items}
                                        </Group>
                                        <Button
                                            fullWidth
                                            radius="md"
                                            mt="xl"
                                            size="md"
                                            color={theme.colorScheme === 'dark' ? undefined : 'dark'}
                                        >
                                            Follow
                                        </Button>
                                    </Card>
                                    <Divider label="Sinh nhat" />
                                    <Paper withBorder radius="md" className={classes.comment}>
                                        <Group>
                                            <Avatar src={author.image} alt={author.name} radius="xl" />
                                            <div>
                                                <Text size="sm">{author.name}</Text>
                                                <Text size="xs" color="dimmed">
                                                    {postedAt}
                                                </Text>
                                            </div>
                                        </Group>
                                        <TypographyStylesProvider className={classes.body}>
                                            <div className={classes.content} dangerouslySetInnerHTML={{ __html: body }} />
                                        </TypographyStylesProvider>
                                    </Paper>
                                    <Divider label="Active" />
                                    <Paper withBorder radius="md" className={classes.comment}>
                                        <Group>
                                            <Avatar src={author.image} alt={author.name} radius="xl" />
                                            <div>
                                                <Text size="sm">{author.name}</Text>
                                                <Text size="xs" color="dimmed">
                                                    {postedAt}
                                                </Text>
                                            </div>
                                        </Group>
                                        <TypographyStylesProvider className={classes.body}>
                                            <div className={classes.content} dangerouslySetInnerHTML={{ __html: body }} />
                                        </TypographyStylesProvider>
                                    </Paper>
                                </Stack>
                            </ScrollArea>
                        </Grid.Col>
                    </Grid> */}
                    </div >
                </div >
                {/* </SplitPane> */}
            </div >
        </div>
    )
}
