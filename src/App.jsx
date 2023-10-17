import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const handleThemeSwitch = () => {
    setTheme("dark");
  };

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <TodoList />
    </>
  );
}

export default App;

