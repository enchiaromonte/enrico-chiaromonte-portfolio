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

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            var _iub = _iub || [];
                            _iub.csConfiguration = {
                                "askConsentAtCookiePolicyUpdate":true,
                                "cookiePolicyInOtherWindow":true,
                                "floatingPreferencesButtonDisplay":"bottom-right",
                                "perPurposeConsent":true,
                                "siteId":3620690,
                                "whitelabel":false,
                                "cookiePolicyId":22734576,
                                "lang":"it", 
                                "banner":{ "acceptButtonDisplay":true,"closeButtonRejects":true,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"ownerName":false,"position":"float-top-center","showTitle":false }
                            };
                        `
                    }}
                />
                <script type="text/javascript" src="https://cs.iubenda.com/autoblocking/3620690.js"></script>
                <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
