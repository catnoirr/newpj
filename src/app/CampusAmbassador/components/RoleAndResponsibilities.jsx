import React from 'react';

const RoleAndResponsibilities = () => {
  return (
    <section className="px-6 py-8 bg-gray-50">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-semibold text-indigo-600">Role & Responsibilities</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
        <div className="flex-1">
          <img
            src="path/to/your/image.jpg"
            alt="Meeting illustration"
            className="w-full max-w-sm mx-auto md:max-w-none md:mx-0"
          />
        </div>
        <div className="flex-1 mt-6 md:mt-0 md:ml-8">
          <h3 className="text-2xl font-bold mb-2">Choose us for your digital journey</h3>
          <p className="text-gray-600 mb-4">
            Our commitment to excellence, expertise in cutting-edge technologies, and dedication to client.
          </p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 mb-4">
            Explore our projects
          </button>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
            <li>✓ Tailored Solutions</li>
            <li>✓ Client-Centric Approach</li>
            <li>✓ Proven Track Record</li>
            <li>✓ Scalability</li>
            <li>✓ Quality Assurance</li>
            <li>✓ Cost-Effectiveness</li>
            <li>✓ Long-Term Partnership</li>
            <li>✓ 24/7 tech & business support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RoleAndResponsibilities;
