import React, { useState } from 'react';

// ... (other imports and code)

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col justify-between w-full py-4 pl-4 pr-3 mb-3 transition-all bg-blue-900 rounded-xl shadowtransition-all duration-300">
            <div className="flex items-center justify-between cursor-pointer" onClick={toggleAnswer}>
                <span className={`font-bold text-white`}>{question}</span>
                <div className={`p-2 bg-blue-500 rounded transform rotate-${isOpen ? '0' : '180'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                    </svg>
                </div>
            </div>
            {isOpen && (
                <div className="mt-1 text-sm text-white answer">
                    {answer}
                </div>
            )}
        </div>
    );
};;

const FaqSection = () => {
    const faqData = [
        {
            question: 'What kind of support do you offer for college applications?',
            answer: 'Answer to the first question goes here.',
        },
        {
            question: 'Can you help with financial aid and scholarship applications?',
            answer: 'Answer to the second question goes here.',
        },
        {
            question: 'How experienced are your consultants?',
            answer: 'Answer to the third question goes here.',
        },
        {
            question: 'How experienced are your consultants?',
            answer: 'Answer to the fourth question goes here.',
        },
    ];

    return (
        <section className="font-poppins">
            <div className="py-24 mb-10  lg:block">
                <div className="max-w-4xl mx-auto mb-14">
                    <h1 className="mb-4 text-3xl font-bold text-center">FAQs-Frequently Asked Questions</h1>
                    <p className="text-center mb-7 mx-auto text-gray-500">
                        We tailor the college selection by analyzing each student's academics, interests, and career goals,
                        ensuring a perfect match between student aspirations and college offerings
                    </p>
                    <p className=' '>
                        How do you personalize the college selection process?
                    </p>
                    <p className="mb-2 mx-auto text-gray-400">
                        Our personalization process for college selection is thorough and student-focused. We begin by evaluating the student's academic achievements and understanding their individual interests and passions. From there, we assess their long-term career aspirations. Combining these insights, we then curate a list of colleges that align perfectly with their unique academic and career objectives, ensuring a tailored match for each student.






                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="w-full p-4 rounded-md shadow-lg bg-stone-50 -mt-36 lg:full">
                    <div className="flex-1">
                        {faqData.map((faq, index) => (
                            <FaqItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
