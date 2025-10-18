import React from 'react'
import Card from './Card';

const About = () => {
  return (
    <div className="space-y-12">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">About Our Application</h1>
        <p className="mt-4 text-lg text-gray-600">We are a team dedicated to building high-quality, user-friendly web applications.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card title="Our Mission">
          <p>
            To provide the best user experience by creating intuitive and beautiful web interfaces. We believe in the power of good design and clean code.
          </p>
        </Card>
        <Card title="Our Vision">
          <p>
            To become a leading innovator in web technology, making complex solutions simple and accessible for businesses and users worldwide.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default About
