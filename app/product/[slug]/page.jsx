"use client"
import { useEffect, useState } from "react";

const SingleProduct = ({ params }) => {
  const [singlePost, setSinglePost] = useState(null);

  useEffect(() => {
    // Assuming params.slug is the ID or slug of the post
    fetch(`https://fakestoreapi.com/products/${params.slug}`)
      .then((res) => res.json())
      .then((data) => setSinglePost(data));
  }, [params.slug]);

  return (
    <div>
      <h2>Single product</h2>
      {singlePost ? (
           <div>
              <img src={singlePost.image} alt="image" />
          <h3>{singlePost.title}</h3>
          <p>{singlePost.description}</p>
          {/* Include other details you want to display */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;
