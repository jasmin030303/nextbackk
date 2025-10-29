import { Router } from "express";
import controles from "./todo.controles";

const router = Router();

router.get("/get", controles.getAllData);
router.post("/post", controles.postAllData);
router.delete("/delete", controles.deleteData);
router.patch("/patch", controles.patchData);
router.put("/put", controles.upDateData);

export default router;
