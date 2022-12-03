import { OnListItemClickType } from "../../types/types";

interface SideNavListItemTypes {
  name: string;
  onListItemClick: OnListItemClickType;
  toggleNav(): void;
  title: string;
}

export default function SideNavListItem({
  name,
  onListItemClick,
  toggleNav,
  title,
}: SideNavListItemTypes) {
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
}
