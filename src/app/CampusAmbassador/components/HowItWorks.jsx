import React from 'react';
import { FaSearch, FaClipboardList, FaRocket, FaTools } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch className="text-3xl text-black mb-2" />,
      title: 'Discovery and Consultation',
      description: 'We begin by getting to know your unique requirements, goals, and challenges.',
    },
    {
      icon: <FaClipboardList className="text-3xl text-black mb-2" />,
      title: 'Planning and Strategy',
      description: 'We define project milestones and deliverables to keep the process on track.',
    },
    {
      icon: <FaRocket className="text-3xl text-black mb-2" />,
      title: 'Deployment and Launch',
      description: 'We ensure a smooth transition to the live, providing support every step of the way.',
    },
    {
      icon: <FaTools className="text-3xl text-black mb-2" />,
      title: 'Support and Maintenance',
      description: 'We offer ongoing support and maintenance services to keep your software running.',
    },
  ];

  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">
          How it works in <span className="text-green-600">4 easy steps</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md"
          >
            {step.icon}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
