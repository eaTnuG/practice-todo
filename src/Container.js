import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Item from "./Item";
import Input from "./Input";

const TYPE = {
  STUDY: "공부",
  BLOG: "블로그",
  ETC: "기타"
};

const STATUS = {
  DONE: "done",
  YET: "yet",
  DELETED: "deleted"
};

const Container = props => {
  const [todos, setTodos] = useState([{ type: TYPE.STUDY, label: "스토리북 정리하기", status: STATUS.DONE }]);

  const hanldeAddTodo = todo => setTodos([...todos, todo]);
  const handleStatusChange = todo =>
    setTodos(
      todos.map(_todo => {
        if (JSON.stringify(_todo) === JSON.stringify(todo)) {
          return {
            ...todo,
            status: todo.status === STATUS.YET ? STATUS.DONE : STATUS.DELETED
          };
        } else return _todo;
      })
    );
  return (
    <Wrapper>
      <Header />
      <Input hanldeAddTodo={hanldeAddTodo} />
      <ItemContainer>
        {todos
          ?.filter(todo => todo.status !== STATUS.DELETED)
          ?.map((todo, index) => (
            <Item
              todo={todo}
              key={index}
              onClick={() => {
                handleStatusChange(todo);
              }}
            />
          ))}
      </ItemContainer>
    </Wrapper>
  );
};
export default Container;

const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  background: ivory;
  border: 1px solid black;
  overflow: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px grey;
`;
const ItemContainer = styled.div`
  overflow: auto;

  width: 100%;
  height: 70%;
  padding: 0 5%;
`;
