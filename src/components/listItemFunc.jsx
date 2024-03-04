function manageCount(count) {
  return `${count}个`;
}
const ListItem = (props) => {
  return (
    <div className="row mb-3">
      <div className="col-6 list-group-item">{props.data.name}</div>
      <div className="col-1 list-group-item">${props.data.price}</div>
      <div className="col-2 list-group-item">
        {manageCount(props.data.stock)}
      </div>
    </div>
  );
};

export default ListItem;
