import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("get route with admin");
});

export default router;
