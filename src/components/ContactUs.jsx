import contactImg from '../assets/contact.png'

const ContactUs = ({ darkMode }) => {
  return (
    <section
    id='contact'
    style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb'
    }}
    className='py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden'>

        <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

            <div className='text-center mb-8 sm:mb-10 md:mb-12'
            data-aos='fade-up'>
                <h2
                className='text-3xl sm:text-4xl font-bold mb-3'
                style={{
                    color: darkMode ? 'white' : '#1f2937'
                }}>
                    Get In<span style={{background: 'linear-gradient(to right, #f97316, #f59e0b)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}> Touch</span>
                </h2>
                <p
                className='max-w-xl mx-auto'
                style={{
                    color: darkMode ? '#d1d5db' : '#6b7280'
                }}>
                    Let's discuss your project
                </p>
            </div>

            <div
            className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8
            md:gap-10 items-center'>
                <div
                className='flex justify-center order-2 lg:oredr-1'
                data-aos='fade-right'>
                    <img
                    src={contactImg}
                    alt='Contact'
                    className='w-full max-w-xs sm:max-w-sm lg:max-w-md
                    h-auto object-contain' />
                </div>

                <form
                style={{
                    background: darkMode
                    ? 'linear-gradient(to right, #1f2937, #111827'
                    : 'linear-gradient(to right, #ffffff, #f9fafb',
                    borderColor: darkMode ? '#374151' : '#e5e7eb'
                }}
                className='rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border
                shadow-lg order-1 lg:order-2'
                data-aos='fade-left'>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3
                    sm:gap-4 mb-3 sm:mb-4'>

                        {/* First Name */}
                        <input
                        type='text'
                        placeholder='First Name'
                        style={{
                            backgroundColor: darkMode ? '#374151' : '#faede3',
                            borderColor: darkMode ? '#4b5563' : '#d1d5db',
                            color: darkMode ? 'white' : '#1f2937'
                        }}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
                        text-sm sm:text-base focus:border-orange-500 focus:ring-2
                        focus:ring-orange-500/20 transition-all' required/>

                        {/* Last Name */}
                        <input
                        type='text'
                        placeholder='Last Name'
                        style={{
                            backgroundColor: darkMode ? '#374151' : '#faede3',
                            borderColor: darkMode ? '#4b5563' : '#d1d5db',
                            color: darkMode ? 'white' : '#1f2937'
                        }}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
                        text-sm sm:text-base focus:border-orange-500 focus:ring-2
                        focus:ring-orange-500/20 transition-all' required/>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3
                    sm:gap-4 mb-3 sm:mb-4'>

                        {/* Email */}
                        <input
                        type='email'
                        placeholder='Email Addres'
                        style={{
                            backgroundColor: darkMode ? '#374151' : '#faede3',
                            borderColor: darkMode ? '#4b5563' : '#d1d5db',
                            color: darkMode ? 'white' : '#1f2937'
                        }}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
                        text-sm sm:text-base focus:border-orange-500 focus:ring-2
                        focus:ring-orange-500/20 transition-all' required/>

                        {/* Contact */}
                        <input
                        type='text'
                        placeholder='Contact Number'
                        style={{
                            backgroundColor: darkMode ? '#374151' : '#faede3',
                            borderColor: darkMode ? '#4b5563' : '#d1d5db',
                            color: darkMode ? 'white' : '#1f2937'
                        }}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
                        text-sm sm:text-base focus:border-orange-500 focus:ring-2
                        focus:ring-orange-500/20 transition-all' required/>
                    </div>

                    {/* Message */}
                    <textarea
                        rows='4'
                        placeholder='Your Message'
                        style={{
                            backgroundColor: darkMode ? '#374151' : '#faede3',
                            borderColor: darkMode ? '#4b5563' : '#d1d5db',
                            color: darkMode ? 'white' : '#1f2937'
                        }}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
                        text-sm sm:text-base focus:border-orange-500 focus:ring-2
                        focus:ring-orange-500/20 transition-all resize-none' required/>

                        <button
                        type='submit'
                        style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)'
                        }}
                        className='w-full py-2 sm:py-3 text-white font-semibold
                        rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25
                        hover:scale-[1.02] transition-all mt-5'>
                            Send Message
                        </button>

                </form>
            </div>

        </div>

    </section>
  )
}

export default ContactUs