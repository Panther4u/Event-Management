import { setUserToken } from "@/utils/setUserToken";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Cookies from "universal-cookie";

export async function getStaticProps(context) {
    const cookies = new Cookies(context.req.headers.cookie);
    const userId = cookies.get("user_token");
    if (!userId) {
        return {
            props: { userIdCookie: null },
        };
    }
    return {
        props: { userIdCookie: userId },
    };
}

export default function signup({ userIdCookie }) {
    const [step, setStep] = useState(1);
    const [message, setMessage] = useState({ errorMsg: "", successMsg: "" });

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [regNumber, setRegNumber] = useState("");
    const [username, setUsername] = useState("");
    const router = useRouter();

    useEffect(() => {
        // If cookie found, Redirect to dashboard
        if (userIdCookie) {
            setStep(3); // Skip signup steps

            setTimeout(() => {
                setMessage({
                    errorMsg: "",
                    successMsg: "Redirecting you ...",
                });
            }, 500);

            setTimeout(() => {
                router.push("/users/dashboard");
            }, 800);
        }
    }, [userIdCookie]);

    // Email verification handler
    const handleVerifyEmail = async (event) => {
        event.preventDefault();
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/user/signup`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            }
        );
        const data = await response.json();
        if (response.status === 200) {
            setMessage({ errorMsg: "", successMsg: data.msg });
            setStep(2);
        } else {
            setMessage({ errorMsg: data.msg, successMsg: "" });
            setTimeout(() => {
                setMessage({
                    errorMsg: "Redirecting you to SignIn ...",
                    successMsg: "",
                });
            }, 1700);
            setTimeout(() => {
                router.push("/users/signin");
            }, 2500);
        }
    };

    // Final submission handler
    const handleSubmit = async (event) => {
        event.preventDefault();
        const regExp = /^\d{2}[A-Za-z]{3}\d{5}$/; // correct format check
        if (!regExp.test(regNumber)) {
            setMessage({
                errorMsg: "Registration number format is incorrect",
                successMsg: "",
            });
            return;
        }
        
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/user/signup/verify`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    otp,
                    contactNumber,
                    regNumber,
                    username,
                }),
            }
        );
        const data = await response.json();
        if (response.status === 200) {
            setMessage({ errorMsg: "", successMsg: data.msg });
            setUserToken(data.user_id); // set cookie when signed up
            setStep(3);
        } else {
            setMessage({ errorMsg: data.msg, successMsg: "" });
        }
    };

    return (
        <div className="m-2">
            <FiArrowLeft onClick={() => router.push("/")} size={24} className="cursor-pointer" />
            <div className="text-center text-3xl font-bold">Signup Page</div>
            <div className="max-w-3xl mx-auto mt-10">
                {/* Step Navigation */}
                <StepIndicator step={step} />
                {/* Display error or success messages */}
                {message.errorMsg && <AlertMessage type="error" message={message.errorMsg} />}
                {message.successMsg && <AlertMessage type="success" message={message.successMsg} />}
                <div className="bg-white p-5 rounded-lg mt-2">
                    {step === 1 && (
                        <EmailVerificationForm email={email} setEmail={setEmail} handleVerifyEmail={handleVerifyEmail} />
                    )}
                    {step === 2 && (
                        <SignupForm
                            otp={otp}
                            setOtp={setOtp}
                            contactNumber={contactNumber}
                            setContactNumber={setContactNumber}
                            regNumber={regNumber}
                            setRegNumber={setRegNumber}
                            username={username}
                            setUsername={setUsername}
                            handleSubmit={handleSubmit}
                        />
                    )}
                    {step === 3 && <SuccessMessage router={router} />}
                </div>
            </div>
        </div>
    );
}

// Components for reusability
function StepIndicator({ step }) {
    // ...your StepIndicator logic goes here
}

function AlertMessage({ type, message }) {
    return (
        <div className={`rounded p-3 my-2 ${type === 'error' ? 'bg-red-200 text-red-600' : 'bg-green-200 text-green-600'} font-medium`}>
            {message}
        </div>
    );
}

function EmailVerificationForm({ email, setEmail, handleVerifyEmail }) {
    return (
        <form onSubmit={handleVerifyEmail}>
            <label className="block mb-2 text-sm font-medium text-gray-700">Enter your Email address</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-full"
            />
            <button type="submit" className="mt-4 bg-[color:var(--darker-secondary-color)] text-white py-2 px-4 rounded hover:bg-[color:var(--secondary-color)]">
                Verify
            </button>
        </form>
    );
}

function SignupForm({
    otp, setOtp, contactNumber, setContactNumber,
    regNumber, setRegNumber, username, setUsername,
    handleSubmit,
}) {
    return (
        <form onSubmit={handleSubmit}>
            {/* Fields for OTP, Contact Number, Reg Number, and Username */}
            {/* Similar to your original structure */}
        </form>
    );
}

function SuccessMessage({ router }) {
    return (
        <div>
            <div className="bg-green-50 border-b border-green-400 text-green-800 text-sm p-4 flex justify-between">
                <div>
                    <div className="flex items-center">
                        <p><span className="font-bold">Welcome!</span> You are successfully signed up!</p>
                    </div>
                </div>
            </div>
            <button
                onClick={() => router.push("/users/dashboard")}
                className="mt-4 bg-[color:var(--darker-secondary-color)] text-white py-2 px-4 rounded hover:bg-[color:var(--secondary-color)] transition ease-in-out"
            >
                Go to your dashboard
            </button>
        </div>
    );
}
