import CartWidget from "../common/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import * as React from "react";

const Navbar = () => {
  return (
    <div>
      <div className={"containerNavbar"}>
        <Link to="/">
          {" "}
          <img
            src="https://res.cloudinary.com/dtkr8ubqa/image/upload/v1688911652/samples/aifey/aifey_yorode.png"
            alt=""
          />
        </Link>

        <ul className="categories">
          <Link to="/">
            <h2>Todos los Productos</h2>
          </Link>
          <Link to="/category/anillos">
            <h2>Anillos</h2>
          </Link>
          <Link to="/category/aritos">
            <h2>Aritos</h2>
          </Link>
          <Link to="/category/collares">
            <h2>Collares</h2>
          </Link>
        </ul>
        <Link to="/cart">
          <div className="CartWidget">
            <CartWidget />
          </div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
