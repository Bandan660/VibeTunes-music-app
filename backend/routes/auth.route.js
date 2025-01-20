import {Router} from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("get route with auth");
});
export default router;
