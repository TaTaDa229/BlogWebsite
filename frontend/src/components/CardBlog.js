import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardGroup,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { likeBlog } from "../redux/features/blogSlice";

function CardBlog({ imageFile, description, title, tags, _id, name, likes }) {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const userId = user?.result?._id || user?.result?.googleId;

  const dispatch = useDispatch();
  const excerpt = (str) => {
    if (str.length > 45) {
      str = str.substring(0, 45) + "...";
    }
    return str;
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId) ? (
        <>
          <MDBIcon fas icon="thumbs-up" />
          &nbsp;
          {likes.length > 1 ? (
            <MDBTooltip
              tag="a"
              title={`You and ${likes.length - 1} other people likes`}
            >
              {likes.length} Likes
            </MDBTooltip>
          ) : (
            `${likes.length} Like${likes.length > 1 ? "s" : ""}`
          )}
        </>
      ) : (
        <>
          <MDBIcon far icon="thumbs-up">
            &nbsp;{likes.length} {likes.length === 1 ? "like" : "Likes"}
          </MDBIcon>
        </>
      );
    }
    return (
      <>
        <MDBIcon far icon="thumbs-up" />
        &nbsp; Like
      </>
    );
  };

  const handleLike = () => {
    dispatch(likeBlog({ _id }));
  };

  return (
    <MDBCardGroup>
      <MDBCard className="h-100 mt-2 d-sm-flex" style={{ maxWidth: "20rem" }}>
        <Link to={`/blog/${_id}`}>
          <MDBCardImage
            src={imageFile}
            alt={title}
            position="top"
            style={{ maxWidth: "100%", height: "180px" }}
          />
        </Link>

        <div
          className="top-left"
          style={{
            backgroundColor: "#9999",
            padding: "0 8px",
            borderRadius: "90%",
          }}
        >
          {name}
        </div>
        <span className="text-start tag-card">
          {tags.map((tag, index) => (
            <Link key={index} to={`/blogs/tag/${tag}`}>
              #{tag}
            </Link>
          ))}
          <MDBBtn
            style={{ float: "right", border: 'none', backgroundColor:'#fff', color: '#1266f1' }}
            color="none"
            onClick={!user?.result ? null : handleLike}
          >
            {!user?.result ? (
              <MDBTooltip title="Please login to like blog" tag="a">
                <Likes />
              </MDBTooltip>
            ) : (
              <Likes />
            )}
          </MDBBtn>
        </span>
        <MDBCardBody>
          <MDBCardTitle className="text-start">{title}</MDBCardTitle>
          <MDBCardText className="text-start">
            {excerpt(description)}
            <Link to={`/blog/${_id}`}>Read more</Link>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}

export default CardBlog;
