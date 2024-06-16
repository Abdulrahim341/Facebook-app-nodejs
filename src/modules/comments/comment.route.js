import { Router } from "express";
import * as commentcontroller from './comment.controller.js'
const router=Router()
router.get('/',commentcontroller.allcomments)
router.post('/createcomment',commentcontroller.createComment)
router.post('/:id',commentcontroller.updateComment)
router.delete('/:id',commentcontroller.deleteComment)



export default router