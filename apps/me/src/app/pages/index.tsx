import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ChannelPage from './channels-page';
import FriendsPage from './friends-page';
import { Docked, OverlappingPanels, ShowIf } from "react-overlapping-panels";
import isTouchscreenDevice from '../libs/isTouchscreenDevice';
import VirtualChannel from './channels-page/virtual-channel';
import HomePage from './home-page';
import { Alert } from '@mantine/core';
import SettingsPage from './settings-page';
import VideoCard from '../components/video-card';

export default function Me() {
    const path = useLocation().pathname;
    const inChannel = true;
    const inServer = path.includes("/server");
    const inSpecial = (path.startsWith("/friends") && isTouchscreenDevice) || path.startsWith("/settings");

    return (
        <OverlappingPanels
            width="100vw"
            height="100vh"
        // leftPanel={<div>abc</div>}
        // rightPanel={<div>def</div>}
        >
            <Routes>
                <Route path="/channel/@me" element={<HomePage />} />
                <Route path="/channel/:channelId" element={<ChannelPage />} />
                <Route path="/channel/:channelId/:messageId" element={<ChannelPage />} />
                <Route path="/friends" element={<FriendsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                {/* <Route path="/vi" element={<VirtualChannel />} /> */}
            </Routes>
        </OverlappingPanels>
    )
}
