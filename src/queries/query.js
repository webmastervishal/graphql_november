import { gql } from "@apollo/client";

export const FETCH_TODOS = gql`
  query fetchTodos {
    todos {
      id
      title
      status
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTodo($title: String!) {
    addTodo(title: $title) {
      id
      title
      status
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($id: String!) {
    updateTodo(id: $id) {
      id
      title
      status
    }
  }
`;
