import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
    return (
        <Html lang="it">
            <Head>
                <link rel="icon" href="/images/enrico_chiaromonte_favicon.png" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-CQEGLZ433Q"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-CQEGLZ433Q');
                        `
                    }}
                />
                
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
