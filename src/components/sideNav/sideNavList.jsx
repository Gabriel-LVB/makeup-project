import SideNavListItem from "./SideNavItem";
import StyledList from "../styles/List.styled";

const SideNavList = ({
  title,
  items,
  onListItemClick,
  toggleNav,
  closeLists,
}) => {
  const openListToggler = (e) => {
    let parent = e.target.closest(".side-nav__list__header");
    let toggler = parent.querySelector(".side-nav__list__toggler");
    let list = parent.nextElementSibling;
    let isOpen = list.className.includes("open");
    isOpen || closeLists();
    toggler.classList.toggle("open");
    list.classList.toggle("open");
  };

  return (
    <StyledList>
      <div className="side-nav__list__header" onClick={openListToggler}>
        <h2>{title}</h2>
        <button className="side-nav__list__toggler">
          <i className="fa-solid fa-caret-down"></i>
        </button>
      </div>
      <ul className={"side-nav__list " + title}>
        {items.map((item) => {
          return (
            <SideNavListItem
              key={item}
              name={item}
              title={title}
              onListItemClick={onListItemClick}
              toggleNav={toggleNav}
            />
          );
        })}
      </ul>
    </StyledList>
  );
};

export default SideNavList;