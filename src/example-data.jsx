import { v4 as uuid } from "uuid";

const exampleData = {
  personalInfo: {
    fullName: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+61b4 753b e48a",
    address: "10029507, 671b7797, 3a116d73",
  },

  sections: {
    educations: [
      {
        degree: "Bachelor's Degree in Computer Science",
        schoolName: "University of California, Berkeley",
        location: "San Francisco, CA",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uuid(),
      },
      {
        degree: "Master's Degree in Artificial Intelligence",
        schoolName: "Massachusetts Institute of Technology",
        location: "Cambridge, MA",
        startDate: "08/2023",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uuid(),
      },
    ],

    experiences: [
      {
        companyName: "Google",
        positionTitle: "Software Engineer",
        location: "San Francisco, CA",
        description:
          "Developed and deployed machine learning models for various projects.",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uuid(),
      },
      {
        companyName: "Apple",
        positionTitle: "Machine Learning Engineer",
        location: "Cambridge, MA",
        description:
          "Designed and implemented software solutions for large-scale systems.",
        startDate: "08/2023",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uuid(),
      },
    ],
  },
};

export default exampleData;
