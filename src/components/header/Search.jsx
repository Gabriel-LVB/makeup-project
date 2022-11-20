import StyledBtn from "../styles/Button.styled";

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
      <StyledBtn className="search__btn">
        <i className="fa-solid fa-magnifying-glass"></i>
      </StyledBtn>
    </form>
  );
};

export default Search;
