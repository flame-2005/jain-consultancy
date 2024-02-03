import Image from 'next/image'
import { Inter } from 'next/font/google'
import Faqs from './components/Faqs'
import Form from './components/Form'
import Link from 'next/link'
import { FaArrowAltCircleUp } from "react-icons/fa";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <div>
            <Link href={'/'} type="button" class="z-[100] md:hidden fixed bottom-5 right-10 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-4xl"><FaArrowAltCircleUp /></Link>
                <div>
                    <section class=" relative overflow-hidden mt-10">
                        <div class="relative flex items-center justify-center w-full text-center bg-center bg-cover"
                        >
                            <div class="">
                                <div class="z-10 max-w-8xl">
                                    <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1705211261/Polygon_4_dfcfhw.png" className='absolute -z-10 right-10' alt="" />
                                    <div class="text-center max-w-5xl">
                                        <h2 class="py-5 typewriter text-2xl font-bold leading-10 tracking-tight md:text-6xl ">
                                            Empower Your Future

                                        </h2>
                                        <h2 class="py-5 typewriter2 text-2xl font-bold leading-10 tracking-tight md:text-6xl ">
                                            Miracles by our Mentors



                                        </h2>

                                        {/* <br className='my-5'/> Navigating College Choices */}

                                        <div class="flex flex-wrap justify-center items-center md:mt-20">
                                            <div className="lg:block flex ">
                                                <a
                                                    href="#"
                                                    className="inline-block h-fit px-4 py-3 mr-2 text-xs font-semibold leading-none text-gray-100 bg-blue-800 border border-blue-200 rounded hover:border-blue-400 hover:bg-blue-400"
                                                >
                                                    Book a free Session
                                                </a>
                                                <a
                                                    href="#"
                                                    className="inline-block h-fit px-4 py-3 mr-2 text-xs font-semibold leading-none text-blue-600 border border-blue-400 rounded hover:border-blue-300"
                                                >
                                                    Learn more
                                                </a>


                                            </div>
                                            <img className='w-0 md:w-fit' src="https://res.cloudinary.com/dtyombve3/image/upload/v1705211369/Polygon_5_jbgz57.png" alt="" />

                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>

                    </section>
                    <Form />

                    <section class="flex items-center bg-stone-100 font-poppins">
                        <div class="justify-center flex-1 py-6 mx-auto max-w-8xl overflow-hidden lg:py-4">
                            <div class="text-center mb-14">
                                <span
                                    class="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase ">
                                    Alumani network spanning over 30+ colleges
                                </span>
                                <h1 class="text-3xl font-bold capitalize ">Notable colleges</h1>
                            </div>
                            <div class="flex flex-wrap justify-center ">

                                <div class="w-full border-black p-2 rounded-xl shadow-xl px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0">
                                    <div class="mx-auto text-center ">
                                        <div
                                            class="inline-block mb-3 overflow-hidden text-xs text-white rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://res.cloudinary.com/dtyombve3/image/upload/v1706962124/download_3_hvdxre.png" alt="" />
                                        </div>
                                        <h2 class="mb-2 text-xl font-semibold text-gray-800 ">NMIMS</h2>
                                        <span class="inline-block mb-6 text-base font-medium text-blue-500 ">BBA
                                        </span>
                                        
                                    </div>
                                </div>
                                <div class="w-full border-black p-2 rounded-xl shadow-xl px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0">
                                    <div class="mx-auto text-center ">
                                        <div
                                            class="inline-block mb-3 overflow-hidden text-xs text-white rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://res.cloudinary.com/dtyombve3/image/upload/v1706348599/National_Institute_of_Technology_Trichy_Logo_ptqdn6.png" alt="" />
                                        </div>
                                        <h2 class="mb-2 text-xl font-semibold text-gray-800 ">IIM Bangalore</h2>
                                        <span class="inline-block mb-6 text-base font-medium text-blue-500 ">MBA
                                        </span>
                                        
                                    </div>
                                </div>
                                <div class="w-full border-black p-2 rounded-xl shadow-xl px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0">
                                    <div class="mx-auto text-center ">
                                        <div
                                            class="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-700 rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://res.cloudinary.com/dtyombve3/image/upload/v1706348568/download_1_gnhond.png" alt="" />
                                        </div>
                                        <h2 class="mb-2 text-xl font-semibold text-gray-800 ">NIT Karnataka</h2>
                                        <span class="inline-block mb-6 text-base font-medium text-blue-500 ">B Tech
                                        </span>
                                        
                                    </div>
                                </div>
                                <div class="w-full border-black p-2 rounded-xl shadow-xl px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0">
                                    <div class="mx-auto text-center ">
                                        <div
                                            class="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-700 rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://res.cloudinary.com/dtyombve3/image/upload/v1706963279/iit-delhi_x6s3gg.png" alt="" />
                                        </div>
                                        <h2 class="mb-2 text-xl font-semibold text-gray-800 ">IIT Delhi</h2>
                                        <span class="inline-block mb-6 text-base font-medium text-blue-500 ">B Tech
                                        </span>
                                        
                                    </div>
                                </div>
                                <div class="w-full border-black p-2 rounded-xl shadow-xl px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0">
                                    <div class="mx-auto text-center ">
                                        <div
                                            class="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-700 rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://res.cloudinary.com/dtyombve3/image/upload/v1706963432/download_2_xte78k.jpg" alt="" />
                                        </div>
                                        <h2 class="mb-2 text-xl font-semibold text-gray-800 ">AIIMS Delhi</h2>
                                        <span
                                            class="inline-block mb-6 text-base font-medium text-blue-500 ">MBBS
                                        </span>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* 2nd page */}
                    <h1></h1>
                    <section id='collages' class="flex items-center font-poppins ">
                        <div class="justify-center  px-4 py-4 mx-auto lg:py-0">
                            <div className='flex w-full'>

                                <h1 className='text-4xl mb-5 font-bold w-1/2'>Programs available</h1>
                                <div className='w-1/2 flex justify-end'>

                                    <img className='' src="https://res.cloudinary.com/dtyombve3/image/upload/v1705211369/Polygon_5_jbgz57.png" alt="" />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                                <div class="bg-white rounded-2xl shadow-2xl overflow-hidden ">
                                    <a href="#" class=""><img src="https://res.cloudinary.com/dtyombve3/image/upload/v1706978603/pexels-christina-morillo-1181244_u9yzyo.jpg"
                                        alt="" class="object-cover w-full h-64 rounded-t-lg" /></a>
                                    <div class="p-5">
                                        <a href="#" class="">
                                            <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-700 ">
                                                Engineering</h2>
                                        </a>
                                        <ul className='list-disc'>
                                            <li>Jee</li>
                                            <li>ComedK</li>
                                            <li>BITS</li>
                                        </ul>

                                    </div>
                                    <div className='w-full flex border-2'>
                                        <Link href='#' className='flex items-center justify-center w-1/2 py-2 bg-gray-200  hover:bg-gray-100-700 hover:tracking-wide transition-all'>Apply Now</Link>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-blue-800 text-white hover:bg-blue-700 hover:tracking-wide transition-all'>Explore</button>
                                    </div>
                                </div>
                                <div class="bg-white rounded-2xl shadow-2xl overflow-hidden  ">
                                    <a href="#" class=""><img src="https://res.cloudinary.com/dtyombve3/image/upload/v1706978699/pexels-karolina-grabowska-4021775_lmv0hj.jpg"
                                        alt="" class="object-cover w-full h-64 rounded-t-lg" /></a>
                                    <div class="p-5">
                                        <a href="#" class="">
                                            <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-700 ">Medical</h2>
                                        </a>
                                        <ul className='list-disc'>
                                            <li>NEET UG</li>
                                            <li>NEET PG</li>
                                            <li>Foreign University</li>
                                        </ul>

                                    </div>
                                    <div className='w-full flex border-2'>
                                        <Link href='#' className='flex items-center justify-center w-1/2 py-2 bg-gray-200  hover:bg-gray-100-700 hover:tracking-wide transition-all'>Apply Now</Link>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-blue-800 text-white hover:bg-blue-700 hover:tracking-wide transition-all'>Explore</button>
                                    </div>
                                </div>
                                <div class="bg-white rounded-2xl shadow-2xl overflow-hidden ">
                                    <a href="#" class=""><img src="https://res.cloudinary.com/dtyombve3/image/upload/v1706964734/pexels-pixabay-416405_pr8fcs.jpg" alt=""
                                        class="object-cover w-full h-64 rounded-t-lg" /></a>
                                    <div class="p-5">
                                        <a href="#" class="">
                                            <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-700 ">MBA</h2>
                                        </a>
                                        <ul className='list-disc'>
                                            <li>CAT</li>
                                            <li>Gmat
                                            </li>
                                            <li>XAT</li>
                                        </ul>
                                    </div>
                                    <div className='w-full flex border-2'>
                                        <Link href='#' className='flex items-center justify-center w-1/2 py-2 bg-gray-200  hover:bg-gray-100-700 hover:tracking-wide transition-all'>Apply Now</Link>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-blue-800 text-white hover:bg-blue-700 hover:tracking-wide transition-all'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="flex  items-center mt-5 font-poppins ">
                        <div class="flex max-w-7xl justify-center items-center px-4 py-4 mx-auto lg:py-0">
                            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                                <div class="bg-white rounded-2xl shadow-2xl overflow-hidden ">
                                    <a href="#" class=""><img src="https://res.cloudinary.com/dtyombve3/image/upload/v1706979811/How-to-Get-Direct-Admission-in-MBBS_a8hrjd.jpg"
                                        alt="" class="object-cover w-full h-64 rounded-t-lg" /></a>
                                    <div class="p-5">
                                        <a href="#" class="">
                                            <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-700 ">Direct Admission</h2>
                                        </a>
                                        <ul className='list-disc'>
                                            <li>Into Engineering</li>
                                            <li>Into Medical</li>
                                            <li>Into MBA</li>
                                        </ul>

                                    </div>
                                    <div className='w-full flex border-2'>
                                        <Link href='#' className='flex items-center justify-center w-1/2 py-2 bg-gray-200  hover:bg-gray-100-700 hover:tracking-wide transition-all'>Apply Now</Link>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-blue-800 text-white hover:bg-blue-700 hover:tracking-wide transition-all'>Explore</button>
                                    </div>
                                </div>
                                <div class="bg-white rounded-2xl shadow-2xl overflow-hidden ">
                                    <a href="#" class=""><img src="https://res.cloudinary.com/dtyombve3/image/upload/v1706979718/guidance-and-counselling_wzgseh.png"
                                        alt="" class="object-cover w-full h-64 rounded-t-lg" /></a>
                                    <div class="p-5">
                                        <a href="#" class="">
                                            <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-700 ">Counselling</h2>
                                        </a>
                                        <ul className='list-disc'>
                                            <li>JEE</li>
                                            <li>NEET</li>
                                            <li>ComedK</li>
                                        </ul>

                                    </div>
                                    <div className='w-full flex border-2'>
                                        <Link href='#' className='flex items-center justify-center w-1/2 py-2 bg-gray-200  hover:bg-gray-100-700 hover:tracking-wide transition-all'>Apply Now</Link>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-blue-800 text-white hover:bg-blue-700 hover:tracking-wide transition-all'>Explore</button>
                                    </div>
                                </div>
                                <div class="bg-white rounded-2xl overflow-hidden ">
                                    <a href="#" class=""><img src="https://res.cloudinary.com/dtyombve3/image/upload/v1706979338/career-guidance_lksbqp.jpg"
                                        alt="" class="object-cover w-full h-64 rounded-t-lg" /></a>
                                    <div class="p-5">
                                        <a href="#" class="">
                                            <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-700 ">Career Guidance</h2>
                                        </a>
                                        <ul className='list-disc'>
                                            <li>MBA Applications</li>
                                            <li>Study Abroad</li>
                                            <li>Right Career</li>
                                        </ul>

                                    </div>
                                    <div className='w-full flex border-2'>
                                        <Link href='#' className='flex items-center justify-center w-1/2 py-2 bg-gray-200  hover:bg-gray-100-700 hover:tracking-wide transition-all'>Apply Now</Link>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-blue-800 text-white hover:bg-blue-700 hover:tracking-wide transition-all'>Explore</button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </section>
                    <div className='w-full mt-10 flex justify-center'>
                        <div className='flex w-5/6'>
                            <button className='rounded-md flex  px-2 mt-2 py-2 bg-blue-800 text-white hover:bg-blue-700 hover:tracking-wide transition-all' >Explore More About Us</button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                {/* 3rd page */}
                <section class="flex items-center bg-gray-50 lg:h-screen font-poppins" id="about">
                    <div class="justify-center flex-1 max-w-6xl px-2 py-4 mx-auto lg:py-6 md:px-6">
                        <div class="flex flex-wrap lg:flex-nowrap">
                            <div class="w-full my-12 lg:w-1/2 lg:my-0">
                                <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1705396308/7566_1_qxowmr.png" alt=""
                                    class="object-cover w-full h-full" />
                            </div>
                            <div class="w-full lg:w-1/2 md:ml-10 ml-5">
                                <div class="py-6 lg:pr-32">
                                    <div class="mb-4">
                                        <span
                                            class="px-3 py-1 font-bold text-yellow-400 bg-blue-50 rounded-xl">
                                            About Us</span>
                                        <h2 class="mt-4 text-4xl font-bold">Key Features</h2>
                                    </div>
                                    {/* <div class="flex items-start py-4">
                            <div class="mr-5 text-blue-500 dark:text-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="w-8 h-8 bi bi-pc-display-horizontal" viewBox="0 0 16 16">
                                    <path
                                        d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z" />
                                </svg>
                            </div>
                            <div>
                                <h2 class="mb-2 text-xl font-semibold ">3+ Devices</h2>
                                <p class="leading-loose text-gray-600 ">Lorem ipsum dor amet ispicus
                                    Lorem ipsum dor amet
                                    ispicus Lorem ipsum dor amet ispicus </p>
                            </div>
                        </div> */}
                                    {/* <div class="flex items-start py-4">
                            <div class="mr-5 text-blue-500 dark:text-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="w-8 h-8 bi bi-chat" viewBox="0 0 16 16">
                                    <path
                                        d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                </svg>
                            </div>
                            <div>
                                <h2 class="mb-2 text-xl font-semibold ">Direct Messages</h2>
                                <p class="leading-loose text-gray-600 ">Lorem ipsum dor amet ispicus
                                </p>
                            </div>
                        </div> */}
                                    {/* <div class="flex items-start py-4">
                            <div class="mr-5 text-blue-500 dark:text-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="w-8 h-8 bi bi-key" viewBox="0 0 16 16">
                                    <path
                                        d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </div>
                            <div>
                                <h2 class="mb-2 text-xl font-semibold ">Direct Messages</h2>
                                <p class="leading-loose text-gray-600 ">Lorem ipsum dor amet ispicus
                                </p>
                            </div>
                        </div> */}

