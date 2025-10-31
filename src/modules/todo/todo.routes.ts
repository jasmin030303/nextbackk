import { Router } from "express";
import controles from "./todo.controles";

const router = Router();

router.get("/get", controles.getAllData);
router.post("/post", controles.postAllData);
router.delete("/delete:id", controles.deleteData);
router.patch("/patch:id", controles.patchData);
router.put("/put:id", controles.upDateData);

export default router;
