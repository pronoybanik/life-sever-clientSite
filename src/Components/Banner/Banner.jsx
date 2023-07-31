

const Banner = () => {

    return (
        <div className="bg-white">
            <section
                className="relative lg:h-[700px] bg-[url(https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg?auto=compress&cs=tinysrgb&w=1600)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-black/60  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className=" relative   px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl mx-auto text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl text-white font-extrabold sm:text-5xl ">
                            pronoy 

                            <strong className="block font-extrabold text-rose-700 animate-pulse">
                                Forever Home.
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>



                        {/* <div
                            className="group relative  bg-cover bg-center  bg-no-repeat bg-gradient-to-r py-3 from-[#697388] to-[#bca18c] mt-2 inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8  text-white focus:outline-none focus:ring active:bg-indigo-500"

                        >
                            <span className="absolute -end-full transition-all group-hover:end-4">
                                <svg
                                    className="h-5 w-5 rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>

                            <span className="text-lg font-medium transition-all group-hover:me-4">
                                Get to Touch
                            </span>
                        </div> */}


                    </div>

                    {/* <div className="flex items-center justify-center">
                        <h1 className="lg:text-4xl font-serif text-white max-w-7xl "> Your Trusted Partner for Exceptional Healthcare Services and Lifesaving Treatments. Welcome to Life sever - Healing Lives, Restoring Hope.</h1>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default Banner;