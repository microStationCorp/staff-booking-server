const { Router } = require("express");
const {
  getStaffs,
  getStaffById,
  createStaff,
} = require("../controllers/staff.controller");

const staffRouter = Router();

staffRouter.get("/", getStaffs);
staffRouter.get("/:id", getStaffById);
staffRouter.post("/", createStaff);

module.exports = staffRouter;
