"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Define a Sanity Image type
interface SanityImage {
  asset: {
    _ref: string;
  };
}

// Define a Product type based on your Sanity schema
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: SanityImage; // Updated image type
  category: string;
}

const TopBeds = () => {
  const [beds, setBeds] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track error state

  useEffect(() => {
    async function fetchBeds() {
      try {
        // Sanity query to fetch all products with category "Bed"
        const query = `*[_type == "product" && category == "Bed"]`; // Adjust query if necessary
        const products = await client.fetch(query);

        console.log("Fetched Products:", products); // Log to check the structure

        if (products.length > 0) {
          setBeds(products); // Set the beds data to state
        } else {
          setError("No products found.");
        }
      } catch (err) {
        setError("Failed to fetch products.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false); // Stop loading when finished
      }
    }

    fetchBeds();
  }, []); // Runs once on component mount

  if (loading) {
    return <div>Loading...</div>; // Display a loading message
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  return (
    <div className="bg-[#ffffff] text-black">
      {/* Header Section */}
      <div className="text-center px-4 py-6">
        <p className="text-[24px] md:text-[30px] lg:text-[36px] font-semibold">
          Top Beds For You
        </p>
        <p className="text-[14px] md:text-[16px] text-[#9F9F9F] mt-2">
          Choose from our finest collection of luxurious and comfortable beds.
        </p>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
        {beds.length === 0 ? (
          <p>No beds available right now.</p>
        ) : (
          beds.map((bed) => (
            <div key={bed._id} className="bg-[#FAF4F4] rounded-md p-4">
              {/* If image field is a Sanity image object, use `urlFor()` to get the image URL */}
              <Image
                src={
                  bed.image ? urlFor(bed.image).url() : "/fallback-image.jpg"
                } // Use urlFor() if image is an object
                alt={bed.name}
                className="w-full rounded-lg"
                width={287}
                height={287}
              />
              <p className="text-[14px] md:text-[16px] mt-2">{bed.name}</p>
              <p className="font-bold text-[18px] md:text-[20px] lg:text-[24px]">
                $ {bed.price}
              </p>
            </div>
          ))
        )}
      </div>

      {/* View More Section */}
      <div className="text-center py-8">
        <p className="text-[18px] md:text-[20px] underline cursor-pointer">
          View More
        </p>
      </div>
    </div>
  );
};

export default TopBeds;
