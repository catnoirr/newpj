import React from 'react';
import { FaSearch, FaClipboardList, FaRocket, FaTools } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch className="text-5xl text-white bg-black mb-2 p-2 rounded-full" />,
      title: 'Discovery and Consultation',
      description: 'We begin by getting to know your unique requirements, goals, and challenges.',
    },
    {
      icon: <FaClipboardList className="text-5xl text-white mb-2 p-2 rounded-full bg-black" />,
      title: 'Planning and Strategy',
      description: 'We define project milestones and deliverables to keep the process on track.',
    },
    {
      icon: <FaRocket className="text-5xl text-white bg-black mb-2 p-2 rounded-full" />,
      title: 'Deployment and Launch',
      description: 'We ensure a smooth transition to the live, providing support every step of the way.',
    },
    {
      icon: <FaTools className="text-5xl text-white bg-black mb-2 p-2 rounded-full" />,
      title: 'Support and Maintenance',
      description: 'We offer ongoing support and maintenance services to keep your software running.',
    },
  ];

  return (
    <section className='bg-white flex justify-center align-middle md:px-14 px-8  mt-5'>
      <div className='bg-white py-12'>
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold">
          How it works in <span className="text-green-600">4 easy steps</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center  p-6 "
          >
            {step.icon}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default HowItWorks;
