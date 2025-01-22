import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaUserLarge } from "react-icons/fa6";
import { GiWoodenChair } from "react-icons/gi";

function Blog() {
  return (
    <div className="max-w-screen-2xl container">
      {/* Banner Section */}
      <div className="relative text-black">
        <Image
          src="/heroShop.png"
          alt="Shop Banner"
          height={400}
          width={600}
          className="w-full h-[200px] md:h-auto object-cover opacity-35"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="w-16 h-16 mb-4">
            <Image
              src="/minilogo.png" // Replace with your logo path
              alt="Logo"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>

          {/* Heading and Breadcrumb */}
          <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
          <div className="mt-4 text-gray-500 text-xs md:text-xl flex items-center space-x-3">
            <Link
              href="/"
              className="text-sm text-gray-500 mt-2 flex items-center justify-center space-x-2"
            >
              Home
            </Link>
            <span className="text-gray-500 h-3 mt-1 w-3 text-xs text-center">
              {">"}
            </span>
            <Link href="/blog" className="text-gray-500 h-3 w-3 text-xs mt-1">
              Blog
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Blog Posts Section */}
        <div className="mt-8 w-full lg:w-3/4 gap-6">
          {/* Single Blog Post */}
          {[
            {
              image: "/p1.png",
              title: "Going all-in with millennial design",
              category: "Crafts",
              date: "01 Jan 2023",
            },
            {
              image: "/p2.png",
              title: "Exploring new ways of decorating",
              category: "Design",
              date: "15 Mar 2023",
            },
            {
              image: "/p3.png",
              title: "Handmade pieces that took time to make",
              category: "Wood",
              date: "20 Sep 2023",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg transition-shadow"
            >
              <Image
                src={post.image}
                height={300}
                width={500}
                alt={`Image for ${post.title}`}
                className="rounded-t-lg"
              />
              <div className="flex items-center space-x-4 mt-3 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <FaUserLarge />
                  <p>Admin</p>
                </div>
                <div className="flex items-center space-x-1">
                  <FaCalendar />
                  <p>{post.date}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <GiWoodenChair />
                  <p>{post.category}</p>
                </div>
              </div>
              <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
              <p className="mt-2 text-gray-700 line-clamp-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
                aperiam dolores modi non quas cum nam aliquid molestias iste
                quod cumque optio tenetur doloribus dignissimos.
              </p>
              <Link
                href={`/blog`} // Dynamic link based on post ID
                className="mt-4 block text-primary underline underline-offset-4"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <div className="mt-10 w-full lg:w-1/4 p-6 gap-6">
          {/* Categories */}
          <div className="p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-8 text-gray-500">
              {[
                { name: "Crafts", count: 2 },
                { name: "Design", count: 8 },
                { name: "Handmade", count: 7 },
                { name: "Interior", count: 1 },
                { name: "Wood", count: 6 },
              ].map((category, index) => (
                <li key={index} className="flex justify-between text-sm">
                  <span>{category.name}</span>
                  <span>{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            <div className="space-y-6">
              {[
                {
                  image: "/b1.jpeg",
                  title: "Going all-in with millennial design",
                  date: "03 Aug 2022",
                },
                {
                  image: "/b2.jpeg",
                  title: "Exploring new ways of decorating",
                  date: "03 Aug 2022",
                },
                {
                  image: "/b3.jpeg",
                  title: "Handmade pieces that took time to make",
                  date: "03 Aug 2022",
                },
                {
                  image: "/b4.jpeg",
                  title: "Modern home in Milan",
                  date: "03 Aug 2022",
                },
                {
                  image: "/b5.jpeg",
                  title: "Colorful office redesign",
                  date: "03 Aug 2022",
                },
              ].map((post, index) => (
                <div key={index} className="flex space-x-3">
                  <Image src={post.image} height={100} width={100} alt="" />
                  <div>
                    <h4 className="text-lg font-semibold">{post.title}</h4>
                    <p>{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
