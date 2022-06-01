import { Router } from "express"
import webRouter from "./web/webRoute.js"
import userRouter from "./users/userRoute.js"
const router = Router()

router.use("/", webRouter)
router.use("/user", userRouter)
export default router
