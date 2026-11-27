import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from './data'
import Product_image_gallery from "./Product_image_gallery"
import AddtoCart from './AddtoCart'
export default function ProductDetails() {
    let id = useParams().id
    let product = products.find((p)=>p.id ==id)

  return (

  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

      {/* Product Gallery */}
      <div className="bg-gray-50 rounded-2xl p-4">
        <Product_image_gallery imgs={product.images} />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-center">

        {/* Brand & Category */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            {product.brand}
          </span>
          <span className="bg-pink-100 text-pink-700 text-xs font-medium px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {product.title}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-5">
          <div className="flex text-yellow-500">
            {"★".repeat(Math.round(product.rating))}
            {"☆".repeat(5 - Math.round(product.rating))}
          </div>
          <span className="text-sm font-semibold text-gray-700">
            {product.rating}/5
          </span>
          <span className="text-sm text-gray-500">
            ({product.reviews?.length || 0} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl font-bold text-gray-900">
            ${(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
          </span>

          <span className="text-lg text-gray-400 line-through">
            ${product.price.toFixed(2)}
          </span>

          <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
            {product.discountPercentage}% OFF
          </span>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Inclusive of applicable taxes
        </p>

        {/* Description */}
        <p className="text-gray-600 leading-7 mb-6">
          {product.description}
        </p>

        {/* Stock Status */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
          <span className="text-sm font-medium text-green-700">
            {product.availabilityStatus}
          </span>
          <span className="text-sm text-gray-500">
            ({product.stock} available)
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-7">
          {product.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 text-xs px-3 py-2 rounded-lg"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <AddtoCart id={product.id}></AddtoCart>

          <button className="flex-1 border border-gray-300 hover:border-gray-900 text-gray-900 font-semibold py-3.5 px-6 rounded-xl transition duration-300">
            Buy Now
          </button>
        </div>

        {/* Additional Information */}
        <div className="border-t border-gray-200 pt-5 space-y-3">

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">SKU</span>
            <span className="font-medium text-gray-800">{product.sku}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Minimum Order</span>
            <span className="font-medium text-gray-800">
              {product.minimumOrderQuantity} units
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Shipping</span>
            <span className="font-medium text-gray-800">
              {product.shippingInformation}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Return Policy</span>
            <span className="font-medium text-gray-800">
              {product.returnPolicy}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Warranty</span>
            <span className="font-medium text-gray-800">
              {product.warrantyInformation}
            </span>
          </div>

        </div>
      </div>
    </div>

    {/* Reviews Section */}
    <div className="mt-16 border-t border-gray-200 pt-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {product.reviews?.map((review, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
          >
            <div className="text-yellow-500 mb-2">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>

            <p className="text-gray-700 mb-4">
              "{review.comment}"
            </p>

            <div className="text-sm font-semibold text-gray-900">
              {review.reviewerName}
            </div>

            <div className="text-xs text-gray-400 mt-1">
              {new Date(review.date).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
  
}
