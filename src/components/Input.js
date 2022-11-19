import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_TODO, FETCH_TODOS } from "./../queries/query";

const Input = () => {
  const [todo, setTodo] = useState();
  const [addTodo, { data, error, loading }] = useMutation(ADD_TODO);

  const handleAddTodo = () => {
    addTodo({
      variables: {
        title: todo,
      },
      refetchQueries: [
        {
          query: FETCH_TODOS,
        },
      ],
    });
  };

  if (loading) return <p>loading...</p>;
  if (error) return <p>soemthing went wrong...</p>;

  return (
    <div>
      <input
        type="text"
        name="todo"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default Input;
