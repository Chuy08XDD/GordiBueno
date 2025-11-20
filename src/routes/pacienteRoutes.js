// src/routes/pacienteRoutes.js

import { Router } from "express";
import path from "path";
import { PacienteController } from "../controllers/MedicoController.js"

const router = Router();

//ruta principal
router.get("/", (req,res) =>{
    return res.sendFile(path.join(process.cwd(), "src", "views", "Personal_Recepcion", "Pacientes.html"))
});
//esas no se ocupan no las pongas todavia por algo estan comen
//me llega al pincho 🥵