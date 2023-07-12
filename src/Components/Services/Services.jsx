import { Splide, SplideSlide } from '@splidejs/react-splide';
import ultrasound from '../../imges/services-logo/ultrasound.png'
import prenatalCare from '../../imges/services-logo/prenatal-care.png'
import '@splidejs/react-splide/css';


const Services = () => {
    return (
        <div className='font-serif' data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
    >

        <h1 className='text-5xl my-16 text-center'>How can we help you?</h1>

        <section className='grid  sm:grid-cols-1 '>
            <Splide  options={{
                perPage: 4,
                arrows: true,
                pagination: true,
                drag: "free",
                breakpoints: {
                    1200: { perPage: 3 },
                    640: { perPage: 1 },
                },
            }}>

                <SplideSlide>
                    <article
                        className="rounded-lg border mr-4  border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                    >
                        <img src={ultrasound} className='w-16' alt="" />

                        <p >
                            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                High-frequency sound waves used for medical imaging.
                            </h3>
                        </p>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed
                            nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                        </p>

                        <a
                            href="#"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Find out more

                            <span
                                aria-hidden="true"
                                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </a>
                    </article>
                </SplideSlide>

                <SplideSlide>
                    <article
                        className="rounded-lg border mr-4 border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                    >
                        <img src={prenatalCare} className='w-16' alt="" />

                        <p >
                            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </h3>
                        </p>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed
                            nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                        </p>

                        <a
                            href="#"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Find out more

                            <span
                                aria-hidden="true"
                                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </a>
                    </article>
                </SplideSlide>
                <SplideSlide>
                    <article
                        className="rounded-lg border mr-4 border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                    >
                        <img src={ultrasound} className='w-16' alt="" />

                        <p >
                            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </h3>
                        </p>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed
                            nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                        </p>

                        <a
                            href="#"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Find out more

                            <span
                                aria-hidden="true"
                                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </a>
                    </article>
                </SplideSlide>
                <SplideSlide>
                    <article
                        className="rounded-lg border mr-4 border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                    >
                        <img src={prenatalCare} className='w-16' alt="" />

                        <p >
                            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </h3>
                        </p>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed
                            nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                        </p>

                        <a
                            href="#"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Find out more

                            <span
                                aria-hidden="true"
                                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </a>
                    </article>
                </SplideSlide>
                <SplideSlide>
                    <article
                        className="rounded-lg border mr-4 border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                    >
                        <img src={ultrasound} className='w-16' alt="" />

                        <p >
                            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </h3>
                        </p>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed
                            nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                        </p>

                        <a
                            href="#"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Find out more

                            <span
                                aria-hidden="true"
                                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </a>
                    </article>
                </SplideSlide>
                <SplideSlide>
                    <article
                        className="rounded-lg border mr-4 border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                    >
                        <img src={prenatalCare} className='w-16' alt="" />

                        <p >
                            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </h3>
                        </p>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed
                            nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                        </p>

                        <a
                            href="#"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Find out more

                            <span
                                aria-hidden="true"
                                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </a>
                    </article>
                </SplideSlide>
            </Splide>


            {/* <article
                className="rounded-lg border mr-4  border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
            >
                <img src={ultrasound} className='w-16' alt="" />

                <p >
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        High-frequency sound waves used for medical imaging.
                    </h3>
                </p>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed
                    nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                </p>

                <a
                    href="#"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                    Find out more

                    <span
                        aria-hidden="true"
                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                        &rarr;
                    </span>
                </a>
            </article> */}



            {/* <article
                className="rounded-lg border mr-4 border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
            >
                <span className="inline-block rounded bg-blue-600 p-2 text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                    </svg>
                </span>

                <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed
                    nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                </p>

                <a
                    href="#"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                    Find out more

                    <span
                        aria-hidden="true"
                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                        &rarr;
                    </span>
                </a>
            </article>

            <article
                className="rounded-lg border mr-4 border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
            >
                <span className="inline-block rounded bg-blue-600 p-2 text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                    </svg>
                </span>

                <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed
                    nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                </p>

                <a
                    href="#"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                    Find out more

                    <span
                        aria-hidden="true"
                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                        &rarr;
                    </span>
                </a>
            </article> */}

        </section>

    </div> 
    );
};

export default Services;