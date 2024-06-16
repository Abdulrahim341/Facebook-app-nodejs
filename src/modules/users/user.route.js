import { Router } from "express";
import * as usercontroller from './user.controller.js'
const router= Router()
router.get('/:id',usercontroller.getuser)
router.post('/signup',usercontroller.signUp)
router.post('/login',usercontroller.logIn)
router.post('/logout',usercontroller.logout)


export default router