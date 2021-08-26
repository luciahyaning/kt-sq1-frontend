import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { getTodos } from "../../api/todoApi";

export const Main: React.FC = () => {
  const { data: todos, isLoading } = useQuery("group", () => getTodos());

  return (
    <div className="text-center py-4" style={{ backgroundColor: "#282c34" }}>
      <Container>
        <ul>
          {todos &&
            todos.map((todo) => {
              return <li>{todo.description}</li>;
            })}
        </ul>
      </Container>
    </div>
  );
};
