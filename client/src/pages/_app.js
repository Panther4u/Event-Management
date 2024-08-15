import "@/styles/globals.css";
import "@/styles/Home.css";
// import "@/styles/service.css";
import "@/styles/banner.css";
import "@/styles/navbar.css";
import "@/styles/about.css";
import "@/styles/testimonial.css";
import "@/styles/footer.css";

import Head from "next/head";



export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
                <title>Shivam Events</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
