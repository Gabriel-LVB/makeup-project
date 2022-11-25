import StyledPagination from "../styles/pagination.styled";
import { useSelector, useDispatch } from "react-redux";
import { setCurrent } from "../../reducers/pagination";

const Pagination = ({ currentPage }) => {
  const dispatch = useDispatch();

  const pagesNumber = useSelector((state) => state.pagination.value.numOfPages);
  if (pagesNumber === 0) {
    return null;
  }

  let allPages = Array(pagesNumber).fill(0);
  allPages = allPages.map((v, i) => (
    <li
      key={i + 1}
      className={
        i + 1 === currentPage ? "pagination__item current" : "pagination__item"
      }
      onClick={() => {
        dispatch(setCurrent(i + 1));
      }}
    >
      {i + 1}
    </li>
  ));

  const pagesToShow = allPages.filter(
    (page) =>
      +page.key === currentPage ||
      (+page.key > currentPage - 3 && +page.key < currentPage + 3) ||
      (currentPage < pagesNumber - 2 && +page.key === pagesNumber) ||
      (currentPage > 3 && +page.key === 1)
  );
  if (currentPage < pagesNumber - 2) {
    pagesToShow.splice(
      -1,
      0,
      <li key="dots end" className="pagination__item dots">
        {"..."}
      </li>
    );
  }
  if (currentPage > 3) {
    pagesToShow.splice(
      1,
      0,
      <li key="dots start" className="pagination__item dots">
        {"..."}
      </li>
    );
  }
  pagesToShow.unshift(
    <li
      key={"previous"}
      className="pagination__item"
      onClick={() => {
        dispatch(
          setCurrent(currentPage - 1 >= 1 ? currentPage - 1 : currentPage)
        );
      }}
    >
      {"Previous"}
    </li>
  );
  pagesToShow.push(
    <li
      key="next"
      className="pagination__item"
      onClick={() => {
        dispatch(
          setCurrent(
            currentPage + 1 <= pagesNumber ? currentPage + 1 : currentPage
          )
        );
      }}
    >
      {"Next"}
    </li>
  );

  return <StyledPagination>{pagesToShow}</StyledPagination>;
};

export default Pagination;
