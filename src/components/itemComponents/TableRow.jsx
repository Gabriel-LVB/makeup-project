const TR = ({ title, content }) => {
  return (
    <tr className="table__row">
      <th className="table__row__title">{title}:</th>
      <td className="table__row__content">{content}</td>
    </tr>
  );
};

export default TR;
