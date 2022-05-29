import { ActionIcon, Avatar, Box, CloseButton, Group, Image, Input } from '@mantine/core';
import React, { useRef, useState } from 'react'
import InfiniteViewer from "react-infinite-viewer";
import styles from "./index.module.scss";
import Ruler from "@scena/react-ruler";
import Guides from "@scena/react-guides";
import classNames from 'classnames';
import PropertiesPanel from './properties-panel';
import Inspect from 'inspx';
import Draggable from 'react-draggable';
import PictureInPicture from '../../../components/picture-in-picture';
// import { Resizable } from 'react-resizable';

function DrawChannel() {
    const [zoom, setZoom] = useState(1);
    const [visibleRuler, setVisibleRuler] = useState(true);
    const infiniteViewerRef = useRef<any>();
    const horizontalGuidesRef = useRef<any>();
    const verticalGuidesRef = useRef<any>();
    const [horizontalSnapGuides, setHorizontalSnapGuides] = useState<any[]>([]);
    const [verticalSnapGuides, setVerticalSnapGuides] = useState<any[]>([]);
    let unit = 50;
    if (zoom < 0.8) {
        unit = Math.floor(1 / zoom) * 50;
    }
    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            flex: 1,
        }}>
            <PropertiesPanel />
            {visibleRuler && (
                <>
                    <Box className={styles["ruler-reset"]} onClick={() => {
                        infiniteViewerRef.current!.scrollCenter();
                    }}></Box>
                    <Guides
                        ref={horizontalGuidesRef}
                        type={"horizontal"}
                        snapThreshold={5}
                        snaps={horizontalSnapGuides}
                        displayDragPos={true}
                        dragPosFormat={v => `${v}px`}
                        className={classNames(styles["guides"], styles["horizontal"])}
                        zoom={zoom}
                        unit={unit}
                        onChangeGuides={e => {
                            setHorizontalSnapGuides(e.guides);
                        }}
                    />
                    <Guides
                        ref={verticalGuidesRef}
                        type={"vertical"}
                        snapThreshold={5}
                        snaps={verticalSnapGuides}
                        className={classNames(styles["guides"], styles["vertical"])}
                        displayDragPos={true}
                        dragPosFormat={v => `${v}px`}
                        zoom={zoom}
                        unit={unit}
                        onChangeGuides={e => {
                            setVerticalSnapGuides(e.guides);
                        }}
                    />
                </>
            )}
            <Inspect>
                <InfiniteViewer
                    ref={infiniteViewerRef}
                    className={styles["viewer"]}
                    usePinch={true}
                    useForceWheel={true}
                    pinchThreshold={50}
                    maxPinchWheel={3}
                    zoom={zoom}
                    onScroll={e => {
                        horizontalGuidesRef.current!.scroll(e.scrollLeft);
                        horizontalGuidesRef.current!.scrollGuides(e.scrollTop);
                        verticalGuidesRef.current!.scroll(e.scrollTop);
                        verticalGuidesRef.current!.scrollGuides(e.scrollLeft);
                    }}
                    onPinch={e => {
                        setZoom(e.zoom);
                    }}
                >
                    {/* <Draggable>
                        <Box className="group" sx={{
                            width: "fit-content",
                            padding: "4px 8px 8px 8px",
                            borderRadius: 8,
                            contentVisibility: "auto",
                            backgroundColor: "rgba(255, 255, 255, 0.5)",
                            backdropFilter: "blur(20px)",
                            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
                            contain: "layout style paint",
                            position: "relative",
                            cursor: "grab",
                        }}>
                            <Group position="apart" mb={4}>
                                <Group spacing={4}>
                                    <Input
                                        variant="unstyled"
                                        placeholder='Search or paste link'
                                    />
                                    <ActionIcon>a</ActionIcon>
                                </Group>
                                <Group sx={{
                                    position: "absolute",
                                    top: 8,
                                    right: 8,
                                }} spacing={4} className="invisible group-hover:visible" >
                                    <Avatar size={32} radius="xl" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
                                    <CloseButton variant="light" />
                                    <CloseButton variant="light" />
                                    <CloseButton variant="light" />
                                </Group>
                            </Group>
                            <Box sx={{
                                width: "fit-content",
                                height: "fit-content",
                                borderRadius: 8,
                                overflow: "hidden",
                                cursor: "pointer",
                            }}>
                                <iframe width={560} height={315} src="https://mantine.dev/core/avatar/" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </Box>
                        </Box>
                    </Draggable> */}
                    <PictureInPicture />
                    {/* <Draggable>
                        <div style={{ padding: 12, width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
                            <Image
                                radius="md"
                                src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                                alt="Random unsplash image"
                            />
                        </div>
                    </Draggable> */}
                </InfiniteViewer>
            </Inspect>
            <Box sx={{
                position: 'absolute',
                bottom: 16,
                left: 0,
                right: 0,
                zIndex: 50,
            }}>
                <Box sx={{
                    padding: 4,
                    backgroundColor: '#e1e1e1',
                    borderRadius: 4,
                    margin: '0 auto',
                    width: 'fit-content',
                }}>
                    <Group spacing={4}>
                        <CloseButton />
                        <CloseButton />
                        <CloseButton />
                        <CloseButton />
                        <CloseButton />
                        <CloseButton />
                        <CloseButton />
                        <CloseButton />
                        <CloseButton onClick={() => setVisibleRuler(!visibleRuler)} />
                    </Group>
                </Box>
            </Box>
        </Box>
    )
}

export default DrawChannel