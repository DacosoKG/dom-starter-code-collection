const carouselData = [
  {
    name: "high-back bench",
    id: "rec43w3ipXvP28vog",
    image: "/images/product-1.jpeg",
  },
  {
    name: "albany table",
    id: "rec4f2RIftFCb7aHh",
    image: "/images/product-2.jpeg",
  },
  {
    name: "accent chair",
    id: "rec8kkCmSiMkbkiko",
    image: "/images/product-3.jpeg",
  },
  {
    name: "wooden table",
    id: "recBohCqQsot4Q4II",
    image: "/images/product-4.jpeg",
  },
  {
    name: "dining table",
    id: "recDG1JRZnbpRHpoy",
    image: "/images/product-5.jpeg",
  },
  {
    name: "sofa set",
    id: "recNWGyP7kjFhSqw3",
    image: "/images/product-6.jpeg",
  },
  {
    name: "modern bookshelf",
    id: "recZEougL5bbY4AEx",
    image: "/images/product-7.jpeg",
  },
  {
    name: "emperor bed",
    id: "recjMK1jgTb2ld7sv",
    image: "/images/product-8.jpeg",
  },
  {
    name: "utopia sofa",
    id: "recmg2a1ctaEJNZhu",
    image: "/images/product-9.jpeg",
  },
  {
    name: "entertainment center",
    id: "recvKMNR3YFw0bEt3",
    image: "/images/product-10.jpeg",
  },
  {
    name: "albany sectional",
    id: "recxaXFy5IW539sgM",
    image: "/images/product-11.jpeg",
  },
  {
    name: "leather sofa",
    id: "recyqtRglGNGtO4Q5",
    image: "/images/product-12.jpeg",
  },
];

const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
const captionText = document.getElementById("caption");

slides[0].style.display = "block";
dots[0].className += " active";
captionText.innerHTML = dots[0].alt;
