import React from "react";

function Search() {
  const [name, setName] = React.useState("");

  const handleSearch = () => {
    window.location.href = `/search/${name}`;
  };
  return (
    <>
      <section className="mt-3 mb-3">
        <div className="">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <input
              type="text"
              className={`form-control `}
              placeholder="Search Pasta, Bread, etc"
              aria-label="Search Pasta, Bread, etc"
              aria-describedby="basic-addon1"
              onChange={(e) => setName(e.target.value)}
            />
          </form>
        </div>
      </section>
    </>
  );
}
export default Search;
