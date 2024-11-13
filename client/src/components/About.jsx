import React, { useState } from "react";

const About = () => {
  const url=[
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146702/the-great-gatsby-9781982146702_xlg.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_(first_edition_cover).jpg/440px-To_Kill_a_Mockingbird_(first_edition_cover).jpg",
  ]
  const [img,setimg]=useState([]);
  return (
    <div>
      <div className="mt-20 p-10">
        <div>
          <div className="">
            <img src="https://s.gr-assets.com/assets/about/headerImages/About-Carousel-2-9009546b74c49cece686733bbbf5e5d7.jpg" alt="" className="min-w-full" />
            <h2 className="text-3xl absolute top-[90%] text-white font-bold px-10 text-center">
            MX: "The right book in the right hands at the right time
            can change the world"
            </h2>
          </div>
        </div>
        <div className="flex flex-col py-10 space-y-5">
          <h1 className="text-3xl font-semibold">Who We Are</h1>
          <p>
            Goodreads is the world’s largest site for readers and book
            recommendations. Our mission is to help readers discover books they
            love and get more out of reading. Goodreads launched in January
            2007.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-3xl text-center text-amber-400 font-bold">A Few Things You Can Do On Goodreads</h2>
          <p>
            See what books your friends are reading. Track the books you're
            reading, have read, and want to read. Check out your personalized
            book recommendations. Our recommendation engine analyzes 20 billion
            data points to give suggestions tailored to your literary tastes.
            Find out if a book is a good fit for you from our community’s
            reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
