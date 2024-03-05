import { useLocation } from "react-router-dom";

const getQuery = (search) => {
  const query = new URLSearchParams(search);
  console.log(query.toString());
  return query;
};

const Post = () => {
  const routeQuery = getQuery(useLocation().search);
  console.log(routeQuery.get("uid"));
  return <div>Post</div>;
};

export default Post;