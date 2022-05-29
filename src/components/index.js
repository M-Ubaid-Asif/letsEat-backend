import { Router } from "express"
import webRouter from "./web/webRoute.js"
const router = Router()

router.use(webRouter)
export default router
