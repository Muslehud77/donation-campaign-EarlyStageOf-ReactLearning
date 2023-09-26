import { BiSearchAlt } from "react-icons/bi";

const Banner = ({ setSearch }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  return (
    <div className="bg-cyan-100 bg-opacity-40">
      <img
        src="https://i.ibb.co/0KgFsv2/donate-colored-horizontal-outline-banner-vector-20202314-2.jpg"
        alt=""
        className="w-full h-[550px] object-cover absolute top-0 opacity-25 -z-10"
      />
      <div className="h-[550px] flex justify-center pt-72 items-center relative mix-blend-darken">
        <div className="absolute flex flex-col justify-center items-center space-y-5">
          <div className="bg-gray-400 bg-opacity-30 px-10 py-2 rounded-xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-center ">
              We Grow By Helping People In Need
            </h1>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="relative" action="">
              <input
              list="site-list"
                name="search"
                type="text"
                placeholder="Search here"
                className="input border-gray-700 placeholder:text-black input-bordered w-full max-w-xs text-black"
              />
              <datalist id="site-list">
                <option value="food"></option>
                <option value="health"></option>
                <option value="education"></option>
                <option value="clothing"></option>
              </datalist>
              <button className="absolute top-3 right-1">
                <BiSearchAlt className="text-3xl"></BiSearchAlt>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
