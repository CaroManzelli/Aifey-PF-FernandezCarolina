import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <Link to="/">
        {" "}
        <img
          src="https://res.cloudinary.com/dtkr8ubqa/image/upload/v1691272773/samples/aifey/404notfound_ndbjnh.svg"
          alt=""
          style={{ height: "650px" }}
        />
      </Link>
    </div>
  );
};

export default Notfound;