Welcome to Jain Consultancy, your go-to partner for NEET, JEE, and competitive exam success. Our expert team, comprising seasoned educators and advisors, offers personalized programs tailored to individual needs, ensuring a focused and effective approach. We pride ourselves on fostering a transparent and nurturing environment, instilling the confidence needed to excel in competitive exams.

At Jain Consultancy, we are not just educators; we are mentors on your journey to academic excellence. Join us for a concise and impactful preparation experience, where success becomes a reality.
                                    <button className=' rounded-md flex  px-2 mt-2 py-2 bg-blue-800 text-white hover:bg-blue-700 hover:tracking-wide transition-all' >Explore More About Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="md:flex py-16 bg-gradient-to-t from-blue-100 to-white lg:py-20  font-poppins">
                    <div class="md:w-1/2 md:ml-10 h-full flex text-center items-center justify-center mx-auto">
                        <div class="">
                            <div class="flex flex-col items-center  ">
                                <h1 class="text-2xl font-bold leading-tight"> How <span class="text-yellow-500">
                                    It Works
                                </span> </h1>
                                <h1 className="text-3xl text-center font-bold leading-tight " >
                                    3 Step path to your Perfect Collage
                                </h1>
                                <div class="flex w-24 mt-1 mb-6 overflow-hidden rounded">
                                    <div class="flex-1 h-2 bg-blue-200">
                                    </div>
                                    <div class="flex-1 h-2 bg-blue-400">
                                    </div>
                                    <div class="flex-1 h-2 bg-blue-600">
                                    </div>
                                </div>
                            </div>
                            <p class="mb-16 mx-5 md:mx-0 text-base text-center text-gray-500">
                                Discover how our tailored consultation process guides your child from
                                aspirations to admissions. We start with understanding your child's unique
                                strengths and goals, develop a personalized college list, and offer comprehensive
                                support throughout the application journey. Experience a seamless, supportive
                                path to the ideal college match.
                            </p>
                        </div>
                    </div>

                    <div class="md:w-1/2 flex flex-col justify-center ">

                        <div class="w-full px-4 mx-auto lg:max-w-5xl ">
                            <div class="relative">
                                <div
                                    class="absolute hidden w-1 h-full transform -translate-x-1/2 bg-[#c9e2f5] lg:block left-1/2">
                                </div>
                                <div class="space-y-2 lg:space-y-4">
                                    <div>
                                        <div class="flex flex-col items-center">
                                            <div class="flex items-center justify-start w-full mx-auto">
                                                <div class="w-full lg:w-1/2 lg:pr-8">
                                                    <div
                                                        class="relative flex-1 mb-10 rounded  shadow lg:mb-8 ">
                                                        <div
                                                            class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                                                            <div
                                                                class="hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block ">
                                                            </div>
                                                        </div>
                                                        <div class="relative ">
                                                            <div class="flex flex-wrap items-center">
                                                                <div class="p-4 ">
                                                                    <p
                                                                        class="text-6xl font-bold text-gray-700  text-bold">
                                                                        01</p>
                                                                    <p className='text-xl font-bold text-blue-700 '>
                                                                        Initial Consultation
                                                                    </p>
                                                                    <p className='text-gray-700'>
                                                                    Your journey has just begun, and we're excited to guide you towards your academic goals. Get ready for a transformative experience as we embark on this path together!.
                                                                    </p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-700 rounded-full  left-1/2 lg:translate-y-[4px]">
                                                <span class="text-gray-100 ">

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Right section --> */}
                                    <div>
                                        <div class="flex flex-col items-center">
                                            <div class="flex items-center justify-end w-full mx-auto">
                                                <div class="w-full lg:w-1/2 lg:pl-8">
                                                    <div
                                                        class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 ">
                                                        <div
                                                            class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                                            <div
                                                                class="hidden h-10 origin-top-right transform -rotate-45 bg-white  lg:block drop-shadow-lg">
                                                            </div>
                                                        </div>
                                                        <div class="relative ">
                                                            <div class="flex flex-wrap items-center">
                                                                <div class="p-4 ">
                                                                    <div class="p-4 ">
                                                                        <p
                                                                            class="text-6xl font-bold text-gray-700  text-bold">
                                                                            02</p>
                                                                        <p className='text-xl font-bold text-blue-700'>
                                                                            Customized College
                                                                            Shortlist
                                                                        </p>
                                                                        <p className='text-gray-700'>
                                                                            
