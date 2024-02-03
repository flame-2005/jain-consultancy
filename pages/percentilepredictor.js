import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';


const test = () => {
    const [open, setOpen] = useState(false);
    const jeeMainPercentiles = [
        { marksRange: '300 – 291', percentileRange: '100 – 99.99989145' },
        { marksRange: '281 – 290', percentileRange: '99.994681 – 99.999394' },
        { marksRange: '271 – 280', percentileRange: '99.994681 – 99.997394' },
        { marksRange: '263 – 270', percentileRange: '99.990990 – 99.994029' },
        { marksRange: '250 – 262', percentileRange: '99.977205 – 99.988819' },
        { marksRange: '241 – 250', percentileRange: '99.960163 – 99.975034' },
        { marksRange: '231 – 240', percentileRange: '99.934980 – 99.956364' },
        { marksRange: '221 – 230', percentileRange: '99.901113 – 99.928901' },
        { marksRange: '211 – 220', percentileRange: '99.851616 – 99.893732' },
        { marksRange: '201 – 210', percentileRange: '99.795063 – 99.845212' },
        { marksRange: '191 – 200', percentileRange: '99.710831 – 99.782472' },
        { marksRange: '181 – 190', percentileRange: '99.597399 – 99.688579' },
        { marksRange: '171 – 180', percentileRange: '99.456939 – 99.573193' },
        { marksRange: '161 – 170', percentileRange: '99.272084 – 99.431214' },
        { marksRange: '151 – 160', percentileRange: '99.028614 – 99.239737' },
        { marksRange: '141 – 150', percentileRange: '98.732389 – 98.990296' },
        { marksRange: '131 – 140', percentileRange: '98.317414 – 98.666935' },
        { marksRange: '121 – 130', percentileRange: '97.811260 – 98.254132' },
        { marksRange: '111 – 120', percentileRange: '97.142937 – 97.685672' },
        { marksRange: '101 – 110', percentileRange: '96.204550 – 96.978272' },
        { marksRange: '91 – 100', percentileRange: '94.998594 – 96.064850' },
        { marksRange: '81 – 90', percentileRange: '93.471231 – 94.749479' },
        { marksRange: '71 – 80', percentileRange: '91.072128 – 93.152971' },
        { marksRange: '61 – 70', percentileRange: '87.512225 – 90.702200' },
        { marksRange: '51 – 60', percentileRange: '82.016062 – 86.907944' },
        { marksRange: '41 – 50', percentileRange: '73.287808 – 80.982153' },
        { marksRange: '31 – 40', percentileRange: '58.151490 – 71.302052' },
        { marksRange: '21 – 30', percentileRange: '37.694529 – 56.569310' },
        { marksRange: '20 – 11', percentileRange: '13.495849 – 33.229128' },
        { marksRange: '0 – 10', percentileRange: '0.8435177 – 9.6954066' }
    ];

    const [marks, setMarks] = useState('');
    const [predictedPercentile, setPredictedPercentile] = useState(null);

    const handleMarksChange = (e) => {
        setMarks(e.target.value);
    };

    const predictPercentile = () => {
        const userMarks = parseInt(marks);

        for (const percentileData of jeeMainPercentiles) {
            const [minMarks, maxMarks] = percentileData.marksRange.split(' – ').map(Number);

            if (userMarks >= minMarks && (userMarks <= maxMarks || maxMarks === undefined)) {
                setPredictedPercentile(percentileData.percentileRange);
                return;
            }
        }

        setPredictedPercentile('Marks out of range');
    };


    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        marks: '',
        preparing_for: "",
        number: "",
        preffered_collage: '',
        message: ""

    });
    console.log(formData)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setMarks(formData.marks)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log()
        try {
            const response = await fetch('/api/Users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('User created:', data);
                setFormData({
                    name: '',
                    email: '',
                    number: '',
                    marks: '',
                    preffered_collage: '',
                    message: '',
                    preparing_for: ''
                })
                // console.log(predictedPercentile)
                // router.push('/');
                // alert({predictedPercentile})
                // Handle success, show a success message, redirect, etc.
            } else {
                console.error('Failed to create user');
                // Handle error, show an error message, etc.
            }
        } catch (error) {
            console.error('Error creating user:', error);
            // Handle error, show an error message, etc.
        }
    };
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-16 mx-auto flex flex-wrap">
                    <form className='md:flex' onSubmit={handleSubmit} method="post">
                        <div class="md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <h1 class="title-font font-medium text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">Free Consultation Available</h1>
                            <p class="leading-relaxed text-base md:text-lg">Begin with a one-on-one session to assess your child's academic profile and aspirations, setting the stage for tailored college guidance.</p>
                            <div className='flex items-center justify-center'>
                                {/* <div >
                                    <div className='mt-3'>

                                        <div className='flex mb-2'>
                                            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1705430541/Arrow---Right-Circle_bsod5k.png" className='mr-2' alt="" /><span>
                                                Next Steps Guidance
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex mb-2'>

                                        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1705430541/Arrow---Right-Circle_bsod5k.png" className='mr-2' alt="" /><span>
                                            Expert Advice
                                        </span>
                                    </div>
                                    <div className='flex'>

                                        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1705430541/Arrow---Right-Circle_bsod5k.png" className='mr-2' alt="" /><span>
                                            Custom Plan Outline
                                        </span>
                                    </div>
                                </div> */}
                                <div className='hidden md:block'>
                                <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1706700736/bg-abstract_l0amg9.png" alt="" />
                            </div>
                            </div>

                            

                        </div>
                        <div class="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-xl p-8 shadow-2xl md:ml-auto mt-10 md:mt-0">
                            <h2 class="text-gray-900 text-lg md:text-xl lg:text-2xl font-medium title-font mb-4">Book Your Free Consultancy Now!</h2>
                            <div class="flex flex-wrap -m-2">
                                <div class="p-2 w-full">
                                    <label for="full-name" class="leading-7 text-gray-600">Full Name</label>
                                    <input type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div class="p-2 w-full">
                                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="text"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div class="p-2 md:w-1/2 w-full">
                                    <label for="phone" class="leading-7 text-sm text-gray-600">Phone Number</label>
                                    <input type="text"
                                        id="number"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        required class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div class="p-2 md:w-1/2 w-full">
                                    <label for="marks" class="leading-7 text-sm text-gray-600">Marks Expecting</label>
                                    <input type="text"
                                        id="marks"
                                        name="marks"
                                        value={formData.marks}
                                        onChange={handleChange}
                                        required class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div class="p-2 w-full">
                                    <label for="preparing-for" class="leading-7 text-sm text-gray-600">Preparing For</label>
                                    <input type="text"
                                        id="preparing_for"
                                        name="preparing_for"
                                        value={formData.preparing_for}
                                        onChange={handleChange}
                                        required class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div class="p-2 w-full">
                                    <label for="preferred-college" class="leading-7 text-sm text-gray-600">Preferred College</label>
                                    <input type="text"
                                        id="preffered_collage"
                                        name="preffered_collage"
                                        value={formData.preffered_collage}
                                        onChange={handleChange}
                                        required class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div class="p-2 w-full">
                                    <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea type="text"
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none"></textarea>
                                </div>
                                <div class="p-2 w-full">
                                    {/* <button type="submit" onClick={predictPercentile} class="text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Predict my Precentile</button> */}
                                    <div className="" x-data="{ open: false }">
                                        <button
                                            type='submit'
                                            className="text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                            onClick={() => {setOpen(true),predictPercentile()}}
                                        >
                                            Predict Percentile
                                        </button>
                                        {open && (
                                            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full" style={{ backgroundColor: 'rgba(0,0,0,.5)' }}>
                                                <div className="relative mx-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl dabg-gray-900 sm:my-8 sm:max-w-lg sm:w-full">
                                                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                                        <div className="sm:flex sm:items-start">
                                                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-blue-100 rounded-full dabg-blue-400 sm:mx-0 sm:h-10 sm:w-10">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-blue-600 datext-gray-100 bi bi-exclamation-triangle" viewBox="0 0 16 16">
                                                                    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                                                                    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                                                                </svg>
                                                            </div>
                                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                                <h2 className="text-lg font-medium leading-6 text-gray-900 datext-gray-300">
                                                                    Your Predict Percentile is {predictedPercentile}
                                                                </h2>
                                                                <div className="mt-2">
                                                                    <p className="text-sm text-gray-500 datext-gray-400">
                                                                        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                        <button
                                                            onClick={() => setOpen(false)}
                                                            className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md select-none dark:hover:text-gray-50  hover:text-gray-100 focus:outline-none focus:ring-2 dark:focus:ring-0 focus:ring-offset-2 dark:focus:ring-offset-0  focus:ring-blue-600 hover:bg-blue-600"
                                                        >
                                                            Close
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <p class="text-xs text-gray-500 mt-3 w-full">Literally you probably haven't heard of them jean shorts.</p>
                            </div>
                        </div>
                    </form>
                </div>
            </section>


        </div>
    )
}

export default test
