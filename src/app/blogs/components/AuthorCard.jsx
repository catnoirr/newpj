import React from 'react';

const AuthorCard = () => {
  return (
    <div className="p-6 bg-purple-800 text-white rounded-lg max-w-xs mx-auto">
      <div className="flex flex-col items-center">
        <img 
          src="path-to-image" 
          alt="Author" 
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-lg font-semibold">Tamás Hám-Szabó</h2>
        <p className="text-sm mt-2">
          Founder of SAAS First – the Best AI and Data-Driven Customer Engagement Tool
        </p>
        <p className="text-xs mt-2 text-center">
          With 15 years in SaaS, I've built Mailbutler and SAAS First. Passionate about SaaS, data, and AI. Let's connect if you share the same drive for success!
        </p>
      </div>
      
      <div className="mt-4 flex justify-center space-x-3">
        <a href="#!" className="text-white">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#!" className="text-white">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#!" className="text-white">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      <div className="mt-6 border-t border-gray-400 pt-4">
        <h3 className="text-sm font-semibold mb-2">In this article:</h3>
        <ul className="space-y-2 text-xs">
          <li>Exploring Generative AI in Content Creation</li>
          <li>Steering Clear of Common AI Writing Pitfalls</li>
          <li>Understanding ChatGPT Capabilities - Define Your Style</li>
          <li>Understand Your Readers</li>
          <li>Creating Quality AI-powered Blogs that Stand Out</li>
          <li>Conclusion: Embracing AI in Blog Creation</li>
          <li>Afterword: The AI Behind This Article</li>
        </ul>
      </div>
    </div>
  );
};

export default AuthorCard;
