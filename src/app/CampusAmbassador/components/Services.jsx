import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Business analysis",
      description: "Our Business Analysis service is the first step in understanding your organization’s current state.",
      linkText: "View detail",
      icon: "📊" // replace with an actual icon or image path if available
    },
    {
      title: "Strategic planning",
      description: "We work closely with you to develop a tailored roadmap that aligns with your goals and objectives.",
      linkText: "View detail",
      icon: "📈" // replace with an actual icon or image path if available
    },
    {
      title: "Marketing strategy",
      description: "Our Marketing Strategy service is designed to elevate your brand’s visibility and engagement.",
      linkText: "View detail",
      icon: "📣" // replace with an actual icon or image path if available
    },
    {
      title: "Experience design",
      description: "From website design to app development, we blend aesthetics with usability to leave a lasting impression.",
      linkText: "View detail",
      icon: "🎨" // replace with an actual icon or image path if available
    },
    {
      title: "Business consulting",
      description: "Our consultants become your trusted advisors on the path to success.",
      linkText: "View detail",
      icon: "📚" // replace with an actual icon or image path if available
    },
    {
      title: "Tax consultant",
      description: "We’re here to optimize your tax strategy, so you can focus on what matters most to your business.",
      linkText: "View detail",
      icon: "💵" // replace with an actual icon or image path if available
    }
  ];

  return (
    <div className="flex flex-col items-center bg-white min-h-screen p-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">
        Our Comprehensive Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="text-4xl text-green-500 mb-4">
              {service.icon}
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {service.description}
            </p>
            <a href="#" className="text-green-500 font-semibold hover:underline">
              {service.linkText} &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
