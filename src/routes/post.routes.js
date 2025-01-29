import { Router } from "express";

const router = Router();

// Ruta POST para crear un usuario
router.post("/users", async (req, res) => {
  try {
    const params = req.body;

    // Validación básica
    if (!name || !email || !password) {
      return res.status(400).send("Todos los campos son obligatorios");
    }

    // Crear un nuevo usuario
    const newUser = new User(params);
    const result = await newUser.save();

    res.status(201).send({
      message: "Usuario creado exitosamente",
      user: result,
    });
  } catch (error) {
    res.send({
      status: "Error",
      message: error,
    });
  }
});

export { router };
