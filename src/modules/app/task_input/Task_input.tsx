import { Box, SxProps, Theme, Input, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Task_input = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const addTodos = () => {
    const newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
    setText("");
  };
  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <Box className="Task_input" sx={sx}>
      <Button className="cancel">キャンセル</Button>
      <Button className="keep">保存</Button>
      <Box className="title">タスクを入力する</Box>
      <br />
      <Box className="input">
        <Input type="text" value={text} onChange={changeText} />
        <Button onClick={addTodos}>追加</Button>
        <div>
          <ul>
            {todos.map((todo, index) => (
              <li key={todo}>
                <p>{todo}</p>
                <Button onClick={() => deleteTodo(index)}>完了</Button>
              </li>
            ))}
          </ul>
        </div>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Task_input": {
    width: "100%",
  },

  ".title": {
    fontSize: "30px",
    textAlign: "center",
  },

  ".cancel": {
    fontSize: "17px",
    align: "left",
    whiteSpace: "nowrap",
  },

  ".keep": {
    fontSize: "17px",
    align: "right",
  },

  ".input": {
    fontSize: "30px",
    textAlign: "center",
  },
};
