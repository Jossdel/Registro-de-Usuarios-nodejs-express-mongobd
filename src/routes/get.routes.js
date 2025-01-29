import { Router } from "express";

const router = Router();

// Ruta GET para obtener todos los usuarios
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).send({ message: "Error interno del servidor" });
  }
});

export { router };
