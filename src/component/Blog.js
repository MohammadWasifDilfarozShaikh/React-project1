import React from "react";
import { Link } from "react-router-dom";
import shoesImg from './brown shoes.webp'
function Blog() {
  return (
    <div className="container-fluid vh-100">
      <div className="row row-cols-2 align-items-center justify-content-center vh-100">
        <div className="col text-center">
          <img src={shoesImg} alt="" width={500} className="img-fluid" />
        </div>
        <div className="col">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In veniam cumque possimus, nihil fugit modi facere soluta delectus labore? Aliquid repellendus pariatur expedita ad nihil eveniet magnam harum sit! Ipsam.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In veniam cumque possimus, nihil fugit modi facere soluta delectus labore? Aliquid repellendus pariatur expedita ad nihil eveniet magnam harum sit! Ipsam.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In veniam cumque possimus, nihil fugit modi facere soluta delectus labore? Aliquid repellendus pariatur expedita ad nihil eveniet magnam harum sit! Ipsam.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In veniam cumque possimus, nihil fugit modi facere soluta delectus labore?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In veniam cumque possimus, nihil fugit modi facere soluta delectus labore? Aliquid repellendus pariatur expedita ad nihil eveniet magnam harum sit! Ipsam.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In veniam cumque possimus, nihil fugit modi facere soluta delectus labore? Aliquid repellendus pariatur expedita ad nihil eveniet magnam harum sit! Ipsam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
