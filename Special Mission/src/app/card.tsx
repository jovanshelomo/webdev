import { useState } from "react";

export const Card = ({
  initialTask,
  updateTodo,
  deleteTodo,
}: {
  initialTask: {
    id: number;
    task: string;
  };
  updateTodo: (text: string) => void;
  deleteTodo: () => void;
}) => {
  const [text, setText] = useState(initialTask.task);
  const [isEdited, setIsEdited] = useState(false);
  return (
    <div
      key={initialTask.id}
      className="flex flex-row items-center justify-center bg-white rounded-lg shadow-lg p-3 w-full gap-2"
    >
      <input
        className="flex-1 p-2"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setIsEdited(e.target.value !== initialTask.task);
        }}
        onBlur={() => {
          isEdited && updateTodo(text);
          setIsEdited(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            isEdited && updateTodo(text);
            setIsEdited(false);
          }
        }}
      />
      <button
        className="bg-red-500 p-2 rounded-lg text-white shadow-md"
        onClick={() => {
          deleteTodo();
        }}
      >
        delete
      </button>
    </div>
  );
};
