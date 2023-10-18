import React from 'react';

const Feature = () => {
    return (
        <div className='w-3/4 mx-auto py-8'>
            <div className='container mx-auto grid lg:grid-cols-2 gap-4 mt-6'>
                <div>
                    <h1 className='text-2xl font-bold text-[#7D0F0F] mb-2'>Discover Our Key Features:</h1>
                    <ol>
                        <li >📚 Diverse Course Catalog</li>
                        <li> 🎮 Interactive Learning</li>
                        <li> 🕒 Flexible Learning</li>
                        <li>🌍 Community Support</li>
                        <li>📈 Progress Tracking</li>
                        <li>🚀 Personalized Recommendations</li>
                        <li>🏆 Certification</li>
                    </ol>
                </div>
                <div>
                    <h1 className='text-2xl font-bold text-[#7D0F0F] mb-2 '>Why Choose Us?</h1>
                    <ol>
                        <li>🌟 Expert Instructors</li>
                        <li>🚀 Cutting-Edge Courses</li>
                        <li>🌐 Global Community</li>
                        <li>📚 Interactive Learning</li>
                        <li>🏆 Achieve Your Dreams:</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Feature;