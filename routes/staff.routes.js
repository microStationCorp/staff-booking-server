const { Router } = require("express");
const {
  getStaffs,
  getStaffById,
  createStaff,
  deleteStaff,
} = require("../controllers/staff.controller");

const staffRouter = Router();

staffRouter.get("/", getStaffs);
staffRouter.get("/:id", getStaffById);
staffRouter.delete("/:id", deleteStaff);
staffRouter.post("/", createStaff);

module.exports = staffRouter;
