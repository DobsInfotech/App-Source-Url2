const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

router.get("/", class1.a);

router.get("/add/:id1", class1.b);
router.post("/add/:id1", class1.c);

router.get("/data/:id1", class1.d);

router.get("/delete/:id1", class1.e);
router.get("/delete/:id1/:id", class1.f);

router.get("/update/page/:id1", class1.h);

router.get("/update/:id1/:id", class1.i);
router.post("/update/:id1/:id", class1.j);

module.exports = router;
