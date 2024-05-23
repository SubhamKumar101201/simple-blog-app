import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    const image_url = "data:image/png;base64,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"
    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto p-6">
                {/* Hero Section */}
                <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://via.placeholder.com')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
                        <h1 className="text-5xl font-bold mb-4">About Us</h1>
                        <p className="text-xl">Discover our journey, mission, and the team behind AuthenticBlog</p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-lg mb-6">
                        Welcome to AuthenticBlog, your number one source for insightful articles and thought-provoking content. We're dedicated to providing you the very best of blogging, with an emphasis on quality, reliability, and community engagement.
                    </p>
                </div>

                {/* Our Story Section */}
                <div className="my-12">
                    <h2 className="text-4xl font-semibold mb-6 text-center">Our Story</h2>
                    <p className="text-lg mb-6 text-center">
                        Founded in 2020, AuthenticBlog has come a long way from its beginnings in a small home office. When our founder, Subham Kumar, first started out, his passion for sharing knowledge and connecting people drove him to create this platform.
                    </p>
                </div>

                {/* Features Section */}
                <div className="my-12">
                    <h2 className="text-4xl font-semibold mb-6 text-center">Why Choose Us</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="bg-white shadow-md rounded-lg p-6 max-w-xs">
                            <h3 className="text-2xl font-semibold mb-4">Quality Content</h3>
                            <p className="text-lg">We provide well-researched and engaging articles to keep you informed and entertained.</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 max-w-xs">
                            <h3 className="text-2xl font-semibold mb-4">Community Focus</h3>
                            <p className="text-lg">Our platform encourages community interaction and engagement through comments and forums.</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 max-w-xs">
                            <h3 className="text-2xl font-semibold mb-4">User-Friendly Design</h3>
                            <p className="text-lg">Our intuitive interface makes it easy for users of all ages to navigate and enjoy our content.</p>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="my-12">
                    <h2 className="text-4xl font-semibold mb-6 text-center">Our Mission</h2>
                    <p className="text-lg mb-6 text-center">
                        We believe in the transformative power of sharing knowledge and ideas. Our mission is to connect people through engaging and insightful content, fostering a community of curious and informed individuals.
                    </p>
                </div>

                {/* Meet the Team Section */}
                <div className="my-12">
                    <h2 className="text-4xl font-semibold mb-6 text-center">Meet the Team</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Team Member 1 */}
                        <div className="bg-white shadow-md rounded-lg p-6 max-w-xs text-center">
                            <img className="w-32 h-32 mx-auto rounded-full mb-4" src={image_url} alt="Subham Kumar" />
                            <h3 className="text-2xl font-semibold mb-2">Subham Kumar</h3>
                            <p className="text-lg">Founder & CEO</p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="bg-white shadow-md rounded-lg p-6 max-w-xs text-center">
                            <img className="w-32 h-32 mx-auto rounded-full mb-4" src={image_url} alt="John Smith" />
                            <h3 className="text-2xl font-semibold mb-2">John Smith</h3>
                            <p className="text-lg">Lead Content Creator</p>
                        </div>
                        {/* Team Member 3 */}
                        <div className="bg-white shadow-md rounded-lg p-6 max-w-xs text-center">
                            <img className="w-32 h-32 mx-auto rounded-full mb-4" src={image_url} alt="Emily Johnson" />
                            <h3 className="text-2xl font-semibold mb-2">Emily Johnson</h3>
                            <p className="text-lg">Community Manager</p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="my-12">
                    <h2 className="text-4xl font-semibold mb-6 text-center">Contact Us</h2>
                    <p className="text-lg mb-6 text-center">
                        If you have any questions or comments, please don't hesitate to contact us at support@authenticblog.com.
                    </p>
                </div>

                {/* Thank You Section */}
                <div className="my-12 text-center">
                    <h2 className="text-4xl font-semibold mb-6">Thank You</h2>
                    <p className="text-lg mb-6">
                        We hope you enjoy our blog as much as we enjoy offering it to you. If you have any questions or feedback, please feel free to reach out to us. We're always here to help!
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
