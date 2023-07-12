



const Banner = () => {

    return (
        <div className="bg-white">


            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-black/60  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className=" relative   px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl mx-auto text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
                            Let us find your

                            <strong className="block font-extrabold text-rose-700">
                                Forever Home.
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        
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