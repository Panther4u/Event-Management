import { setUserToken } from "@/utils/setUserToken";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Cookies from "js-cookie"; // Use js-cookie for client-side cookie management

// Remove getStaticProps and use client-side logic for cookies

export default function Signup() {
    const [step, setStep] = useState(1);
    const [message, setMessage] = useState({ errorMsg: "", successMsg: "" });

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [regNumber, setRegNumber] = useState("");
    const [username, setUsername] = useState("");
    const router = useRouter();

    useEffect(() => {
        // Check for cookie on client side
        const userToken = Cookies.get("user_token");
        if (userToken) {
            setStep(3); // Skip login steps

            setTimeout(() => {
                setMessage({
                    errorMsg: "",
                    successMsg: "Redirecting you ...",
                });
            }, 500);

            // Redirect to dashboard
            setTimeout(() => {
                router.push("/users/dashboard");
            }, 800);
        }
    }, [router]);

    // Handle email verification
    const handleVerifyEmail = async (event) => {
        event.preventDefault();
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });
        const data = await response.json();
        if (response.status === 200) {
            setMessage({ errorMsg: "", successMsg: data.msg });
            setStep(2);
        } else {
            setMessage({ errorMsg: data.msg, successMsg: "" });
            setTimeout(() => {
                setMessage({ errorMsg: "Redirecting you to SignIn ...", successMsg: "" });
            }, 1700);
            setTimeout(() => {
                router.push("/users/signin");
            }, 2500);
        }
    };

    // Handle complete signup
    const handleSubmit = async (event) => {
        event.preventDefault();
        const regExp = /^\d{2}[A-Za-z]{3}\d{5}$/;
        if (regExp.test(regNumber)) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/signup/verify`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contactNumber,
                    otp,
                    email,
                    regNumber: regNumber.toUpperCase(),
                    username,
                }),
            });
            const data = await response.json();
            if (response.status === 200) {
                setMessage({ errorMsg: "", successMsg: data.msg });
                setStep(3);
                setUserToken(data.user_id);
            } else {
                setMessage({ errorMsg: data.msg, successMsg: "" });
            }
        } else {
            setMessage({ errorMsg: "Registration Number is not valid", successMsg: "" });
        }
    };

    return (
        <div className="m-2">
            <FiArrowLeft
                onClick={() => router.push("/")}
                size={24}
                className="cursor-pointer"
            />
            <div className="text-center text-3xl font-bold">Signup Page</div>

            <div className="max-w-3xl mx-auto mt-10">
                <div className="flex items-center justify-center">
                    <div className={`w-full h-24 lg:h-fit ${step === 1 ? `font-medium` : ``}`}>
                        <div className={`h-full border-2 rounded-l-lg px-5 py-2 ${step >= 1 ? `text-white bg-[color:var(--darker-secondary-color)] border-r-white border-[color:var(--darker-secondary-color)]` : `border-[color:var(--darker-secondary-color)] opacity-10 border-dashed`}`}>
                            <div>01</div>
                            Verify Email
                        </div>
                    </div>
                    <div className={`w-full h-24 lg:h-fit ${step === 2 ? `font-medium` : ``}`}>
                        <div className={`h-full border-2 border-l-0 px-5 py-2 ${step >= 2 ? `text-white bg-[color:var(--darker-secondary-color)] border-r-white border-[color:var(--darker-secondary-color)]` : `border-[color:var(--darker-secondary-color)] border-dashed`}`}>
                            <div>02</div>
                            Complete Signup
                        </div>
                    </div>
                    <div className={`w-full h-24 lg:h-fit ${step === 3 ? `font-medium` : ``}`}>
                        <div className={`h-full border-2 border-l-0 rounded-r-lg px-5 py-2 ${step >= 3 ? `text-white bg-[color:var(--darker-secondary-color)] border-[color:var(--darker-secondary-color)]` : `border-[color:var(--darker-secondary-color)] border-dashed`}`}>
                            <div>03</div>
                            Go to Dashboard!
                        </div>
                    </div>
                </div>

                {message.errorMsg && (
                    <h1 className="rounded p-3 my-2 bg-red-200 text-red-600 font-medium">
                        {message.errorMsg}
                    </h1>
                )}

                {message.successMsg && (
                    <h1 className="rounded p-3 my-2 bg-green-200 text-green-600 font-medium">
                        {message.successMsg}
                    </h1>
                )}

                <div className="bg-white p-5 rounded-lg mt-2">
                    {step === 1 && (
                        <form onSubmit={handleVerifyEmail}>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Enter your email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                className="bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-full"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="mt-4 bg-[color:var(--darker-secondary-color)] text-white py-2 px-4 rounded hover:bg-[color:var(--secondary-color)]"
                            >
                                Verify
                            </button>
                        </form>
                    )}

                    {step === 2 && (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Your email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    defaultValue={email}
                                    disabled
                                    className="bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-10/12"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Enter Verification Code
                                </label>
                                <input
                                    type="number"
                                    id="otp"
                                    name="otp"
                                    autoComplete="none"
                                    required
                                    value={otp}
                                    className="bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-10/12"
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={username}
                                    autoComplete="none"
                                    required
                                    className="bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-10/12"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Enter VIT Registration Number
                                </label>
                                <input
                                    type="text"
                                    id="regNumber"
                                    name="regNumber"
                                    value={regNumber}
                                    autoComplete="none"
                                    placeholder="12ABC12345"
                                    required
                                    className="bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-10/12"
                                    onChange={(e) => setRegNumber(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Enter Contact Number
                                </label>
                                <input
                                    type="text"
                                    id="contactNumber"
                                    name="contactNumber"
                                    value={contactNumber}
                                    autoComplete="none"
                                    placeholder="10-digit contact number"
                                    required
                                    className="bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-10/12"
                                    onChange={(e) => setContactNumber(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="mt-4 bg-[color:var(--darker-secondary-color)] text-white py-2 px-4 rounded hover:bg-[color:var(--secondary-color)]"
                            >
                                Complete Signup
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
