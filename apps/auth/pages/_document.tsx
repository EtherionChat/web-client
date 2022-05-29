import { createGetInitialProps, createStylesServer, ServerStyles } from '@mantine/next';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();
const stylesServer = createStylesServer();

export default class _Document extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await getInitialProps(ctx);

        // Add your app specific logic here

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <ServerStyles html={initialProps.html} server={stylesServer} />
                </>
            ),
        };
    }

    render() {
        return (
            <Html>
                <Head />
                <body style={{ display: "block" }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
