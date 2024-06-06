import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { Link } from "react-router-dom";

const oldproduct = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const product = {
  products: [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: "beauty",
      price: 19.99,
      discountPercentage: 5.5,
      rating: 3.28,
      stock: 44,
      tags: ["beauty", "eyeshadow"],
      brand: "Glamour Beauty",
      sku: "MVCFH27F",
      weight: 3,
      dimensions: {
        width: 12.42,
        height: 8.63,
        depth: 29.13,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Liam Garcia",
          reviewerEmail: "liam.garcia@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Very disappointed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nora Russell",
          reviewerEmail: "nora.russell@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Elena Baker",
          reviewerEmail: "elena.baker@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 32,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "2817839095220",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    },
    {
      id: 3,
      title: "Powder Canister",
      description:
        "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      category: "beauty",
      price: 14.99,
      discountPercentage: 18.14,
      rating: 3.82,
      stock: 59,
      tags: ["beauty", "face powder"],
      brand: "Velvet Touch",
      sku: "9EN8WLT2",
      weight: 8,
      dimensions: {
        width: 24.16,
        height: 10.7,
        depth: 11.07,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Ethan Thompson",
          reviewerEmail: "ethan.thompson@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Levi Hicks",
          reviewerEmail: "levi.hicks@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Hazel Gardner",
          reviewerEmail: "hazel.gardner@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 25,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "0516267971277",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
    },
    {
      id: 4,
      title: "Red Lipstick",
      description:
        "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      category: "beauty",
      price: 12.99,
      discountPercentage: 19.03,
      rating: 2.51,
      stock: 68,
      tags: ["beauty", "lipstick"],
      brand: "Chic Cosmetics",
      sku: "O5IF1NTA",
      weight: 5,
      dimensions: {
        width: 14.37,
        height: 13.94,
        depth: 14.6,
      },
      warrantyInformation: "Lifetime warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great product!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Leo Rivera",
          reviewerEmail: "leo.rivera@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Oscar Powers",
          reviewerEmail: "oscar.powers@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Carter Rivera",
          reviewerEmail: "carter.rivera@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 6,
      meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "9444582199406",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
    },
    {
      id: 5,
      title: "Red Nail Polish",
      description:
        "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      category: "beauty",
      price: 8.99,
      discountPercentage: 2.46,
      rating: 3.91,
      stock: 71,
      tags: ["beauty", "nail polish"],
      brand: "Nail Couture",
      sku: "YUIIIP4W",
      weight: 9,
      dimensions: {
        width: 8.11,
        height: 10.89,
        depth: 29.06,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 1 week",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Leo Rivera",
          reviewerEmail: "leo.rivera@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Great product!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Evan Reed",
          reviewerEmail: "evan.reed@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Highly recommended!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Evelyn Sanchez",
          reviewerEmail: "evelyn.sanchez@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 46,
      meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "3212847902461",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
    },
    {
      id: 6,
      title: "Calvin Klein CK One",
      description:
        "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      category: "fragrances",
      price: 49.99,
      discountPercentage: 0.32,
      rating: 4.85,
      stock: 17,
      tags: ["fragrances", "perfumes"],
      brand: "Calvin Klein",
      sku: "DZM2JQZE",
      weight: 5,
      dimensions: {
        width: 11.53,
        height: 14.44,
        depth: 6.81,
      },
      warrantyInformation: "5 year warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Sophia Brown",
          reviewerEmail: "sophia.brown@x.dummyjson.com",
        },
        {
          rating: 3,
          comment: "Very disappointed!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Madison Collins",
          reviewerEmail: "madison.collins@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Poor quality!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Maya Reed",
          reviewerEmail: "maya.reed@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 20,
      meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "2210136215089",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
    },
    {
      id: 7,
      title: "Chanel Coco Noir Eau De",
      description:
        "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
      category: "fragrances",
      price: 129.99,
      discountPercentage: 18.64,
      rating: 2.76,
      stock: 41,
      tags: ["fragrances", "perfumes"],
      brand: "Chanel",
      sku: "K71HBCGS",
      weight: 4,
      dimensions: {
        width: 21.27,
        height: 28,
        depth: 11.89,
      },
      warrantyInformation: "1 week warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 1,
          comment: "Disappointing product!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Lincoln Kelly",
          reviewerEmail: "lincoln.kelly@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Great product!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Lincoln Kelly",
          reviewerEmail: "lincoln.kelly@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Lucas Allen",
          reviewerEmail: "lucas.allen@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 5,
      meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "1435582999795",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
    },
    {
      id: 8,
      title: "Dior J'adore",
      description:
        "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
      category: "fragrances",
      price: 89.99,
      discountPercentage: 17.44,
      rating: 3.31,
      stock: 91,
      tags: ["fragrances", "perfumes"],
      brand: "Dior",
      sku: "E70NB03B",
      weight: 10,
      dimensions: {
        width: 21.51,
        height: 7,
        depth: 26.51,
      },
      warrantyInformation: "Lifetime warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Fast shipping!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Zoe Nicholson",
          reviewerEmail: "zoe.nicholson@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Addison Wright",
          reviewerEmail: "addison.wright@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Clara Berry",
          reviewerEmail: "clara.berry@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 8,
      meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "0887083199279",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
    },
    {
      id: 9,
      title: "Dolce Shine Eau de",
      description:
        "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
      category: "fragrances",
      price: 69.99,
      discountPercentage: 11.47,
      rating: 2.68,
      stock: 3,
      tags: ["fragrances", "perfumes"],
      brand: "Dolce & Gabbana",
      sku: "1NBFK980",
      weight: 5,
      dimensions: {
        width: 17,
        height: 24.57,
        depth: 13.3,
      },
      warrantyInformation: "5 year warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Xavier Wright",
          reviewerEmail: "xavier.wright@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Poor quality!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Mila Hernandez",
          reviewerEmail: "mila.hernandez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Sophia Brown",
          reviewerEmail: "sophia.brown@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 9,
      meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "1939383392674",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png",
    },
    {
      id: 10,
      title: "Gucci Bloom Eau de",
      description:
        "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
      category: "fragrances",
      price: 79.99,
      discountPercentage: 8.9,
      rating: 2.69,
      stock: 93,
      tags: ["fragrances", "perfumes"],
      brand: "Gucci",
      sku: "FFKZ6HOF",
      weight: 10,
      dimensions: {
        width: 22.28,
        height: 17.81,
        depth: 27.18,
      },
      warrantyInformation: "No warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Aria Parker",
          reviewerEmail: "aria.parker@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Natalie Harris",
          reviewerEmail: "natalie.harris@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Fast shipping!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Ava Harris",
          reviewerEmail: "ava.harris@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 10,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "8232190382069",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
    },
    {
      id: 11,
      title: "Annibale Colombo Bed",
      description:
        "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
      category: "furniture",
      price: 1899.99,
      discountPercentage: 0.29,
      rating: 4.14,
      stock: 47,
      tags: ["furniture", "beds"],
      brand: "Annibale Colombo",
      sku: "4KMDTZWF",
      weight: 3,
      dimensions: {
        width: 28.75,
        height: 26.88,
        depth: 24.47,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Julian Newton",
          reviewerEmail: "julian.newton@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Madison Collins",
          reviewerEmail: "madison.collins@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Clara Berry",
          reviewerEmail: "clara.berry@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "7113807059215",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
    },
    {
      id: 12,
      title: "Annibale Colombo Sofa",
      description:
        "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
      category: "furniture",
      price: 2499.99,
      discountPercentage: 18.54,
      rating: 3.08,
      stock: 16,
      tags: ["furniture", "sofas"],
      brand: "Annibale Colombo",
      sku: "LUU95CQP",
      weight: 3,
      dimensions: {
        width: 20.97,
        height: 19.11,
        depth: 25.81,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Tyler Davis",
          reviewerEmail: "tyler.davis@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Hannah Robinson",
          reviewerEmail: "hannah.robinson@x.dummyjson.com",
        },
        {
          rating: 3,
          comment: "Waste of money!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Madison Collins",
          reviewerEmail: "madison.collins@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "0426785817074",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
    },
    {
      id: 13,
      title: "Bedside Table African Cherry",
      description:
        "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
      category: "furniture",
      price: 299.99,
      discountPercentage: 9.58,
      rating: 4.48,
      stock: 16,
      tags: ["furniture", "bedside tables"],
      brand: "Furniture Co.",
      sku: "OWPLTZYX",
      weight: 10,
      dimensions: {
        width: 25.43,
        height: 20.2,
        depth: 24.95,
      },
      warrantyInformation: "6 months warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Highly recommended!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Avery Carter",
          reviewerEmail: "avery.carter@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Evelyn Sanchez",
          reviewerEmail: "evelyn.sanchez@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 5,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "2913244159666",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png",
    },
    {
      id: 14,
      title: "Knoll Saarinen Executive Conference Chair",
      description:
        "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
      category: "furniture",
      price: 499.99,
      discountPercentage: 15.23,
      rating: 4.11,
      stock: 47,
      tags: ["furniture", "office chairs"],
      brand: "Knoll",
      sku: "RKHVJ4FE",
      weight: 3,
      dimensions: {
        width: 16.59,
        height: 21.46,
        depth: 29.07,
      },
      warrantyInformation: "Lifetime warranty",
      shippingInformation: "Ships in 3-5 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Leah Gutierrez",
          reviewerEmail: "leah.gutierrez@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Waste of money!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Stella Morris",
          reviewerEmail: "stella.morris@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 5,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "0726316339746",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
    },
    {
      id: 15,
      title: "Wooden Bathroom Sink With Mirror",
      description:
        "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
      category: "furniture",
      price: 799.99,
      discountPercentage: 11.22,
      rating: 3.26,
      stock: 95,
      tags: ["furniture", "bathroom"],
      brand: "Bath Trends",
      sku: "7OLTIEVO",
      weight: 6,
      dimensions: {
        width: 7.32,
        height: 22.64,
        depth: 12.37,
      },
      warrantyInformation: "6 months warranty",
      shippingInformation: "Ships in 3-5 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Highly recommended!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Charlotte Lopez",
          reviewerEmail: "charlotte.lopez@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Would not recommend!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "William Gonzalez",
          reviewerEmail: "william.gonzalez@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not worth the price!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Ava Harrison",
          reviewerEmail: "ava.harrison@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "7839797529453",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
    },
    {
      id: 16,
      title: "Apple",
      description:
        "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
      category: "groceries",
      price: 1.99,
      discountPercentage: 1.97,
      rating: 2.96,
      stock: 9,
      tags: ["fruits"],
      sku: "QTROUV79",
      weight: 8,
      dimensions: {
        width: 8.29,
        height: 5.58,
        depth: 12.41,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Great product!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Logan Lee",
          reviewerEmail: "logan.lee@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Great product!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Elena Long",
          reviewerEmail: "elena.long@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Grayson Coleman",
          reviewerEmail: "grayson.coleman@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 44,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "2517819903837",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png",
    },
    {
      id: 17,
      title: "Beef Steak",
      description:
        "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
      category: "groceries",
      price: 12.99,
      discountPercentage: 17.99,
      rating: 2.83,
      stock: 96,
      tags: ["meat"],
      sku: "BWWA2MSO",
      weight: 9,
      dimensions: {
        width: 23.35,
        height: 13.48,
        depth: 26.4,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Ethan Martinez",
          reviewerEmail: "ethan.martinez@x.dummyjson.com",
        },
        {
          rating: 3,
          comment: "Disappointing product!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Owen Fisher",
          reviewerEmail: "owen.fisher@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 21,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "8335515097879",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png",
    },
    {
      id: 18,
      title: "Cat Food",
      description:
        "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
      category: "groceries",
      price: 8.99,
      discountPercentage: 9.57,
      rating: 2.88,
      stock: 13,
      tags: ["pet supplies", "cat food"],
      sku: "C3F8QN6O",
      weight: 9,
      dimensions: {
        width: 15.4,
        height: 13.97,
        depth: 25.13,
      },
      warrantyInformation: "3 months warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Mateo Bennett",
          reviewerEmail: "mateo.bennett@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Aurora Barnes",
          reviewerEmail: "aurora.barnes@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Ellie Stewart",
          reviewerEmail: "ellie.stewart@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 48,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "5503491330693",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png",
    },
    {
      id: 19,
      title: "Chicken Meat",
      description:
        "Fresh and tender chicken meat, suitable for various culinary preparations.",
      category: "groceries",
      price: 9.99,
      discountPercentage: 10.46,
      rating: 4.61,
      stock: 69,
      tags: ["meat"],
      sku: "G5YEHW7B",
      weight: 7,
      dimensions: {
        width: 15.96,
        height: 29.24,
        depth: 26.25,
      },
      warrantyInformation: "Lifetime warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Sophia Jones",
          reviewerEmail: "sophia.jones@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Maya Reed",
          reviewerEmail: "maya.reed@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Highly recommended!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Harper Turner",
          reviewerEmail: "harper.turner@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 46,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "0966223559510",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png",
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png",
    },
    {
      id: 20,
      title: "Cooking Oil",
      description:
        "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
      category: "groceries",
      price: 4.99,
      discountPercentage: 18.89,
      rating: 4.01,
      stock: 22,
      tags: ["cooking essentials"],
      sku: "Q6ZP1UY8",
      weight: 8,
      dimensions: {
        width: 8.18,
        height: 27.45,
        depth: 27.88,
      },
      warrantyInformation: "Lifetime warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Mason Parker",
          reviewerEmail: "mason.parker@x.dummyjson.com",
        },
        {
          rating: 3,
          comment: "Poor quality!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Jonathan Pierce",
          reviewerEmail: "jonathan.pierce@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Alexander Hernandez",
          reviewerEmail: "alexander.hernandez@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 2,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "6707669443381",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png",
    },
    {
      id: 21,
      title: "Cucumber",
      description:
        "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
      category: "groceries",
      price: 1.49,
      discountPercentage: 11.44,
      rating: 4.71,
      stock: 22,
      tags: ["vegetables"],
      sku: "6KGF2K6Z",
      weight: 9,
      dimensions: {
        width: 11.04,
        height: 20.5,
        depth: 8.18,
      },
      warrantyInformation: "5 year warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Elijah Hill",
          reviewerEmail: "elijah.hill@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Fast shipping!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Liam Garcia",
          reviewerEmail: "liam.garcia@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Ella Cook",
          reviewerEmail: "ella.cook@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 7,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "2597004869708",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png",
    },
    {
      id: 22,
      title: "Dog Food",
      description:
        "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
      category: "groceries",
      price: 10.99,
      discountPercentage: 18.15,
      rating: 2.74,
      stock: 40,
      tags: ["pet supplies", "dog food"],
      sku: "A6QRCH37",
      weight: 2,
      dimensions: {
        width: 29.39,
        height: 29.77,
        depth: 20.54,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Leo Rivera",
          reviewerEmail: "leo.rivera@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Highly recommended!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Alexander Jones",
          reviewerEmail: "alexander.jones@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Addison Wright",
          reviewerEmail: "addison.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 29,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "7957222289508",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png",
    },
    {
      id: 23,
      title: "Eggs",
      description:
        "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
      category: "groceries",
      price: 2.99,
      discountPercentage: 5.8,
      rating: 4.46,
      stock: 10,
      tags: ["dairy"],
      sku: "YA617RI7",
      weight: 4,
      dimensions: {
        width: 12.3,
        height: 10.99,
        depth: 15.53,
      },
      warrantyInformation: "3 year warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Mateo Perez",
          reviewerEmail: "mateo.perez@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Cameron Perez",
          reviewerEmail: "cameron.perez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Aurora Barnes",
          reviewerEmail: "aurora.barnes@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 43,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "7095702028776",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png",
    },
    {
      id: 24,
      title: "Fish Steak",
      description:
        "Quality fish steak, suitable for grilling, baking, or pan-searing.",
      category: "groceries",
      price: 14.99,
      discountPercentage: 7,
      rating: 4.83,
      stock: 99,
      tags: ["seafood"],
      sku: "XNIH1MTA",
      weight: 8,
      dimensions: {
        width: 20.14,
        height: 8.4,
        depth: 10.01,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Michael Johnson",
          reviewerEmail: "michael.johnson@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Julian Newton",
          reviewerEmail: "julian.newton@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Lila Hudson",
          reviewerEmail: "lila.hudson@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 49,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "4250692197342",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png",
    },
    {
      id: 25,
      title: "Green Bell Pepper",
      description:
        "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
      category: "groceries",
      price: 1.29,
      discountPercentage: 15.5,
      rating: 4.28,
      stock: 89,
      tags: ["vegetables"],
      sku: "HU7S7VQ0",
      weight: 7,
      dimensions: {
        width: 7.32,
        height: 14.31,
        depth: 21.38,
      },
      warrantyInformation: "5 year warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Maya Reed",
          reviewerEmail: "maya.reed@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Madison Collins",
          reviewerEmail: "madison.collins@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Ethan Thompson",
          reviewerEmail: "ethan.thompson@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "7583442707568",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png",
    },
    {
      id: 26,
      title: "Green Chili Pepper",
      description:
        "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
      category: "groceries",
      price: 0.99,
      discountPercentage: 18.51,
      rating: 4.43,
      stock: 8,
      tags: ["vegetables"],
      sku: "Y4RM3JCB",
      weight: 2,
      dimensions: {
        width: 18.67,
        height: 21.17,
        depth: 25.26,
      },
      warrantyInformation: "No warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 2,
          comment: "Disappointing product!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Mateo Bennett",
          reviewerEmail: "mateo.bennett@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Natalie Price",
          reviewerEmail: "natalie.price@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Avery Barnes",
          reviewerEmail: "avery.barnes@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 43,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "8400326844874",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png",
    },
    {
      id: 27,
      title: "Honey Jar",
      description:
        "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
      category: "groceries",
      price: 6.99,
      discountPercentage: 1.91,
      rating: 3.5,
      stock: 25,
      tags: ["condiments"],
      sku: "BTBNIIOU",
      weight: 9,
      dimensions: {
        width: 26.53,
        height: 27.11,
        depth: 6.63,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Fast shipping!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Nicholas Bailey",
          reviewerEmail: "nicholas.bailey@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Awesome product!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Gabriel Hayes",
          reviewerEmail: "gabriel.hayes@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "James Garcia",
          reviewerEmail: "james.garcia@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "0668665656044",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png",
    },
    {
      id: 28,
      title: "Ice Cream",
      description:
        "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
      category: "groceries",
      price: 5.49,
      discountPercentage: 7.58,
      rating: 3.77,
      stock: 76,
      tags: ["desserts"],
      sku: "VEZMU1EQ",
      weight: 5,
      dimensions: {
        width: 17.66,
        height: 24.49,
        depth: 25.98,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great product!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Elena Baker",
          reviewerEmail: "elena.baker@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Madeline Simpson",
          reviewerEmail: "madeline.simpson@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Caleb Nelson",
          reviewerEmail: "caleb.nelson@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 19,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "9603960319256",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/2.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/3.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png",
    },
    {
      id: 29,
      title: "Juice",
      description:
        "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
      category: "groceries",
      price: 3.99,
      discountPercentage: 5.45,
      rating: 3.41,
      stock: 99,
      tags: ["beverages"],
      sku: "M2K19S06",
      weight: 2,
      dimensions: {
        width: 8.97,
        height: 12.26,
        depth: 15.05,
      },
      warrantyInformation: "1 week warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Leo Rivera",
          reviewerEmail: "leo.rivera@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not worth the price!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Ethan Martinez",
          reviewerEmail: "ethan.martinez@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Max Parker",
          reviewerEmail: "max.parker@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 26,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "8546824122355",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png",
    },
    {
      id: 30,
      title: "Kiwi",
      description:
        "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
      category: "groceries",
      price: 2.49,
      discountPercentage: 10.32,
      rating: 4.37,
      stock: 1,
      tags: ["fruits"],
      sku: "0X3NORB9",
      weight: 8,
      dimensions: {
        width: 27.3,
        height: 7.48,
        depth: 15.08,
      },
      warrantyInformation: "6 months warranty",
      shippingInformation: "Ships in 3-5 business days",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Nora Russell",
          reviewerEmail: "nora.russell@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Dylan Wells",
          reviewerEmail: "dylan.wells@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Great product!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Noah Hernandez",
          reviewerEmail: "noah.hernandez@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 8,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "3325493172934",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png",
    },
  ],
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {product.price}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <fieldset aria-label="Choose a color" className="mt-4">
                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="flex items-center space-x-3"
                  >
                    {product.colors.map((color) => (
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={({ focus, checked }) =>
                          classNames(
                            color.selectedClass,
                            focus && checked ? "ring ring-offset-1" : "",
                            !focus && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                          )
                        }
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <Link
                    to="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size guide
                  </Link>
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                  >
                    {product.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ focus }) =>
                          classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            focus ? "ring-2 ring-indigo-500" : "",
                            "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                          )
                        }
                      >
                        {({ checked, focus }) => (
                          <>
                            <span>{size.name}</span>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  focus ? "border" : "border-2",
                                  "pointer-events-none absolute -inset-px rounded-md"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
