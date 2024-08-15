// import LandingPageDevelopers from "@/utils/landing_page_developers";
// import React, { useEffect } from "react";
// import Banner from "./Landing_Page_partials/Banner";
// import Navbar from "./Landing_Page_partials/Navbar";
// import About from "./Landing_Page_partials/About";
// import Testimonial from "./Landing_Page_partials/testimonial";
// import Category from "./Landing_Page_partials/Category";
// import Footer from "./Landing_Page_partials/Footer";

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// function LandingPage() {
//     const fetchAllEvents = async () => {
//         const url = `${apiUrl}/getallevents`;
//         console.log("Fetching events from:", url);
//         try {
//             const response = await fetch(url);
//             console.log("Response:", response);
//             if (!response.ok) {
//                 throw new Error(`${response.status} ${response.statusText}`);
//             }
//         } catch (error) {
//             console.error("Error fetching events:", error);
//         }
//     };
    
//     useEffect(() => {
//         fetchAllEvents();
//     }, []);

//     return (
//         <div className="overflow-x-hidden">
//             <div className="flex flex-col min-h-screen overflow-x-hidden ">
//                 <Navbar className="overflow-x-hidden" />
//                 <Banner/>
//                 <About />
//                 <Category />
//                 <Testimonial />
//                 <Footer />
//             </div>
//         </div>
//     );
// }

// export default LandingPage;


// import Developers from "@/components/Landing_Page_partials/Developers";
// import FeaturesZigZag from "@/components/Landing_Page_partials/FeaturesZigZag";
// import Header from "@/components/Landing_Page_partials/Header";
// import HeroHome from "@/components/Landing_Page_partials/HeroHome";
// import LandingPageDevelopers from "@/utils/landing_page_developers";
// import React from "react";
// import { useEffect } from "react";

// const [feature1, feature2, feature3, dev1, dev2, dev3, pm1] = LandingPageDevelopers;

// function LandingPage() {

//     // run the server when a user enters the site
//     const fetchAllEvents = async () => {
//         const response = await fetch(
//             `${process.env.NEXT_PUBLIC_API_URL}/getallevents`
//         );
//         if (!response.ok) {
//             throw new Error(`${response.status} ${response.statusText}`);
//         }
//     };

//     useEffect(() => {
//         fetchAllEvents();
//     }, []);

//     return (
//         <div className="overflow-x-hidden">
//             <div className="flex flex-col min-h-screen overflow-x-hidden ">
//                 <Header className="overflow-x-hidden" />

//                 <main className="grow">
//                     <HeroHome />
//                     <FeaturesZigZag images={[feature1, feature2, feature3]} />
//                     {/* <Developers images={[dev1, dev2, dev3, pm1]} /> */}
//                 </main>
//             </div>
//         </div>
//     );
// }

// export default LandingPage;

// pages/LandingPage.js
// import Developers from "@/components/Landing_Page_partials/Developers";
// import FeaturesZigZag from "@/components/Landing_Page_partials/FeaturesZigZag";
import LandingPageDevelopers from "@/utils/landing_page_developers";
import React, { useEffect } from "react";
import Banner from "./Landing_Page_partials/Banner";
import Navbar from "./Landing_Page_partials/Navbar";
import About from "./Landing_Page_partials/About";
import Testimonial from "./Landing_Page_partials/testimonial";
import Category from "./Landing_Page_partials/Category";
import Footer from "./Landing_Page_partials/Footer";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const [feature1, feature2, feature3, dev1, dev2, dev3, pm1] = LandingPageDevelopers;

function LandingPage() {
    const fetchAllEvents = async () => {
        const url = `${apiUrl}/getallevents`;
        console.log("Fetching events from:", url);
        try {
            const response = await fetch(url);
            console.log("Response:", response);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };
    
    useEffect(() => {
        fetchAllEvents();
    }, []);

    return (
        <div className="overflow-x-hidden">
            <div className="flex flex-col min-h-screen overflow-x-hidden ">
                <Navbar className="overflow-x-hidden" />
                <Banner/>
                <About />
                {/* <Category /> */}
                <Testimonial />
                <Footer />
                {/* <main className="grow">
                    <FeaturesZigZag images={[feature1, feature2, feature3]} />
                    <Developers images={[dev1, dev2, dev3, pm1]} />
                </main> */}
            </div>
        </div>
    );
}

export default LandingPage;