Kudos on unlocking your Customized College Shortlist! Your unique path to success starts here, tailored to your aspirations. Get ready for an exciting academic journey ahead!
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-700 rounded-full  left-1/2 lg:translate-y-[3px]">
                                                <span class="text-gray-100 ">
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Left section --> */}
                                    <div>
                                        <div class="flex flex-col items-center">
                                            <div class="flex items-center justify-start w-full mx-auto">
                                                <div class="w-full lg:w-1/2 lg:pr-8">
                                                    <div
                                                        class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 ">
                                                        <div
                                                            class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                                                            <div
                                                                class="hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block ">
                                                            </div>
                                                        </div>
                                                        <div class="relative ">
                                                            <div class="flex flex-wrap items-center">
                                                                <div class="p-4 ">
                                                                    <p
                                                                        class="text-6xl font-bold text-gray-700  text-bold">
                                                                        03</p>
                                                                    <p className='text-xl font-bold text-blue-700'>
                                                                        Application
                                                                        Assistance
                                                                    </p>
                                                                    <p className='text-gray-700'>
                                                                        
Exciting news – your Application Assistance journey begins! Trust us to navigate the process, ensuring your applications shine. Let's make your academic dreams a reality together!
                                                                    </p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-700 rounded-full  left-1/2 lg:translate-y-[2px]">
                                                <span class="text-gray-100 ">

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Right section --> */}
                                    <div>
                                        <div class="flex flex-col items-center">
                                            <div class="flex items-center justify-end w-full mx-auto">
                                                <div class="w-full lg:w-1/2 lg:pl-8">
                                                    <div
                                                        class="relative flex-1 mb-10 rounded bg-blue-900 shadow lg:mb-8 ">
                                                        <div
                                                            class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                                            <div
                                                                class="hidden h-10 origin-top-right transform -rotate-45 bg-white  lg:block drop-shadow-lg">
                                                            </div>
                                                        </div>
                                                        <div class="relative z-20 ">
                                                            <div class="flex flex-wrap items-center">
                                                                <div class="p-4 ">
                                                                    <div class="p-4 ">
                                                                        <p
                                                                            class="text-6xl font-bold text-white  text-bold">
                                                                            04</p>
                                                                        <p className='text-xl font-bold text-white'>
                                                                            Dream Collage
                                                                        </p>
                                                                        <p className=' text-white'>
                                                                        Congrats on your dream college acceptance – your success is our pride! Thrive ahead with confidence!
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-700 rounded-full  left-1/2 lg:translate-y-[1px]">
                                                <span class="text-gray-100 ">

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="flex items-center flex-col bg-[#2C3D8F] ">
                    <div class="justify-center flex flex-col md:flex-row flex-1 max-w-8xl px-4 py-6 mx-auto lg:py-4 md:px-6">
                        <div class="mx-auto mb-12">

                            <h2 class="mt-2 mb-4 font-bold text-white  md:text-xl ">
                                Still Wondering?
                                <br />
                                Why Not Listen to Our Satisfied Clients Stories?
                            </h2>
                            <p class="leading-loose text-white  ">
                                We've provided one-on-one guidance to
                                thousands of students and professionals,
                                including managers and executives. They've
                                given our mentors an impressive average
                                rating of 4.9 out of 5.
                            </p>
                            <button className=' rounded-md flex  px-2 mt-2 py-2 bg-white hover:font-bold  hover:bg-gray-200 hover:tracking-wide transition-all' >Explore More About Us</button>
                        </div>
                        <div>
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full py-5 md:w-1/2 lg:w-1/3 md:px-5">
                                    <div class="px-6 py-8 bg-white rounded shadow ">
                                        <div class="flex items-center mb-4">
                                            <img class="object-cover w-16 h-16 rounded-full"
                                                src="https://i.postimg.cc/bNyr5cJq/pexels-anastasia-shuraeva-5704720.jpg" alt="" />
                                            <div class="pl-4">
                                                <p class="text-xl font-bold ">Arjun Sharma </p>
                                                <p class="font-medium text-blue-600 ">DTU - BTech</p>
                                            </div>
                                        </div>
                                        <p class="mb-4 leading-loose text-gray-500 ">
                                            
