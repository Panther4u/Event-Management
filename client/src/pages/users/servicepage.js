
import Footer from "@/components/Landing_Page_partials/Footer";
import Navbar from "@/components/Landing_Page_partials/Navbar";
import Service from "@/components/Service_Page/service";
import React, { useEffect } from "react";


const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function ServicePage() {
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
            <Service />
            <Footer />
            </div>
        </div>
    );
}

export default ServicePage;
