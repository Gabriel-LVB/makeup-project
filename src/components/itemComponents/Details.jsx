import moment from "moment";
import Table from "./Table";
import Description from "./Description";

const Details = ({ item }) => {
  const getTags = () => {
    return (!!item.tag_list ? item.tag_list.map((tag) => tag) : null).join(
      ", "
    );
  };

  return (
    <div className="item__details">
      <div className="item__details__header">
        <h3 className="item__details title">Product Details</h3>
        <h4 className="item__details__since">
          <i className="fa-regular fa-clock"></i>
          {" updated " +
            moment(new Date(item.updated_at), "YYYYMMDD").fromNow()}
        </h4>
      </div>

      <Table
        rowsObj={{
          name: item.name,
          brand: item.brand,
          category: item.category,
          type: item.product_type,
          tags: getTags(),
          id: Date.parse(item.created_at).toString().slice(5),
          created: moment(new Date(item.created_at)).format("DD/MM/YYYY ha"),
        }}
      />
      <hr />
      <Description item={item} />
    </div>
  );
};

export default Details;
