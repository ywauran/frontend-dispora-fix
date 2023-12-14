import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const AllForumPemuda = () => {
  const [forums, setForum] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getForumOlahraga(id);
  }, [id]);
  const getForumOlahraga = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/forum/kategori/${id}`
      );
      setForum(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  console.log(forums);

  // Handle ketika data bernilai null atau undefined
  // if (!forums) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      {/* <!-- Content --> */}
      <div className="grid grid-cols-2 place-items-center my-10">
        {forums.map((item) => (
          <Link
            to={`/forum/tampilan-forum/kategori/olahraga/${item.id}`}
            className="card w-96 h-[520px] bg-base-100 shadow-xl my-4"
            key={item.kategori} // Tambahkan kunci unik untuk setiap elemen
          >
            <figure>
              <img className="" src={item.URL} alt="Shoes" />
            </figure>
            <div className="card-body bg-white  rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title  flex flex-col">{item.nama_forum}</h2>
            </div>
          </Link>
        ))}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default AllForumPemuda;
