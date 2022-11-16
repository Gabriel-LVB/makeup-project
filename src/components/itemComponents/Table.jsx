import TableRow from "./TableRow";

const Table = ({ rowsObj }) => {
  const rows = () => {
    let array = [];
    for (const title in rowsObj) {
      if (Object.hasOwnProperty.call(rowsObj, title)) {
        const content = rowsObj[title];
        array.push(<TableRow key={title} title={title} content={content} />);
      }
    }
    return array;
  };

  return (
    <table>
      <tbody>{rows()}</tbody>
    </table>
  );
};

export default Table;
