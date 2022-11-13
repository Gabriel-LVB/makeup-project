const SideNavListItem = ({ name, onListItemClick, toggleNav, title }) => {
  return (
    <li
      className="side-nav__list__item"
      onClick={() => {
        onListItemClick(name, title);
        toggleNav();
      }}
    >
      {name}
    </li>
  );
};

export default SideNavListItem;
