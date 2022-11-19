import React from "react";

const Logos = () => {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <h1 className="mb-3 text-3xl font-bold leading-tight text-center text-gray-900 md:text-4xl">
        Trusted by 5200+, built by 17
      </h1>
      <p className="mb-16 text-lg text-center text-gray-600">
        Organizations of all sizes trust Hellonext to manage customer feedback
      </p>
      <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-6">
        <div className="flex items-center justify-center">
          <img
            src="https://kutty.netlify.app/logos/todoist.svg"
            alt="Todoist Logo"
            className="block object-contain h-16"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://kutty.netlify.app/logos/slack-icon.svg"
            alt="Slack Logo"
            className="block object-contain h-16"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://kutty.netlify.app/logos/typehtmlForm.svg"
            alt="TypehtmlForm Logo"
            className="block object-contain h-16"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://kutty.netlify.app/logos/algolia.svg"
            alt="Algolia Logo"
            className="block object-contain h-16"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://kutty.netlify.app/logos/postcss.svg"
            alt="Postcss Logo"
            className="block object-contain h-16"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://kutty.netlify.app/logos/yahoo.svg"
            alt="Yahoo Logo"
            className="block object-contain h-16"
          />
        </div>
      </div>
      <div className="text-center">
        <a href="#" className="btn btn-light btn-lg btn-icon">
          <span>See our Testimonials</span>
          <svg viewBox="0 0 20 20" fill="currentColor" className="ml-3">
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Logos;
