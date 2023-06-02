import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBCol,
  MDBCardTitle,
  MDBRow,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";

const RelatedBlogs = ({ relatedBlogs, blogId }) => {
  return (
    <>
      {relatedBlogs && relatedBlogs.length > 0 && (
        <>
          {relatedBlogs.length > 1 && <h4>Related Blogs</h4>}
          <MDBRow className="row-cols-1 row-cols-md-3 g-4">
            {relatedBlogs
              .filter((item) => item._id !== blogId)
              .splice(0, 3)
              .map((item, index) => (
                <MDBCol key={index}>
                  <MDBCard>
                    <Link to={`/blog/${item._id}`}>
                      <MDBCardImage
                        src={item.imageFile}
                        alt={item.title}
                        position="top"
                        style={{ maxWidth: "100%", height: "280px" }}
                      />
                    </Link>
                    <span className="text-start tag-card">
                      {item.tags.map((tag, index) => (
                        <Link key={index} to={`/blogs/tag${tag}`}>#{tag}</Link>
                      ))}
                    </span>
                    <MDBCardBody>
                      <Link to={`/blog/${item._id}`}>
                        <MDBCardTitle className="text-start" style={{color: '#4f4f4f'}}>
                          {item.title}
                        </MDBCardTitle>
                      </Link>
                      <MDBCardText className="text-start">
                        {excerpt(item.description, 45)}
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
          </MDBRow>
        </>
      )}
    </>
  );
};

export default RelatedBlogs;
