import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Trash2 } from "lucide-react";
import Link from "next/link";
export default function ShopPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-16 text-center">
            {/* Small Logo */}
            <div className="w-16 h-16 mx-auto mb-4">
              <Image
                src="/minilogo.png"
                alt="Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Cart Heading */}
            <h1 className="text-4xl font-bold text-gray-900">Cart</h1>

            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 mt-2 flex items-center justify-center space-x-2">
              <span>Home</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-gray-900 h-3 w-3 text-xs"
              />
              <span>Cart</span>
            </p>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/heroShop.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="pointer-events-none opacity-30"
          />
        </div>
      </div>

      <main className=" text-black bg-[#ffffff] p-4 md:p-8 mt-36 mb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
            {/* Product List Section */}
            <div className="lg:col-span-2">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className=" bg-[#FFF9E5] ">
                      <th className="pb-4 p-4 text-left font-semibold">
                        Product
                      </th>
                      <th className="pb-4 p-4 text-left font-semibold">
                        Price
                      </th>
                      <th className="pb-4 p-4 text-left font-semibold">
                        Quantity
                      </th>
                      <th className="pb-4 p-4 text-left font-semibold">
                        Subtotal
                      </th>
                      <th className="pb-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4">
                        <div className="flex items-center gap-4">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-yellow-100">
                            <Image
                              src="/tp14.png"
                              alt="Asgaard sofa"
                              width={300}
                              height={300}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <span className="text-gray-600">Asgaard sofa</span>
                        </div>
                      </td>
                      <td className="py-4">Rs. 250,000.00</td>
                      <td className="py-4">
                        <input
                          type="number"
                          min="1"
                          value="1"
                          className="w-16 rounded border p-1 text-center"
                          aria-label="Product quantity"
                        />
                      </td>
                      <td className="py-4">Rs. 250,000.00</td>
                      <td className="py-4">
                        <button
                          className="text-gray-500 hover:text-gray-700"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cart Totals Section */}
            <div className="lg:col-span-1">
              <div className="rounded-lg bg-[#FFF9E5] p-6 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold">Cart Totals</h2>

                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-4">
                    <span className="font-medium">Subtotal</span>
                    <span>Rs. 250,000.00</span>
                  </div>

                  <div className="flex justify-between border-b pb-4">
                    <span className="font-medium">Total</span>
                    <span className="text-lg font-semibold">
                      Rs. 250,000.00
                    </span>
                  </div>
                  <Link href={"/checkout"}>
                    <button
                      className="w-full rounded-full border border-black py-3 text-black transition hover:bg-gray-800 hover:text-white"
                      aria-label="Proceed to checkout"
                    >
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="bg-[#FAF4F4] py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {/* Free Delivery Section */}
            <div className="flex flex-col items-left">
              <div className="text-2xl font-bold text-gray-800">
                Free Delivery
              </div>
              <p className="mt-2 text-gray-600">
                For all oders over $50, consectetur adipim scing elit.
              </p>
            </div>

            {/* 90 Days Return Section */}
            <div className="flex flex-col items-left">
              <div className="text-2xl font-bold text-gray-800">
                90 Days Return
              </div>
              <p className="mt-2 text-gray-600">
                If goods have problems, consectetur adipim scing elit.
              </p>
            </div>

            {/* Secure Payment Section */}
            <div className="flex flex-col items-left">
              <div className="text-2xl font-bold text-gray-800">
                Secure Payment
              </div>
              <p className="mt-2 text-gray-600">
                100% secure payment, consectetur adipim scing elit..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
