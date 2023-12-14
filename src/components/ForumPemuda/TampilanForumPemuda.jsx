import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import bg from "../../assets/img/Dispora 1.png";
import bg1 from "../../assets/img/gotongroyong.jpeg";

interface Comment {
  body: string;
  comments: Array<Comment>;
}

const dummyComments: Array<Comment> = [];

const TampilanForumPemuda = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [pemudas, setPemuda] = useState([]);
  const [comments, setComments] = useState(dummyComments);

  const onComment = (newComment: Comment) => {
    setComments((prev) => [newComment, ...prev]);
  };

  useEffect(() => {
    getForumByKategori(id);
  }, [id]);

  const getForumByKategori = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/forum/${id}`);
      setPemuda(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Forum", pemudas);

  return (
    <div className="flex-col ">
      {/* <!-- Content --> */}
      <div className="  bg-red-400  items-center ">
        {pemudas.map((item) => (
          <div className="flex flex-col">
            <h1 className="text-xl text-center ">{item.nama_forum}</h1>
            <img
              src={item.URL}
              alt=""
              className="flex  rounded-xl w-[700px] mx-auto my-[50px]"
            />
          </div>
        ))}
        <div className="flex flex-col gap-2  items-start h-screen p-6">
          <span className="text-xl font-bold">Tuliskan pendapat anda</span>

          <CommentInput onComment={onComment} />
          <div className="flex flex-col gap-4">
            {comments.map((comment) => (
              <CommentItem comment={comment} />
            ))}
          </div>
        </div>
      </div>
      {/* <!-- content end --> */}
    </div>
  );
};

interface CommectItemProps {
  comment: Comment;
}

const CommentItem = ({ comment }: CommectItemProps) => {
  const [isReplying, setIsReplying] = useState(false);
  const [comments, setComments] = useState(comment.comments);

  const onComment = (newComment: Comment) => {
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <div className="flex flex-col border-l-[2px]   border-red-800 rounded-md p-3 w-[950px] my-3 mx-10">
      <span>{comment.body}</span>
      <div className="mb-4">
        {isReplying ? (
          <button
            onClick={() => setIsReplying(false)}
            className="bg-red-800 rounded-full w-28 text-white"
          >
            batal komen
          </button>
        ) : (
          <button
            onClick={() => setIsReplying(true)}
            className="bg-red-800 rounded-full w-28 text-white"
          >
            balas komen
          </button>
        )}
      </div>
      {isReplying && <CommentInput onComment={onComment} />}
      <div className="flex flex-col gap-3">
        {comments.map((comment) => (
          <CommentItem comment={comment} />
        ))}
      </div>
    </div>
  );
};

interface CommentInputProps {
  onComment: (newComment: Comment) => void;
}

const CommentInput = ({ onComment }: CommentInputProps) => {
  const [commentBody, setCommentBody] = useState("");
  return (
    <div className="flex flex-col">
      <input
        value={commentBody}
        onChange={(event) => setCommentBody(event.target.value)}
        className="input input-bordered input-accent bg-white  border-red-800 p-2 w-[950px]"
        placeholder="Komentar"
        type="text"
        name=""
        id=""
      />
      <button
        onClick={() => {
          onComment({ body: commentBody, comments: [] });
          setCommentBody("");
        }}
        className="bg-red-800 rounded-full w-28 mt-2 py-2"
      >
        Kirim
      </button>
    </div>
  );
};

export default TampilanForumPemuda;
