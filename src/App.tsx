import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Tasks</h1>
        
        <div className="flex gap-2 mb-6">
          <Input
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addTodo()}
            placeholder="Add a new task..."
            className="flex-1"
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        <div className="space-y-3">
          {todos.map((todo, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-gray-700">{todo}</span>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeTodo(index)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
