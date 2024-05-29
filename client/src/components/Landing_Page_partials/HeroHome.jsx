import React from 'react';
import image from '../../../public/img/2171.jpg';
import { useRouter } from 'next/router';

function HeroHome() {
    const router = useRouter();

    return (
        <section
            className="relative bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url(${image.src})`,
            }}
        >
            <br />
            <br />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                {/* Hero content */}
                <div className="relative pt-12 pb-10 md:pt-5 md:pb-16">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h1 m-2">
                            {"< Shivam  "}
                            <span className="text-[color:var(--darker-secondary-color)]">
                                EVE
                            </span>
                            {"nt />"}
                            <p className="mt-3 text-5xl text-white">
                                {"Event Management"}
                            </p>
                        </h1>
                        <p className="text-2xl text-white mb-8">
                            "Bringing Your Events to Life: Simplified Registration, Seamless Management, and Easy Ticketing."
                        </p>
                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                            <div>
                                <a
                                    onClick={() => router.push("/admin/auth")}
                                    className="btn-sm text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] ml-3 cursor-pointer"
                                >
                                    Event Manager
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroHome;
