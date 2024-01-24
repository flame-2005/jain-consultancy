import Image from 'next/image'
import { Inter } from 'next/font/google'
import Faqs from './components/Faqs'
import Form from './components/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <div>
                <div>
                    <section class=" relative overflow-hidden mt-10">
                        <div class="relative flex items-center justify-center w-full text-center bg-center bg-cover"
                        >
                            <div class="">
                                <div class="z-10 max-w-8xl">
                                    <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1705211261/Polygon_4_dfcfhw.png" className='absolute -z-10 right-10' alt="" />
                                    <div class="text-center max-w-5xl">
                                        <h2 class="py-5 typewriter text-2xl font-bold leading-10 tracking-tight md:text-6xl ">
                                            Empowering Your Child's Future 
                                            
                                        </h2>
                                        <h2 class="py-5 typewriter2 text-2xl font-bold leading-10 tracking-tight md:text-6xl ">
                                        Navigating College Choices 
                                            
                                        </h2>
                                        
                                        {/* <br className='my-5'/> Navigating College Choices */}

                                        <div class="flex flex-wrap justify-center items-center md:mt-20">
                                            <div className="lg:block flex ">
                                                <a
                                                    href="#"
                                                    className="inline-block h-fit px-4 py-3 mr-2 text-xs font-semibold leading-none text-gray-100 bg-blue-800 border border-blue-200 rounded hover:border-blue-400 hover:bg-blue-400"
                                                >
                                                    Book a free consultancy
                                                </a>
                                                <a
                                                    href="#"
                                                    className="inline-block h-fit px-4 py-3 mr-2 text-xs font-semibold leading-none text-blue-600 border border-blue-400 rounded hover:border-blue-300"
                                                >
                                                    Learn more about us
                                                </a>


                                            </div>
                                            <img className='w-0 md:w-fit' src="https://res.cloudinary.com/dtyombve3/image/upload/v1705211369/Polygon_5_jbgz57.png" alt="" />

                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>

                    </section>
                <Form/>

                    <section class="flex items-center bg-stone-100 font-poppins">
                        <div class="justify-center flex-1 py-6 mx-auto max-w-8xl overflow-hidden lg:py-4">
                            <div class="text-center mb-14">
                                <span
                                    class="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase ">
                                    Team
                                </span>
                                <h1 class="text-3xl font-bold capitalize "> Meet Our Wonderful Team </h1>
                            </div>
                            <div class="flex flex-wrap justify-center ">

                                <div class="w-full border-black p-2 rounded-xl shadow-xl px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0">
                                    <div class="mx-auto text-center ">
                                        <div
                                            class="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-700 rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://i.postimg.cc/q7pv50zT/pexels-edmond-dant-s-4342352.jpg" alt="" />
                                        </div>
                                        <h2 class="mb-2 text-xl font-semibold text-gray-800 ">Shree Kimson</h2>
                                        <span class="inline-block mb-6 text-base font-medium text-blue-500 ">Manager
                                        </span>
                                        <div class="flex items-center justify-center">
                                            <a class="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 text-blue-800 bi bi-facebook " viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                            </a>
                                            <a class="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 text-blue-500  bi bi-twitter" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </a>
                                            <a class="inline-block text-coolGray-300 hover:text-coolGray-400" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 text-pink-600  bi bi-instagram"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full border-black p-2 rounded-xl shadow-xl px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0">
                                    <div class="mx-auto text-center ">
                                        <div
                                            class="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-700 rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://i.postimg.cc/q7pv50zT/pexels-edmond-dant-s-4342352.jpg" alt="" />
                                        </div>
                                        <h2 class="mb-2 text-xl font-semibold text-gray-800 ">Shree Kimson</h2>
                                        <span class="inline-block mb-6 text-base font-medium text-blue-500 ">Manager
                                        </span>
                                        <div class="flex items-center justify-center">
                                            <a class="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 text-blue-800 bi bi-facebook " viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                            </a>
                                            <a class="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 text-blue-500  bi bi-twitter" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </a>
                                            <a class="inline-block text-coolGray-300 hover:text-coolGray-400" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 text-pink-600  bi bi-instagram"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full border-black p-2 rounded-xl shadow-xl px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0">
                                    <div class="mx-auto text-center ">
                                        <div
                                            class="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-700 rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://i.postimg.cc/q7pv50zT/pexels-edmond-dant-s-4342352.jpg" alt="" />
                                        </div>
                                        <h2 class="mb-2 text-xl font-semibold text-gray-800 ">Shree Kimson</h2>
                                        <span class="inline-block mb-6 text-base font-medium text-blue-500 ">Manager
                                        </span>
                                        <div class="flex items-center justify-center">
                                            <a class="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 text-blue-800 bi bi-facebook " viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                            </a>
                                            <a class="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 text-blue-500  bi bi-twitter" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </a>
                                            <a class="inline-block text-coolGray-300 hover:text-coolGray-400" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 text-pink-600  bi bi-instagram"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full border-black p-2 rounded-xl shadow-xl px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0">
                                    <div class="mx-auto text-center ">
                                        <div
                                            class="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-700 rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://i.postimg.cc/05hmHMx1/pexels-emmy-e-2381069.jpg" alt="" />
                                        </div>
                                        <h2 class="mb-2 text-xl font-semibold text-gray-800 ">Harry limbia</h2>
                                        <span class="inline-block mb-6 text-base font-medium text-blue-500 ">Founder
                                            &amp; CEO</span>
                                        <div class="flex items-center justify-center">
                                            <a class="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 text-blue-800 bi bi-facebook " viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                            </a>
                                            <a class="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 text-blue-500  bi bi-twitter" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </a>
                                            <a class="inline-block text-coolGray-300 hover:text-coolGray-400" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 text-pink-600  bi bi-instagram"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full border-black p-2 rounded-xl shadow-xl px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0">
                                    <div class="mx-auto text-center ">
                                        <div
                                            class="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-700 rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://i.postimg.cc/bNyr5cJq/pexels-anastasia-shuraeva-5704720.jpg" alt="" />
                                        </div>
                                        <h2 class="mb-2 text-xl font-semibold text-gray-800 ">Saleena Robinson</h2>
                                        <span
                                            class="inline-block mb-6 text-base font-medium text-blue-500 ">Photographer
                                        </span>
                                        <div class="flex items-center justify-center">
                                            <a class="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 text-blue-800 bi bi-facebook " viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                            </a>
                                            <a class="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 text-blue-500  bi bi-twitter" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </a>
                                            <a class="inline-block text-coolGray-300 hover:text-coolGray-400" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 text-pink-600  bi bi-instagram"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* 2nd page */}
                    <h1></h1>
                    <section class="flex items-center font-poppins ">
                        <div class="justify-center  px-4 py-4 mx-auto lg:py-0">
                            <div className='flex w-full'>

                                <h1 className='text-4xl mb-5 font-bold w-1/2'>Our Collages</h1>
                                <div className='w-1/2 flex justify-end'>

                                    <img className='' src="https://res.cloudinary.com/dtyombve3/image/upload/v1705211369/Polygon_5_jbgz57.png" alt="" />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                                <div class="bg-white rounded-2xl shadow-2xl overflow-hidden ">
                                    <a href="#" class=""><img src="https://i.postimg.cc/904JVBhh/pexels-andrea-piacquadio-840996.jpg"
                                        alt="" class="object-cover w-full h-64 rounded-t-lg" /></a>
                                    <div class="p-5">
                                        <a href="#" class="">
                                            <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-700 ">Lorem
                                                ipsum dor ismudsa suditdsas</h2>
                                        </a>
                                        <ul className='list-disc'>
                                            <li>Item 1</li>
                                            <li>Item 2</li>
                                            <li>Item 3</li>
                                        </ul>

                                    </div>
                                    <div className='w-full flex border-2'>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-gray-200  hover:bg-gray-100-700 hover:tracking-wide transition-all'>Buy Now</button>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-blue-800 text-white hover:bg-blue-700 hover:tracking-wide transition-all'>Explore</button>
                                    </div>
                                </div>
                                <div class="bg-white rounded-2xl shadow-2xl overflow-hidden  ">
                                    <a href="#" class=""><img src="https://i.postimg.cc/fW3hVdhv/pexels-rodnae-productions-7648047.jpg"
                                        alt="" class="object-cover w-full h-64 rounded-t-lg" /></a>
                                    <div class="p-5">
                                        <a href="#" class="">
                                            <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-700 ">Lorem
                                                ipsum dor ismudsa suditdsas</h2>
                                        </a>
                                        <ul className='list-disc'>
                                            <li>Item 1</li>
                                            <li>Item 2</li>
                                            <li>Item 3</li>
                                        </ul>

                                    </div>
                                    <div className='w-full flex border-2'>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-gray-200  hover:bg-gray-100-700 hover:tracking-wide transition-all'>Buy Now</button>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-blue-800 text-white hover:bg-blue-700 hover:tracking-wide transition-all'>Explore</button>
                                    </div>
                                </div>
                                <div class="bg-white rounded-2xl shadow-2xl overflow-hidden ">
                                    <a href="#" class=""><img src="https://i.postimg.cc/pdZ0BTZg/pexels-cowomen-2041627.jpg" alt=""
                                        class="object-cover w-full h-64 rounded-t-lg" /></a>
                                    <div class="p-5">
                                        <a href="#" class="">
                                            <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-700 ">Lorem
                                                ipsum dor ismudsa suditdsas</h2>
                                        </a>
                                        <ul className='list-disc'>
                                            <li>Item 1</li>
                                            <li>Item 2</li>
                                            <li>Item 3</li>
                                        </ul>
                                    </div>
                                    <div className='w-full flex border-2'>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-gray-200  hover:bg-gray-100-700 hover:tracking-wide transition-all'>Buy Now</button>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-blue-800 text-white hover:bg-blue-700 hover:tracking-wide transition-all'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="flex items-center mt-10 font-poppins ">
                        <div class="justify-center  px-4 py-4 mx-auto lg:py-0">
                            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                                <div class="bg-white rounded-2xl shadow-2xl overflow-hidden ">
                                    <a href="#" class=""><img src="https://i.postimg.cc/904JVBhh/pexels-andrea-piacquadio-840996.jpg"
                                        alt="" class="object-cover w-full h-64 rounded-t-lg" /></a>
                                    <div class="p-5">
                                        <a href="#" class="">
                                            <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-700 ">Lorem
                                                ipsum dor ismudsa suditdsas</h2>
                                        </a>
                                        <ul className='list-disc'>
                                            <li>Item 1</li>
                                            <li>Item 2</li>
                                            <li>Item 3</li>
                                        </ul>

                                    </div>
                                    <div className='w-full flex border-2'>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-gray-200  hover:bg-gray-100-700 hover:tracking-wide transition-all'>Buy Now</button>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-blue-800 text-white hover:bg-blue-700 hover:tracking-wide transition-all'>Explore</button>
                                    </div>
                                </div>
                                <div class="bg-white rounded-2xl shadow-2xl overflow-hidden ">
                                    <a href="#" class=""><img src="https://i.postimg.cc/904JVBhh/pexels-andrea-piacquadio-840996.jpg"
                                        alt="" class="object-cover w-full h-64 rounded-t-lg" /></a>
                                    <div class="p-5">
                                        <a href="#" class="">
                                            <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-700 ">Lorem
                                                ipsum dor ismudsa suditdsas</h2>
                                        </a>
                                        <ul className='list-disc'>
                                            <li>Item 1</li>
                                            <li>Item 2</li>
                                            <li>Item 3</li>
                                        </ul>

                                    </div>
                                    <div className='w-full flex border-2'>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-gray-200  hover:bg-gray-100-700 hover:tracking-wide transition-all'>Buy Now</button>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-blue-800 text-white hover:bg-blue-700 hover:tracking-wide transition-all'>Explore</button>
                                    </div>
                                </div>
                                <div class="bg-white rounded-2xl overflow-hidden ">
                                    <a href="#" class=""><img src="https://i.postimg.cc/904JVBhh/pexels-andrea-piacquadio-840996.jpg"
                                        alt="" class="object-cover w-full h-64 rounded-t-lg" /></a>
                                    <div class="p-5">
                                        <a href="#" class="">
                                            <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-700 ">Lorem
                                                ipsum dor ismudsa suditdsas</h2>
                                        </a>
                                        <ul className='list-disc'>
                                            <li>Item 1</li>
                                            <li>Item 2</li>
                                            <li>Item 3</li>
                                        </ul>

                                    </div>
                                    <div className='w-full flex border-2'>
                                        <button className='flex items-center justify-center w-1/2 py-2 bg-gray-200  hover:bg-gray-100-700 hover:tracking-wide transition-all'>Buy Now</button>
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
                <section class="flex items-center bg-gray-50 lg:h-screen font-poppins">
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
                                            Lorem ipsum</span>
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

                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae neque ullam temporibus! Officiis praesentium tempora unde quisquam, iusto blanditiis fugiat placeat, rem molestias illo, porro dicta alias tempore. Placeat accusantium corporis ut aut est quasi autem nostrum accusamus eveniet impedit! Provident sit, voluptate ipsam illo repellat nam animi ipsum in.
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
                                    Your Path to the Perfect College
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
                                                                        Understanding the student’s
                                                                        aspirations and academic
                                                                        record.
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
                                                                            Presenting a list of suitable colleges.
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
                                                                        Presenting a list of suitable
                                                                        colleges.
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
                                                                            Ongoing Support
                                                                        </p>
                                                                        <p className=' text-white'>
                                                                            Continuous support until college
                                                                            admission.
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
                                            <p class="text-xl font-bold ">Davina becham </p>
                                            <p class="font-medium text-blue-600 ">Supervisor</p>
                                        </div>
                                    </div>
                                    <p class="mb-4 leading-loose text-gray-500 ">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam
                                    </p>
                                    <div class="flex items-center justify-start">
                                        <a class="inline-block mr-5 text-blue-800  hover:text-blue-600" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-facebook " viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </a>
                                        <a class="inline-block mr-5 text-blue-500  hover:text-blue-400" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-twitter" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </a>
                                        <a class="inline-block text-pink-600  hover:text-pink-500" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-instagram" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full py-5 md:w-1/2 lg:w-1/3 md:px-5">
                                <div class="px-6 py-8 bg-white rounded shadow ">
                                    <div class="flex items-center mb-4">
                                        <img class="object-cover w-16 h-16 rounded-full"
                                            src="https://i.postimg.cc/q7pv50zT/pexels-edmond-dant-s-4342352.jpg" alt="" />
                                        <div class="pl-4">
                                            <p class="text-xl font-bold ">Amit simon </p>
                                            <p class="font-medium text-blue-600 ">Manager</p>
                                        </div>
                                    </div>
                                    <p class="mb-4 leading-loose text-gray-500 ">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam
                                    </p>
                                    <div class="flex items-center justify-start">
                                        <a class="inline-block mr-5 text-blue-800  hover:text-blue-600" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-facebook " viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </a>
                                        <a class="inline-block mr-5 text-blue-500  hover:text-blue-400" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-twitter" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </a>
                                        <a class="inline-block text-pink-600  hover:text-pink-500" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-instagram" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full py-5 md:w-1/2 lg:w-1/3 md:px-5">
                                <div class="px-6 py-8 bg-white rounded shadow ">
                                    <div class="flex items-center mb-4">
                                        <img class="object-cover w-16 h-16 rounded-full"
                                            src="https://i.postimg.cc/05hmHMx1/pexels-emmy-e-2381069.jpg" alt="" />
                                        <div class="pl-4">
                                            <p class="text-xl font-bold ">Riyana ismith </p>
                                            <p class="font-medium text-blue-600 ">Team Leader</p>
                                        </div>
                                    </div>
                                    <p class="mb-4 leading-loose text-gray-500 ">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam
                                    </p>
                                    <div class="flex items-center justify-start">
                                        <a class="inline-block mr-5 text-blue-800  hover:text-blue-600" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-facebook " viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </a>
                                        <a class="inline-block mr-5 text-blue-500  hover:text-blue-400" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-twitter" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </a>
                                        <a class="inline-block text-pink-600  hover:text-pink-500" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-instagram" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </a>
                                    </div>
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
                                            <p class="text-xl font-bold ">Davina becham </p>
                                            <p class="font-medium text-blue-600 ">Supervisor</p>
                                        </div>
                                    </div>
                                    <p class="mb-4 leading-loose text-gray-500 ">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam
                                    </p>
                                    <div class="flex items-center justify-start">
                                        <a class="inline-block mr-5 text-blue-800  hover:text-blue-600" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-facebook " viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </a>
                                        <a class="inline-block mr-5 text-blue-500  hover:text-blue-400" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-twitter" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </a>
                                        <a class="inline-block text-pink-600  hover:text-pink-500" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-instagram" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full py-5 md:w-1/2 lg:w-1/3 md:px-5">
                                <div class="px-6 py-8 bg-white rounded shadow ">
                                    <div class="flex items-center mb-4">
                                        <img class="object-cover w-16 h-16 rounded-full"
                                            src="https://i.postimg.cc/q7pv50zT/pexels-edmond-dant-s-4342352.jpg" alt="" />
                                        <div class="pl-4">
                                            <p class="text-xl font-bold ">Amit simon </p>
                                            <p class="font-medium text-blue-600 ">Manager</p>
                                        </div>
                                    </div>
                                    <p class="mb-4 leading-loose text-gray-500 ">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam
                                    </p>
                                    <div class="flex items-center justify-start">
                                        <a class="inline-block mr-5 text-blue-800  hover:text-blue-600" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-facebook " viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </a>
                                        <a class="inline-block mr-5 text-blue-500  hover:text-blue-400" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-twitter" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </a>
                                        <a class="inline-block text-pink-600  hover:text-pink-500" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-instagram" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full py-5 md:w-1/2 lg:w-1/3 md:px-5">
                                <div class="px-6 py-8 bg-white rounded shadow ">
                                    <div class="flex items-center mb-4">
                                        <img class="object-cover w-16 h-16 rounded-full"
                                            src="https://i.postimg.cc/05hmHMx1/pexels-emmy-e-2381069.jpg" alt="" />
                                        <div class="pl-4">
                                            <p class="text-xl font-bold ">Riyana ismith </p>
                                            <p class="font-medium text-blue-600 ">Team Leader</p>
                                        </div>
                                    </div>
                                    <p class="mb-4 leading-loose text-gray-500 ">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam
                                    </p>
                                    <div class="flex items-center justify-start">
                                        <a class="inline-block mr-5 text-blue-800  hover:text-blue-600" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-facebook " viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </a>
                                        <a class="inline-block mr-5 text-blue-500  hover:text-blue-400" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-twitter" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </a>
                                        <a class="inline-block text-pink-600  hover:text-pink-500" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-instagram" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        </div>
                        
                        
                    </div>
                   
                </section>
                <Faqs/>
                
            </div>
        </>
    )
}
