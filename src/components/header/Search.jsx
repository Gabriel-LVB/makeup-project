const Search = ({ title, search, setSearch, onSearchSubmit }) => {
  return (
    <form className="search" onSubmit={onSearchSubmit}>
      <input
        type="text"
        className="search__input"
        placeholder={`Search in ${title}`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search__btn">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default Search;
