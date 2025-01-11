
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Sales Report",
        description: "Generate the monthly sales report for October.",
        date: "2024-12-20",
        category: "Reports",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Meeting",
        description: "Discuss the quarterly goals with the team.",
        date: "2024-12-15",
        category: "Meetings",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Submit Budget Proposal",
        description:
          "Draft and submit the budget proposal for the next fiscal year.",
        date: "2024-12-10",
        category: "Finance",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Submit Budget Proposal",
        description:
          "Draft and submit the budget proposal for the next fiscal year.",
        date: "2024-12-10",
        category: "Software",
      },
    ],
  },
  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Client Presentation",
        description: "Prepare the presentation for the new client meeting.",
        date: "2024-12-21",
        category: "Presentations",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Inventory Audit",
        description: "Complete the annual inventory audit for the warehouse.",
        date: "2024-12-18",
        category: "Audits",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "System Update",
        description: "Coordinate the system software update with IT.",
        date: "2024-12-25",
        category: "IT",
      },
    ],
  },
  {
    id: 3,
    firstName: "Ananya",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Marketing Strategy",
        description: "Develop a marketing strategy for Q1 of 2025.",
        date: "2024-12-28",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Staff Training",
        description: "Organize and conduct training for new hires.",
        date: "2024-12-19",
        category: "Training",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Customer Feedback",
        description: "Analyze customer feedback data for November.",
        date: "2024-12-14",
        category: "Customer Service",
      },
    ],
  },
  {
    id: 4,
    firstName: "Ishaan",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Policy Review",
        description: "Review and update company policies.",
        date: "2024-12-12",
        category: "HR",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Vendor Negotiation",
        description: "Negotiate better pricing with key vendors.",
        date: "2024-12-22",
        category: "Procurement",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Product Launch",
        description: "Coordinate the launch event for the new product line.",
        date: "2024-12-27",
        category: "Events",
      },
    ],
  },
  {
    id: 5,
    firstName: "Diya",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Software Deployment",
        description: "Deploy the new software tool for customer management.",
        date: "2024-12-24",
        category: "IT",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Expense Analysis",
        description:
          "Analyze company expenses and suggest cost-saving measures.",
        date: "2024-12-20",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Outing",
        description:
          "Plan and execute a team outing for year-end celebrations.",
        date: "2024-12-10",
        category: "HR",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin1@example.com",
    password: "123",
    firstName : "Virjesh"
  },
];

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
};
export const getLocalStorage = () => {
    const employees=JSON.parse(localStorage.getItem('employees'));
    const admin=JSON.parse(localStorage.getItem('admin'));
    return {employees,admin}
};
