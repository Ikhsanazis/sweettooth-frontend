import React from "react";

function Comment(props) {
  const { data } = props;
  const profdummy = `../images/profil.jpg`;

  return (
    <>
      <div>
        <h4>Comment</h4>
        {data?.map((item) => (
          <div
            className=""
            key={item?.comment_id}
            style={{
              padding: "10px",
              border: "none",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            <div className="row">
              <div className="col-2">
                <img
                  crossOrigin="anonymous"
                  src={
                    item?.image
                      ? `https://sweettooth-app.herokuapp.com/images/${item?.image}`
                      : profdummy
                  }
                  width="80px"
                  height="80px"
                  style={{ borderRadius: "50%" }}
                  alt=""
                />
              </div>
              <div className="col-9">
                <div>
                  <h6>{item?.username}</h6>
                  <p>{item?.comment}</p>
                  <div
                    style={{ marginTop: "-10px" }}
                    className="d-flex gap-1 align-items-center"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Comment;
