const { PrismaClient } = require("@prisma/client");

const staffClient = new PrismaClient().staff;

//getStaffs
async function getStaffs(req, res) {
  try {
    const staffs = await staffClient.findMany();
    res.status(200).json({ data: staffs });
  } catch (e) {
    console.log(e);
  }
}

//getStaffsById
async function getStaffById(req, res) {
  const staffId = req.params.id;
  try {
    const staff = await staffClient.findUnique({
      where: {
        id: staffId,
      },
    });
    res.status(200).json({ data: staff });
  } catch (e) {
    console.log(e);
  }
}

module.exports = { getStaffs, getStaffById };
