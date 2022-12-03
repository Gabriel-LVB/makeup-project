interface TRProps {
  title: string;
  content: string | null;
}

function TR({ title, content }: TRProps) {
  return (
    <tr className="table__row">
      <th className="table__row__title">{title}:</th>
      <td className="table__row__content">{content}</td>
    </tr>
  );
}

export default TR;
