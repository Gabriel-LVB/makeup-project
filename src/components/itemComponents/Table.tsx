import TableRow from "./TableRow";
import ItemTypes from "../../types/item";

interface RowsObj {
  name: ItemTypes["name"];
  brand: ItemTypes["brand"];
  category: ItemTypes["category"];
  type: ItemTypes["product_type"];
  tags: string;
  id: string;
  created: string;
}

function Table({ rowsObj }: { rowsObj: RowsObj }) {
  const rows = () => {
    let array = [];
    for (const title in rowsObj) {
      if (Object.hasOwnProperty.call(rowsObj, title)) {
        const content = rowsObj[title as keyof typeof rowsObj];
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
}

export default Table;
