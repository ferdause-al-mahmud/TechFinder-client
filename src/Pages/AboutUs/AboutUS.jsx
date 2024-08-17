import { FaMobileAlt, FaUsers, FaAward, FaHandsHelping } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                {/* Heading Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Welcome to MobileMart, your one-stop shop for the latest mobile phones.
                    </p>
                </div>

                {/* Mission and Vision Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-600">
                            To provide cutting-edge mobile technology at affordable prices, ensuring access to the latest innovations for everyone.
                        </p>
                    </div>
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                        <p className="text-gray-600">
                            We aim to become the leading mobile phone retailer, renowned for our exceptional service and unbeatable selection.
                        </p>
                    </div>
                </div>

                {/* Core Values Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    {/* Customer Focus */}
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <FaUsers className="mx-auto text-4xl text-indigo-500 mb-4" />
                        <h3 className="text-xl font-semibold">Customer Focus</h3>
                        <p className="text-gray-600 mt-2">
                            We prioritize our customers, ensuring their satisfaction at every stage of the journey.
                        </p>
                    </div>
                    {/* Innovation */}
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <FaMobileAlt className="mx-auto text-4xl text-indigo-500 mb-4" />
                        <h3 className="text-xl font-semibold">Innovation</h3>
                        <p className="text-gray-600 mt-2">
                            Staying ahead with the latest in mobile technology and offering cutting-edge products.
                        </p>
                    </div>
                    {/* Excellence */}
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <FaAward className="mx-auto text-4xl text-indigo-500 mb-4" />
                        <h3 className="text-xl font-semibold">Excellence</h3>
                        <p className="text-gray-600 mt-2">
                            Striving for excellence in every product and service we provide to our customers.
                        </p>
                    </div>
                    {/* Integrity */}
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <FaHandsHelping className="mx-auto text-4xl text-indigo-500 mb-4" />
                        <h3 className="text-xl font-semibold">Integrity</h3>
                        <p className="text-gray-600 mt-2">
                            Upholding honesty and transparency in all of our business operations.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="text-center mt-6 mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                    <div className=" w-full bg-white p-6 shadow-lg rounded-lg">
                        <img
                            className="w-24 h-24 rounded-full mx-auto"
                            alt="Team Member 1"
                            src='https://i.postimg.cc/wBDWFkLr/9720027.jpg'
                        />
                        <h3 className="text-xl font-semibold mt-4">John Doe</h3>
                        <p className="text-gray-600">CEO & Founder</p>
                    </div>
                    <div className=" w-full bg-white p-6 shadow-lg rounded-lg">
                        <img
                            className="w-24 h-24 rounded-full mx-auto"

                            src="https://i.postimg.cc/8z2KhYJW/10491830.jpg"
                            alt="Team Member 2"
                        />
                        <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
                        <p className="text-gray-600">Chief Marketing Officer</p>
                    </div>
                    <div className=" w-full bg-white p-6 shadow-lg rounded-lg">
                        <img
                            className="w-24 h-24 rounded-full mx-auto"
                            src="https://i.postimg.cc/NMYdnrxj/9439678.jpg"
                            alt="Team Member 3"
                        />
                        <h3 className="text-xl font-semibold mt-4">Michael Lee</h3>
                        <p className="text-gray-600">Head of Customer Support</p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
                    <h2 className="text-3xl font-bold text-gray-800">Join Us</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Ready to explore our latest mobile phones? Shop now or get in touch with our support team for assistance.
                    </p>
                    <a
                        href="/"
                        className="inline-block mt-6 px-6 py-3 bg-indigo-500 text-white text-lg rounded-lg shadow-lg"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
