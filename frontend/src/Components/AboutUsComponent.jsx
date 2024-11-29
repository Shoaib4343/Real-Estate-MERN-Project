import React from 'react'

const AboutUsComponent = () => {
  return (
    <section className="bg-pink-50 py-16 px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side: Image */}
      
      <div className="relative">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Discover the range of real estate{" "}
          <span className="text-orange-500">services</span> we offer
        </h2>
        <img
          src="/services.jpeg" // Replace with your actual image path
          alt="Real Estate Services"
          className="rounded-lg shadow-lg w-96 h-96 object-cover object-top"
        />
      </div>

      {/* Right Side: Content */}
      <div>
       
        <ul className="space-y-6">
          {/* Item 1 */}
          <li className="flex items-start">
            <span className="text-2xl font-bold text-orange-500 mr-4">01</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Buy a home</h3>
              <p className="text-gray-600">
                Find your ideal home effortlessly with our expert guidance & extensive property
                listings, ensuring a smooth and satisfying home-buying experience.
              </p>
            </div>
          </li>

          {/* Item 2 */}
          <li className="flex items-start">
            <span className="text-2xl font-bold text-orange-500 mr-4">02</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Rent a home</h3>
              <p className="text-gray-600">
                Find your perfect rental home with ease. Our service offers personalized options
                and expert support to help you secure a comfortable and ideal living space.
              </p>
            </div>
          </li>

          {/* Item 3 */}
          <li className="flex items-start">
            <span className="text-2xl font-bold text-orange-500 mr-4">03</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Property management</h3>
              <p className="text-gray-600">
                Expert property management to handle maintenance, tenant relations, and
                financials, ensuring your property runs smoothly and remains profitable.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default AboutUsComponent