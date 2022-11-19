import Item from "./Item";
import { useQuery } from "@apollo/client";
import { FETCH_TODOS } from "./../queries/query";

const List = () => {
  const { data, error, loading } = useQuery(FETCH_TODOS);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Oops, soemthing went wrong</p>;

  return (
    <div>
      {data.todos.map((todo) => (
        <Item data={todo} />
      ))}
    </div>
  );
};

export default List;
