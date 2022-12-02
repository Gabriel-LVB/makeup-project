import StyledSideNav from "../styles/SideNav.styled";
import SNList from "./sideNavList";
import StyledBtn from "../styles/Button.styled";
import { brandNames, categoryNames, tagNames } from "../../features/names";

const SideNav = ({ onListItemClick }) => {
  const closeLists = () => {
    const lists = document.querySelectorAll(".side-nav__list");
    const togglers = document.querySelectorAll(".side-nav__list__toggler");
    lists.forEach((list) => {
      list.classList.remove("open");
    });
    togglers.forEach((toggler) => {
      toggler.classList.remove("open");
    });
  };

  const toggleNav = () => {
    const sideNav = document.querySelector(".side-nav");
    sideNav.classList.toggle("open");
    closeLists();
  };

  return (
    <StyledSideNav className="side-nav">
      <StyledBtn className="side-nav__btn" onClick={toggleNav}>
        <i className="fa-solid fa-bars"></i>
      </StyledBtn>
      <div className="side-nav__bg" onClick={toggleNav}></div>
      <div className="side-nav__container">
        <h1>Products </h1>
        <SNList
          title="categories"
          items={categoryNames}
          onListItemClick={onListItemClick}
          toggleNav={toggleNav}
          closeLists={closeLists}
        />
        <SNList
          title="brands"
          items={brandNames}
          onListItemClick={onListItemClick}
          toggleNav={toggleNav}
          closeLists={closeLists}
        />
        <SNList
          title="tags"
          items={tagNames}
          onListItemClick={onListItemClick}
          toggleNav={toggleNav}
          closeLists={closeLists}
        />
      </div>
    </StyledSideNav>
  );
};

export default SideNav;