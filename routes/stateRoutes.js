import express from 'express';
import { setState, getState } from "../controllers/stateController";

const router = express.Router();
router.post('/', setState);
router.get('/:key',  getState);

export default router;