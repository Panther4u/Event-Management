
import Contact from "@/components/Contact_Page/Contact";
import Footer from "@/components/Landing_Page_partials/Footer";
import Navbar from "@/components/Landing_Page_partials/Navbar";
import React, { useEffect } from "react";


const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function ContactPage() {
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
            <Contact />
            <Footer />
            </div>
        </div>
    );
}

export default ContactPage;
