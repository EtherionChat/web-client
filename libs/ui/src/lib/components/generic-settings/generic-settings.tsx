// import { ArrowBack, X } from "@styled-icons/boxicons-regular";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./generic-settings.module.scss";
import classNames from "classnames";
import { CloseButton, Divider, ScrollArea, Text, UnstyledButton } from "@mantine/core";
import {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { useHotkeys } from "@mantine/hooks";

// import { isTouchscreenDevice } from "../../lib/isTouchscreenDevice";

// import { useApplicationState } from "../../mobx/State";

// import Category from "../../components/ui/Category";
// import Header from "../../components/ui/Header";
// import IconButton from "../../components/ui/IconButton";
// import LineDivider from "../../components/ui/LineDivider";

// import ButtonItem from "../../components/navigation/items/ButtonItem";
// import { Children } from "../../types/Preact";

interface Props {
    pages: {
        category?: any;
        divider?: boolean;
        id: string;
        icon: any;
        title: any;
        hidden?: boolean;
        hideTitle?: boolean;
    }[];
    custom?: any;
    children: any;
    defaultPage: string;
    showExitButton?: boolean;
    switchPage: (to?: string) => void;
    category: "pages" | "channel_pages" | "server_pages";
    indexHeader?: any;
}

export function GenericSettings({
    pages,
    switchPage,
    category,
    custom,
    children,
    defaultPage,
    showExitButton,
    indexHeader,
}: Props) {
    const history = useNavigate();
    // const state = useApplicationState();
    const isTouchscreenDevice = false;
    useHotkeys([
        ["Escape", () => exitSettings()],
    ])
    // const theme = state.settings.theme;
    const { page } = useParams<{ page: string }>();

    const [closing, setClosing] = useState(false);
    const exitSettings = useCallback(() => {
        setClosing(true);

        setTimeout(() => {
            if (window.history.state && window.history.state.idx > 0) {
                history(-1);
            } else {
                history('/channel/@me', { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
            }
        }, 200);
    }, [history]);

    const pageRef = useRef<string>();

    return (
        <div
            className={classNames(styles["settings"], {
                [styles["closing"]]: closing,
                // [styles["native"]]: window.isNative,
            })}
            data-mobile={isTouchscreenDevice}>
            <Helmet>
                <meta
                    name="theme-color"
                // content={
                //     isTouchscreenDevice
                //         ? theme.getVariable("background")
                //         : theme.getVariable("secondary-background")
                // }
                />
            </Helmet>
            {/* {isTouchscreenDevice && (
                <Header placement="primary" transparent>
                    {typeof page === "undefined" ? (
                        <>
                            {showExitButton && (
                                <IconButton onClick={exitSettings}>
                                    <X
                                        size={27}
                                        style={{ marginInlineEnd: "8px" }}
                                    />
                                </IconButton>
                            )}
                            <Text id="app.settings.title" />
                        </>
                    ) : (
                        <>
                            <IconButton onClick={() => switchPage()}>
                                <ArrowBack
                                    size={24}
                                    style={{ marginInlineEnd: "10px" }}
                                />
                            </IconButton>
                            <Text
                                id={`app.settings.${category}.${page}.title`}
                            />
                        </>
                    )}
                </Header>
            )} */}
            {(!isTouchscreenDevice || typeof page === "undefined") && (
                <div className={styles["sidebar"]}>
                    <ScrollArea
                    // className={styles["scrollbox"]}
                    // data-scroll-offset={
                    //     isTouchscreenDevice ? "with-padding" : undefined
                    // }
                    >
                        <div className={styles["container"]}>
                            {isTouchscreenDevice && indexHeader}
                            {pages.map((entry, i) =>
                                entry.hidden ? undefined : (
                                    <>
                                        {entry.category && (
                                            <Text
                                                // variant="uniform"
                                                children={entry.category}
                                            />
                                        )}
                                        <UnstyledButton
                                            // active={
                                            //     page === entry.id ||
                                            //     (i === 0 &&
                                            //         !isTouchscreenDevice &&
                                            //         typeof page === "undefined")
                                            // }
                                            onClick={() => switchPage(entry.id)}
                                        // compact
                                        >
                                            {entry.icon} {entry.title}
                                        </UnstyledButton>
                                        {entry.divider && <Divider />}
                                    </>
                                ),
                            )}
                            {custom}
                        </div>
                    </ScrollArea>
                </div>
            )}
            {(!isTouchscreenDevice || typeof page === "string") && (
                <div className={styles["content"]}>
                    <div
                        className={styles["scrollbox"]}
                        data-scroll-offset={
                            isTouchscreenDevice ? "with-padding" : undefined
                        }
                        ref={(ref) => {
                            // Force scroll to top if page changes.
                            if (ref) {
                                if (pageRef.current !== page) {
                                    ref.scrollTop = 0;
                                    pageRef.current = page;
                                }
                            }
                        }}>
                        <div className={styles["contentcontainer"]}>
                            {!isTouchscreenDevice &&
                                !pages.find(
                                    (x) => x.id === page && x.hideTitle,
                                ) && (
                                    <h1>
                                        <Text
                                            id={`app.settings.${category}.${page ?? defaultPage
                                                }.title`}
                                        />
                                    </h1>
                                )}
                            {children}
                        </div>
                        {!isTouchscreenDevice && (
                            <div className={styles["action"]}>
                                <div
                                    onClick={exitSettings}
                                    className={styles["closeButton"]}>
                                    {/* <X size={28} /> */}
                                    <CloseButton color="dark" size="xl" radius="xl" variant="outline" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}