import prisma from "@/db";

export default function handler(req: any, res: any) {
  // handle for POST
  const body = req.body ? JSON.parse(req.body) : {};

  if (req.method === "POST") {
    // create a new todo
    // return the created todo
    prisma.todo
      .create({
        data: {
          task: body.task,
        },
      })
      .then((todo) => {
        return res.status(200).json(todo);
      });
  }
  // handle for GET
  if (req.method === "GET") {
    prisma.todo.findMany().then((todos) => {
      return res.status(200).json(todos);
    });
  }
  if (req.method === "PUT") {
    // update a todo
    // return the updated todo
    prisma.todo
      .update({
        where: {
          id: body.id,
        },
        data: {
          task: body.task,
        },
      })
      .then((todo) => {
        return res.status(200).json(todo);
      });
  }
  if (req.method === "DELETE") {
    prisma.todo
      .delete({
        where: {
          id: body.id,
        },
      })
      .then((todo) => {
        return res.status(200).json(todo);
      });
  }
}
