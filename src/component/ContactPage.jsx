import React from 'react'

const ContactPage = () => {
    return (
        <>
            <div class="contact-info ani1">
                <h1 className='text-4xl font-bold mb-5'>Contact Us</h1>
                <p className='mr-10 ml-10 lg:mr-32 lg:ml-32 text-sm'>If you have any questions or need further information, please contact us through the form
                    below or reach out directly via email or phone.</p>

                <div className='flex flex-col md:flex-row  gap-5 text-sm my-3 justify-center'>
                    <p><strong className='text-sm'>Email:</strong> rohitkrsah27@example.com</p>
                    <p><strong className='text-sm'>Phone:</strong> +91-9383002793</p>
                    <p><strong className='text-sm'>Address:</strong> Dirang, Arunachal Pradesh, 790101</p>
                </div>
            </div>





            <div className="break-line"></div>


            <div className="min-h-screen flex items-center justify-center p-6 ani2">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Form</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                placeholder="Your Message"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>


        </>
    )
}

export default ContactPage