Kudos to Jain Consultancy for guiding me to DTU! Their personalized support was key to my successful admission. Highly recommend their services for aspiring students.
                                        </p>
                                        
                                    </div>
                                </div>
                                <div class="w-full py-5 md:w-1/2 lg:w-1/3 md:px-5">
                                    <div class="px-6 py-8 bg-white rounded shadow ">
                                        <div class="flex items-center mb-4">
                                            <img class="object-cover w-16 h-16 rounded-full"
                                                src="https://i.postimg.cc/q7pv50zT/pexels-edmond-dant-s-4342352.jpg" alt="" />
                                            <div class="pl-4">
                                                <p class="text-xl font-bold ">Aisha Kapoor</p>
                                                <p class="font-medium text-blue-600 ">AIIMS Rishikesh - MBBS</p>
                                            </div>
                                        </div>
                                        <p class="mb-4 leading-loose text-gray-500 ">
                                        Thanks to Jain Consultancy, I'm now at AIIMS Rishikesh! Their guidance was crucial, and I highly recommend their services for aspiring medical students. 
                                        </p>
                                        
                                    </div>
                                </div>
                                <div class="w-full py-5 md:w-1/2 lg:w-1/3 md:px-5">
                                    <div class="px-6 py-8 bg-white rounded shadow ">
                                        <div class="flex items-center mb-4">
                                            <img class="object-cover w-16 h-16 rounded-full"
                                                src="https://i.postimg.cc/05hmHMx1/pexels-emmy-e-2381069.jpg" alt="" />
                                            <div class="pl-4">
                                                <p class="text-xl font-bold ">Siddharth Malhotra </p>
                                                <p class="font-medium text-blue-600 ">VIT Vellore - BTech</p>
                                            </div>
                                        </div>
                                        <p class="mb-4 leading-loose text-gray-500 ">
                                            
