const RakeData = [
  {
    rake: 13151,
    total_strength: 4,
    days_of_journey: 5,
  },
  {
    rake: 12317,
    total_strength: 4,
    days_of_journey: 4,
  },
  {
    rake: 12315,
    total_strength: 4,
    days_of_journey: 6,
  },
  {
    rake: 13161,
    total_strength: 2,
    days_of_journey: 2,
  },
  {
    rake: 13113,
    total_strength: 2,
    days_of_journey: 1,
  },
  {
    rake: 13155,
    total_strength: 2,
    days_of_journey: 3,
  },
  {
    rake: 13157,
    total_strength: 2,
    days_of_journey: 3,
  },
  {
    rake: 13159,
    total_strength: 2,
    days_of_journey: 3,
  },
  {
    rake: 13165,
    total_strength: 2,
    days_of_journey: 3,
  },
];

const data_staff = {
  id: 1,
  name: "sujan",
  tnumber: "234",
  pnumber: "7783483486386483",
  designation: "ach",
  status: "escort",
  current_rake: {
    id: 1,
    rake: 13151,
    start_journey: "12.2.2024",
    end_journey: "16.2.2024",
  },
};

const data_escort = {
  id: 1,
  rake: 13151,
  start_journey: "12.2.2024",
  end_journey: "16.2.2024",
  total_strength: 4,
  days_of_journey:5,
  staffs: [
    {
      id: 1,
      name: "hgsdhgshdg",
      tnumber: "2323",
      pnumber: "23232",
      designation: "sgdhs",
    },
  ],
};

module.exports = { RakeData };
