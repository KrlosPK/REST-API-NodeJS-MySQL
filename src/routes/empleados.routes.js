import { Router } from 'express'
import { getEmployees, getEmployeeById, createEmployee, patchEmployee, deleteEmployee } from '../controllers/empleados.controller.js'

const empleadosRoutes = Router()

// ? GET
empleadosRoutes.get('/empleados', getEmployees)
empleadosRoutes.get('/empleados/:id', getEmployeeById)

// ? POST
empleadosRoutes.post('/crearEmpleado', createEmployee)

// ? PATCH
empleadosRoutes.patch('/editarEmpleado/:id', patchEmployee)

// ? DELETE
empleadosRoutes.delete('/eliminarEmpleado/:id', deleteEmployee)

export { empleadosRoutes }
