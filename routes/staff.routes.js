const { Router } = require("express");
const { getStaffs, getStaffById } = require("../controllers/staff.controller");

const staffRouter = Router();

staffRouter.get("/", getStaffs);

module.exports = staffRouter;
