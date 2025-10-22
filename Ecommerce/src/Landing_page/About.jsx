import React from 'react'

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    image: 'https://via.placeholder.com/200',
    bio: 'Jane is passionate about creating high-quality products that bring joy to customers.'
  },
  {
    name: 'John Smith',
    role: 'Head of Design',
    image: 'https://via.placeholder.com/200',
    bio: 'John has a keen eye for detail and is the creative force behind our brand\'s aesthetic.'
  },
  {
    name: 'Emily White',
    role: 'Lead Developer',
    image: 'https://via.placeholder.com/200',
    bio: 'Emily loves coding and building seamless user experiences for our customers.'
  },
];

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        {/* --- Header Section --- */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Our Company</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team dedicated to bringing you the best products with exceptional service. Learn more about our story and the people behind the brand.
          </p>
        </div>

        {/* --- Our Story Section --- */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in 2023, Ecommerce started with a simple idea: to make high-quality, stylish products accessible to everyone. What began in a small garage has grown into a thriving online store, but our core values remain the same.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in craftsmanship, customer satisfaction, and a commitment to sustainability. Every product we offer is a testament to our dedication to quality and design.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="https://via.placeholder.com/500x350" alt="Our Team" className="rounded-lg shadow-md w-full" />
          </div>
        </div>

        {/* --- Meet The Team Section --- */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Meet The Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-100"
                />
                <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
