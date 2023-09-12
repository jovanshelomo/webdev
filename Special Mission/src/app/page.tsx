"use client";
import prisma from "@/db";
import { useEffect, useState } from "react";
import { Card } from "./card";

export default function Home() {
  const [todos, setTodos] = useState<
    {
      id: number;
      task: string;
    }[]
  >([]);
  const [text, setText] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    setIsLoaded(false);
    fetch(`/api/todo`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsLoaded(true);
      });
  };

  const addTodo = async (task: string) => {
    fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify({ task }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos([...todos, data]);
        setText("");
      });
  };

  const deleteTodo = async (id: number) => {
    fetch(`/api/todo`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    }).then(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
    });
  };

  const updateTodo = async (id: number, task: string) => {
    fetch(`/api/todo`, {
      method: "PUT",
      body: JSON.stringify({ id, task }),
    }).then(() => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            todo.task = task;
          }
          return todo;
        })
      );
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between h-full">
      <div className="flex flex-col items-center justify-center w-full max-w-xl h-[100vh]">
        <h1 className="text-4xl font-bold w-full text-center mb-5 pt-8">
          Todos
        </h1>
        <div className="flex flex-col items-center justify-center w-full flex-1">
          <div className="flex-1 w-full px-3">
            <div className="flex flex-col justify-start gap-4 w-full">
              {!isLoaded && (
                <div className="flex flex-col items-center justify-center p-2">
                  <p>Loading...</p>
                </div>
              )}
              {!todos.length && isLoaded && (
                <div className="flex flex-col items-center justify-center p-2">
                  <p>No todos yet</p>
                </div>
              )}
              {todos.map((todo) => (
                <Card
                  key={todo.id}
                  initialTask={todo}
                  updateTodo={(text) => updateTodo(todo.id, text)}
                  deleteTodo={() => deleteTodo(todo.id)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg p-2 w-full shadow-md gap-2 justify-stretch">
            <input
              type="text"
              placeholder="Add task"
              className="border-2 border-gray-300 rounded-lg p-2 w-full"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTodo(text);
                  setText("");
                }
              }}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg p-2 w-full"
              onClick={() => {
                addTodo(text);
                setText("");
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
