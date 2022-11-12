import StyledSideNav from "./styles/SideNav.styled";
import SNList from "./sideNavList";

const SideNav = ({ brandNames, categoryNames, tagNames }) => {
  const toggleNav = () => {
    const sideNav = document.querySelector(".side-nav");
    sideNav.classList.toggle("open");
  };

  return (
    <StyledSideNav className="side-nav open">
      <button className="side-nav__btn" onClick={toggleNav}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className="side-nav__bg" onClick={toggleNav}></div>
      <div className="side-nav__container">
        <h1>Products </h1>
        <SNList title="Categories" items={categoryNames} />
        <SNList title="Brands" items={brandNames} />
        <SNList title="Tags" items={tagNames} />
      </div>
    </StyledSideNav>
  );
};

export default SideNav;
