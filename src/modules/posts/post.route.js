import { Router } from "express";
import * as postcontroller from './post.controller.js'
const router=Router()
router.get('/',postcontroller.allposts)
router.get('/:id',postcontroller.getpost)
router.post('/createpost',postcontroller.createpost)
router.put('/:id',postcontroller.updatePost)
router.delete('/:id',postcontroller.deletePost)



export default router