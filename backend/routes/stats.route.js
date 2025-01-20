import { Router } from "express";
const router = Router();

router.get("/", () => {
  res.send("stats route with get method");
});
export default router;
