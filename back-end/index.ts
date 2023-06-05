import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Rota de exemplo para criar um usuário
app.post("/users", async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Erro ao criar usuário" });
  }
});

// Rota de exemplo para listar todos os usuários
app.get("/users", async (_req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: "Erro ao buscar usuários" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});