const Search = () => {
  return (
    <form className="search">
      <input type="text" className="search__input" />
      <button className="search__btn">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default Search;
