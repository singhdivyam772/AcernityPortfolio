import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

const BlogPage = () => {
  return (
    <div className=" w-full h-full">
      <div className="bg-gray-100 text-gray-800 mt-24">
        {/* Hero Section */}
        <header className="bg-white shadow-md">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              The Journey of a Lifetime
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Author"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm text-gray-600">By Jane Doe</p>
                <p className="text-sm text-gray-500">
                  Published on Dec 29, 2024
                </p>
              </div>
            </div>
            <img
              src="https://via.placeholder.com/800x400"
              alt="Featured"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </header>

        {/* Content Section */}
        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Introduction */}
          <section className="mb-6">
            <p className="text-lg leading-relaxed text-gray-700">
              Life is an incredible journey filled with ups, downs, and
              everything in between. Join us as we explore the moments that
              shape our existence.
            </p>
          </section>

          {/* Body Content */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Discovering New Horizons
            </h2>
            <p className="leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
              "The journey not the arrival matters." - T.S. Eliot
            </blockquote>
            <p className="leading-relaxed text-gray-700">
              Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
              semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
            <img
              src="https://via.placeholder.com/600x300"
              alt="Journey"
              className="w-full h-auto rounded-lg"
            />
            <p className="leading-relaxed text-gray-700">
              Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor.
            </p>
          </section>
        </main>

        {/* Footer Section */}
        <footer className="bg-white shadow-md py-6  ">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">&copy; 2024 Jane Doe</p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-500 hover:underline">
                  Share
                </a>
                <a href="#" className="text-blue-500 hover:underline">
                  Comment
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* blog cards */}
      <div className="w-full my-12 border-2 border-blue-500  sm:w-[40%] lg:w-[25%] shadow-md h-[350px] hover:scale-[1.05] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group">
        {/*  icons  */}
        <div className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-[15px]">
          <FaRegHeart className="text-[1.1rem] text-white" />
          <div className="flex items-center gap-[5px]">
            <MdOutlineTimer className="text-orange-700 text-[1.1rem]" />
            <p className="text-[1rem] text-orange-700">5 min</p>
          </div>
        </div>

        {/*  image  */}
        <img
          src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="animated_card"
          className="w-full h-[60%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out"
        />

        {/*  texts  */}
        <div className="absolute bottom-0 left-0 py-[20px] pb-[40px] px-[20px] w-full">
          <p className="text-[1rem] uppercase text-white">Travel</p>
          <h3 className="text-[1.4rem] font-bold text-white">
            Discover the sea
          </h3>
          <p className="text-[0.9rem] text-white mt-2">by Jhon Doe</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
