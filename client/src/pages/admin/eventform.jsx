import AdminNavBar from "@/components/AdminNavBar";
import CreateEventForm from "@/components/CreateEventForm";
import Image from "next/image";
import React from "react";

function eventform() {
    return (
        <div className="pt-20 lg:pt-8 bg-white">
            <AdminNavBar />
            <center className = "p-2">
                <div className="flex flex-col  md:w-[100%] lg:w[100%] lg:flex-row md:flex-row justify-center bg-white">
                    <div className="flex-1 mx-2 mb-2 bg-white ">
                        <Image
                            src="/img/eventsFormImg.jpg"
                            alt="Event Image"
                            width={500}
                            height={500}
                            className="w-full h-full object-contain md:object-cover rounded-md border border-gray-300"
                        />
                    </div>
                    <div className="flex-1 m-2 md:m-0 md:mr-2 md:mb-2 rounded-md border border-gray-300">
                        <CreateEventForm />
                    </div>
                </div>
            </center>
        </div>
    );
}

export default eventform;