Thanks to Jain Consultancy, I'm now at VIT Vellore! Their support was key to my admission success. Highly recommend for aspiring engineering students.
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full py-5 md:w-1/2 lg:w-1/3 md:px-5">
                                    <div class="px-6 py-8 bg-white rounded shadow ">
                                        <div class="flex items-center mb-4">
                                            <img class="object-cover w-16 h-16 rounded-full"
                                                src="https://i.postimg.cc/bNyr5cJq/pexels-anastasia-shuraeva-5704720.jpg" alt="" />
                                            <div class="pl-4">
                                                <p class="text-xl font-bold ">Nandini VermaM </p>
                                                <p class="font-medium text-blue-600 ">NMIMS - MBA</p>
                                            </div>
                                        </div>
                                        <p class="mb-4 leading-loose text-gray-500 ">
                                        Thanks to Jain Consultancy, I'm now pursuing MBA at NMIMS! Their guidance was crucial for my admission success. Highly recommend .
                                        </p>
                                        
                                    </div>
                                </div>
                                <div class="w-full py-5 md:w-1/2 lg:w-1/3 md:px-5">
                                    <div class="px-6 py-8 bg-white rounded shadow ">
                                        <div class="flex items-center mb-4">
                                            <img class="object-cover w-16 h-16 rounded-full"
                                                src="https://i.postimg.cc/q7pv50zT/pexels-edmond-dant-s-4342352.jpg" alt="" />
                                            <div class="pl-4">
                                                <p class="text-xl font-bold ">Ananya Singhania </p>
                                                <p class="font-medium text-blue-600 ">DU SRCC</p>
                                            </div>
                                        </div>
                                        <p class="mb-4 leading-loose text-gray-500 ">
                                            
A huge shout-out to Jain Consultancy for steering me towards DU SRCC! Their personalized guidance and support were instrumental in securing my admission. 
                                        </p>
                                        
                                    </div>
                                </div>
                                <div class="w-full py-5 md:w-1/2 lg:w-1/3 md:px-5">
                                    <div class="px-6 py-8 bg-white rounded shadow ">
                                        <div class="flex items-center mb-4">
                                            <img class="object-cover w-16 h-16 rounded-full"
                                                src="https://i.postimg.cc/05hmHMx1/pexels-emmy-e-2381069.jpg" alt="" />
                                            <div class="pl-4">
                                                <p class="text-xl font-bold ">Siddharth Malhotra</p>
                                                <p class="font-medium text-blue-600 ">BITS - Btech
</p>
                                            </div>
                                        </div>
                                        <p class="mb-4 leading-loose text-gray-500 ">
                                            
Big thanks to Jain Consultancy for guiding my path to BITS for BTech! Their personalized support and expertise were instrumental in my admission success.
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </section>
                <Faqs />

            </div>
        </>
    )
}
