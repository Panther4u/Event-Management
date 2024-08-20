import UserDropdown from "@/components/UserDropdown";
import { getUserToken } from "@/utils/getUserToken";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import logo from 'public/assets/landing page images/logo.png';

export default function NavBar() {
    const router = useRouter();

    const userIdCookie = getUserToken();
    const [userData, setUserData] = useState({});
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const fetchUserData = async () => {
        // Check for the presence of the user token
        if (!userIdCookie) {
            console.error("No cookie found! Please sign in.");
            router.push("/users/signin");
            return;
        }
    
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/user/details`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_token: userIdCookie,
                    }),
                }
            );
    
            // Check if the response status is OK
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
    
            // Log the raw text response before parsing
            const responseText = await response.text();
            // console.log("Raw Response:", responseText);
    
            // Parse the response as JSON
            const data = JSON.parse(responseText);
            setUserData(data);
        } catch (error) {
            console.error("Error fetching user data:", error.message);
        }
    };
    

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div className="mb-[8vh]">
            <header className="bg-[color:var(--white-color)] fixed top-0 z-50 w-full shadow-md text-[color:var(--darker-secondary-color)]">
                <div className="container mx-auto flex items-center  lg:flex-row md:flex-row sm:flex-row  justify-between p-4 relative">
                    <div
                        onClick={() => router.push("/users/dashboard")}
                        className="flex items-center gap-x-3 cursor-pointer"
                    >
                        {/* <Image
                            src="/favicon_io/android-chrome-192x192.png"
                            width={500}
                            height={500}
                            alt="Logo"
                            className="h-8 w-8"
                        />
                        <h1 className="m-2 text-black font-bold text-4xl">
                            {"<In"}
                            <span className="text-[color:var(--darker-secondary-color)]">
                                VIT
                            </span>
                            {"e />"}
                        </h1> */}
                        <h1 className="m-2 text-black font-bold text-4xl">
                        <Image
                            className='logoimg'
                            src={logo}
                            width={60}
                            height={60}
                            alt="Inc Logo"
                            />
                        </h1>
                    </div>
                    <div className="lg:hidden absolute right-4 top-5">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-2xl"
                        >
                            &#9776;
                        </button>
                    </div>
                    <nav className={`lg:flex ${isMenuOpen ? "block" : "hidden"} lg:items-center lg:text-sm font-medium`}>
                        <ul className="flex items-center text-xs">
                            <li
                                onClick={() => router.push("/users/dashboard")}
                                className="mr-4 cursor-pointer"
                            >
                                <a>Dashboard</a>
                            </li>
                            {/* <li
                                onClick={() =>
                                    router.push("/users/past_events")
                                }
                                className="mr-4 cursor-pointer"
                            >
                                <a>Past Events</a>
                            </li> */}
                            <li
                                onClick={() => router.push("/")}
                                className="mr-4 cursor-pointer"
                            >
                                <a>About us</a>
                            </li>
                            <UserDropdown userData={userData} />
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}
