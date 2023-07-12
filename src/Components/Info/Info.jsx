import { Link } from 'react-router-dom';

const Info = () => {

    return (
        <div>
            <section className=''>
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">

                    <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">

                        <li data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >

                            <a href="#" className="relative block group">
                                <img
                                    src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                    alt=""
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />

                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <div >
                                        <p className='text-4xl text-white  '> we are give our best </p>

                                        <div className="sm:flex sm:items-start sm:justify-start">
                                            <Link
                                                to=''
                                                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                            >
                                                details
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </a>
                        </li>

                        <li data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            <a href="#" className="relative block group">
                                <img
                                    src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                    alt=""
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />

                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <div >
                                        <p className='text-4xl text-white  '> we are give our best </p>

                                        <div className="sm:flex sm:items-start sm:justify-start">
                                            <Link
                                                to=''
                                                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                            >
                                                details
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </a>
                        </li>

                        <li data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                            
                            <a href="#" className="relative block group">
                                <img
                                    src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                                    alt=""
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />

                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <div >
                                        <p className='text-4xl text-white  '> we are give our best </p>

                                        <div className="sm:flex sm:items-start sm:justify-start">
                                            <Link
                                                to=''
                                                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                            >
                                                details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Info;