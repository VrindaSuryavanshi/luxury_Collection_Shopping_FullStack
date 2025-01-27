"use client";

import { useState , useEffect } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { Box, Button, Grid2, Rating, Paper } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import ProductReviewCard from "./ProductReviewCard";
import { styled } from "@mui/material/styles";
import { product_details } from "../productData/productData";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import { useNavigate , useParams } from "react-router-dom";
import { useDispatch } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { findProductsById } from "../../../State/product/Action";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  width: 200,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "success",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));
const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
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
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [productData , setProductData] = useState({});

const navigate = useNavigate();
const params = useParams();
const dispatch = useDispatch();

console.log("===========" , params.productId)

useEffect(()=>{

  const data = {productId : params.productId}
dispatch(findProductsById(data));
console.log("data is " ,data)
setProductData(data);

},[params.productId])

  const handleAddToCart = ()=>{
      navigate('/cart')
      toast.success('🦄 Product is added to cart!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

  }
  return (
    <div className="bg-white lg:px-20">
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
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
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

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 px-4 gap-y-10 pt-10">
          {/* Image gallery */}
          <div className=" flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                alt={productData.imageUrl}
                src={productData.imageUrl}
                className="h-full w-full object-cover object-center"
              />
              <ToastContainer />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                  <img
                    alt={item.alt}
                    src={item.src}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className=" text-left py-1 lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font:bold tracking-tight text-gray-900 sm:text-3xl">
                luxury-collection
              </h1>

              <h1 className="text:lg lg:text=xl text-gray-600 opacity-60 pt-1">
                Luxury Black Clothing
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>

              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font:semibold">₹1050 </p>
                <p className="opacity-50 line-through">₹1450</p>
                <p className="text-green-700 font-semibold">60% OFF</p>
              </div>
              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex space-x-6">
                  <Rating name="read-only" value={4} readOnly />
                  <p className="opacity-50 text-sm">5678 Ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600">
                    456 Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Colors */}
                {/* <div>
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
                          className={classNames(
                            color.selectedClass,
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                          )}
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
                </div> */}

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
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
                          className={classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            "group relative flex items-center justify-center rounded-md border  text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-2"
                          )}
                        >
                          <span>{size.name}</span>
                          {size.inStock ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                stroke="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                              >
                                <line
                                  x1={0}
                                  x2={100}
                                  y1={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                <Button
                onClick={handleAddToCart}
                  variant="contained"
                  sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd", mt: "5px" }}
                >
                  Add To Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-center-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

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
        </section>

        {/* rating and reviews */}
        <section>
          <h1 className="font-semibold text-lg pb-4 text-left px-2">
            {" "}
            Recent Reviews and Ratings{" "}
          </h1>
          <div className="border p-5">
            <Grid2
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid2 size={{ xs: 6, md: 8 }}>
                <div className="space-y-5">
                  {[1, 1, 1].map((item) => (
                    <ProductReviewCard />
                  ))}
                </div>
              </Grid2>

              <Grid2 item xs={5}>
                <h1 className="text-xl font-semibold pb-1 mt-4 text-left">
                  Product Ratings
                </h1>

                <div className="items-center flex space-x-3 pb-5 mt-2">
                  <Rating value={4.5} precision={0.5} readOnly />
                  <p className="opacity-60">6785 Ratings</p>
                </div>

                <Grid2 item xs={12} md={6} className="space-y-4">
                  <Paper style={{ boxShadow: "none" }}>
                    {/* Nested Grid */}
                    <Grid2 container spacing={2}>
                      <Grid2 item xs={6}>
                        <Paper
                          style={{
                            boxShadow: "none",
                            width: 100,
                            textAlign: "left",
                          }}
                        >
                          Excellent
                        </Paper>
                      </Grid2>
                      <Grid2 item xs={6}>
                        <Paper
                          style={{
                            boxShadow: "none",
                            width: 150,
                            textAlign: "left",
                            marginTop: 10,
                          }}
                        >
                          <BorderLinearProgress
                            variant="determinate"
                            value={50}
                            color="success"
                          />
                        </Paper>
                      </Grid2>
                    </Grid2>
                  </Paper>
                  <Paper style={{ boxShadow: "none" }}>
                    {/* Nested Grid */}
                    <Grid2 container spacing={2}>
                      <Grid2 item xs={6}>
                        <Paper
                          style={{
                            boxShadow: "none",
                            width: 100,
                            textAlign: "left",
                          }}
                        >
                          Very Good
                        </Paper>
                      </Grid2>
                      <Grid2 item xs={6}>
                        <Paper
                          style={{
                            boxShadow: "none",
                            width: 150,
                            textAlign: "left",
                            marginTop: 10,
                          }}
                        >
                          <BorderLinearProgress
                            variant="determinate"
                            value={30}
                            color="info"
                          />
                        </Paper>
                      </Grid2>
                    </Grid2>
                  </Paper>
                  <Paper style={{ boxShadow: "none" }}>
                    {/* Nested Grid */}
                    <Grid2 container spacing={2}>
                      <Grid2 item xs={6}>
                        <Paper
                          style={{
                            boxShadow: "none",
                            width: 100,
                            textAlign: "left",
                          }}
                        >
                          Good
                        </Paper>
                      </Grid2>
                      <Grid2 item xs={6}>
                        <Paper
                          style={{
                            boxShadow: "none",
                            width: 150,
                            textAlign: "left",
                            marginTop: 10,
                          }}
                        >
                          <BorderLinearProgress
                            variant="determinate"
                            value={25}
                            color="primary"
                          />
                        </Paper>
                      </Grid2>
                    </Grid2>
                  </Paper>
                  <Paper style={{ boxShadow: "none" }}>
                    {/* Nested Grid */}
                    <Grid2 container spacing={2}>
                      <Grid2 item xs={6}>
                        <Paper
                          style={{
                            boxShadow: "none",
                            width: 100,
                            textAlign: "left",
                          }}
                        >
                          Average
                        </Paper>
                      </Grid2>
                      <Grid2 item xs={6}>
                        <Paper
                          style={{
                            boxShadow: "none",
                            width: 150,
                            textAlign: "left",
                            marginTop: 10,
                          }}
                        >
                          <BorderLinearProgress
                            variant="determinate"
                            value={20}
                            color="warning"
                          />
                        </Paper>
                      </Grid2>
                    </Grid2>
                  </Paper>

                  <Paper style={{ boxShadow: "none" }}>
                    {/* Nested Grid */}
                    <Grid2 container spacing={2}>
                      <Grid2 item xs={6}>
                        <Paper
                          style={{
                            boxShadow: "none",
                            width: 100,
                            textAlign: "left",
                          }}
                        >
                          Poor
                        </Paper>
                      </Grid2>
                      <Grid2 item xs={6}>
                        <Paper
                          style={{
                            boxShadow: "none",
                            width: 150,
                            textAlign: "left",
                            marginTop: 10,
                          }}
                        >
                          <BorderLinearProgress
                            variant="determinate"
                            value={15}
                            color="error"
                          />
                        </Paper>
                      </Grid2>
                    </Grid2>
                  </Paper>
                </Grid2>
              </Grid2>
            </Grid2>
          </div>
        </section>
        {
          //Similer Products Section
        }

        <section className="pt-6">
          <h1 className="py-5 text-xl font-bold text-left">Similer Products</h1>
          <div className="flex flex-wrap space-y-5">
            {product_details.map((item) => (
              <HomeSectionCard product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
