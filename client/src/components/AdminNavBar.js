import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import AdminDropdown from "@/components/AdminDropdown";
import logo from 'public/assets/landing page images/logo.png';
import { getAdminToken } from "@/utils/getAdminToken";

export default function NavBar() {
    const router = useRouter();
    const adminIdCookie = getAdminToken();
    const [adminData, setAdminData] = useState({});
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fetch the admin data as soon as the page loads
    const fetchAdminData = async () => {
        if (!adminIdCookie) {
            console.error("No cookie found! Please authenticate");
            router.push("/admin/auth");
            return;
        }

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/admin/details`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    admin_id: adminIdCookie,
                }),
            }
        );

        if (!response.ok)
            throw new Error(`${response.status} ${response.statusText}`);

        try {
            const data = await response.json();
            setAdminData(data);
        } catch (error) {
            console.error("Invalid JSON string:", error.message);
        }
    };

    useEffect(() => {
        fetchAdminData();
    }, []);

    return (
        <div className="mb-[8vh]">
            <header className="bg-[color:var(--white-color)] fixed top-0 z-50 w-full shadow-md text-[color:var(--darker-secondary-color)]">
                <div className="container mx-auto flex items-center  lg:flex-row md:flex-row sm:flex-row  justify-between p-4 relative">
                    <div
                        onClick={() => router.push("/admin/dashboard")}
                        className="flex items-center gap-x-3 cursor-pointer"
                    >
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
                                onClick={() => router.push("/admin/dashboard")}
                                className="mr-4 cursor-pointer"
                            >
                                <a>Dashboard</a>
                            </li>
                            <li
                                onClick={() => router.push("/")}
                                className="mr-4 cursor-pointer"
                            >
                                <a>About us</a>
                            </li>
                            <AdminDropdown adminData={adminData} />
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}
