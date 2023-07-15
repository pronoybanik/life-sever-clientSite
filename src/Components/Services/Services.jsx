import { Splide, SplideSlide } from '@splidejs/react-splide';
import ultrasound from '../../imges/services-logo/ultrasound.png'
import prenatalCare from '../../imges/services-logo/prenatal-care.png'
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


const Services = () => {
    return (
        <div className='font-serif' data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
    >

        <h1 className='text-5xl my-16 text-center'>How can we help you?</h1>

        <section className='grid  grid-cols-1 '>
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
                        className="rounded-lg border mr-4   border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
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


           

        </section>

    </div> 
    );
};

export default Services;