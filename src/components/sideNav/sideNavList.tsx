import SideNavListItem from "./SideNavItem";
import StyledList from "../styles/List.styled";
import React from "react";
import { OnListItemClickType } from "../../types/types";

interface SideNavListTypes {
  title: string;
  names: string[];
  onListItemClick: OnListItemClickType;
  toggleNav(): void;
  closeLists(): void;
}

export default function SideNavList({
  title,
  names,
  onListItemClick,
  toggleNav,
  closeLists,
}: SideNavListTypes) {
  const openListToggler = (e: React.MouseEvent) => {
    let target = e.target as Element;
    let parent = target.closest(".side-nav__list__header");
    let toggler = parent!.querySelector(".side-nav__list__toggler");
    let list = parent!.nextElementSibling;
    let isOpen = list!.className.includes("open");
    isOpen || closeLists();
    toggler!.classList.toggle("open");
    list!.classList.toggle("open");
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
        {names.map((name) => {
          return (
            <SideNavListItem
              key={name}
              name={name}
              title={title}
              onListItemClick={onListItemClick}
              toggleNav={toggleNav}
            />
          );
        })}
      </ul>
    </StyledList>
  );
}
