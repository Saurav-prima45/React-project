import logo1 from "../Images/offline-svgrepo-com.svg";
import logo2 from "../Images/offline-svgrepo-com.svg";
import logo3 from "../Images/marketing-svgrepo-com.svg";
import face30 from "../Images/face30.png";
import face31 from "../Images/face31.png";
import face32 from "../Images/face32.png";
import face33 from "../Images/face33.png";
import face34 from "../Images/face34.png";

export const pieChartData = {
  heading: "Sessions by Chanel",
  data: [
    { label: "Firewalls", value: 3, count: 4, percentage: 100 },
    { label: "Ports", value: 12, count: 12, percentage: 100 },
    { label: "Servers", value: 233, count: 2, percentage: 100 },
    { label: "Firewalls", value: 3, count: 7, percentage: 100 },
    { label: "Firewalls", value: 3, count: 6, percentage: 70 },
  ],
};

export const lineChartData = {
  heading: "Events",
  data: [
    { label: "Critical", value: 3, id: "1" },
    { label: "Errors", value: 12, id: "2" },
    { label: "Warning", value: 233, id: "3" },
  ],
};

export const deviceStatusData = {
  deviceStatus: "Device Status",
  data: [
    { id: "1", label: "uptime", numericalValue: "195days,8 hours" },
    { id: "2", label: "First Seen", numericalValue: "23 sept 2019, 2.04pm" },
    {
      id: "3",
      label: "Collected time",
      numericalValue: "23 sept 2019, 2.04pm",
    },
    { id: "3", label: "Memory space", numericalValue: "168.3gb" },
  ],
};

export const sessionsByChanel = {
  deviceStatus: "Sessions By Chanel",
  data: [
    { id: "1", label: "Empolyee Name", value: "This Month" },
    { id: "2", label: "Connor Chandler", value: "$ 4909" },
    {
      id: "3",
      label: "Russell Floyd",
      value: "$857",
    },
    { id: "4", label: "Douglas White", value: "$612" },
    { id: "5", label: "Alta Fletcher ", value: "$233" },
    { id: "6", label: "Marguerite Pearson", value: "$233" },
    { id: "7", label: "Leonard Gutierrez", value: "$35" },
    { id: "8", label: "Helen Benson", value: "$43" },
    { id: "9", label: "Helen Benson", value: "$43" },
  ],
};

export const salesAnalytics = {
  sales: "Sales Analytics",
  data: [
    { id: 1, icon: logo1, label: "Online", value: "23,342" },
    { id: 2, icon: logo2, label: "Offline", value: "13,221" },
    { id: 3, icon: logo3, label: "Marketing", value: "1,542" },
  ],
};

export const earningData = {
  cardTitle: "Card Title",
  data: [
    {
      id: 1,
      label: "Total Earning",
      value: "287,493$",
      description: "1.4 Since Last Month",
    },
    {
      id: 2,
      label: "Total Earning",
      value: "87,493",
      description: "1.4 Since Last Month",
    },
  ],
};

export const salesAnalyticsTrendData = {
  heading: "Sales Analytics",
  label1: "Other Value",
  value1: "155.5%",
  label2: "Total Products",
  value2: "288.2%",
  label3: "Quantity",
  value3: "23.30",
};

export const projectStatusData = [
  {
    id: 1,
    imgUrl: face30,
    companyName: "volkswagen",
    budget: "$2322",
    status: "88%",
    deadline: "07 Nov 2019",
  },
  {
    id: 2,
    imgUrl: face31,
    companyName: "Land Rover",
    budget: "$12022",
    status: "70%",
    deadline: "07 Nov 2019",
  },
  {
    id: 3,
    imgUrl: face32,
    companyName: "Bentley",
    budget: "$8,725",
    status: "87%",
    deadline: "07 Nov 2019",
  },
  {
    id: 4,
    imgUrl: face33,
    companyName: "Morgan",
    budget: "$5,220",
    status: "65%",
    deadline: "07 Nov 2019",
  },
  {
    id: 5,
    imgUrl: face34,
    companyName: "volkswagen",
    budget: "$2322",
    status: "88%",
    deadline: "07 Nov 2019",
  },
];

// src/ecommerceData.js

export const ecommerceData = {
  pageTitle: "E-commerce Analytics",
  dateRange: {
    current: "Mon, 1 Oct 2019 - Tue, 2 Oct 2019",
    options: [
      "Mon, 17 Oct 2019 - Tue, 25 Oct 2019",
      "Tue, 18 Oct 2019 - Wed, 26 Oct 2019",
      "Wed, 19 Oct 2019 - Thu, 26 Oct 2019",
    ],
  },
  buttons: {
    day: "Day",
    week: "Week",
    month: "Month",
  },
  metrics: [
    {
      category: "Inbound",
      values: [
        { label: "Current", value: "38.34M" },
        { label: "Average", value: "38.34M" },
        { label: "Maximum", value: "68.14M" },
        { label: "60th %", value: "168.3GB" },
      ],
    },
    {
      category: "Outbound",
      values: [
        { label: "Current", value: "458.77M" },
        { label: "Average", value: "1.45K" },
        { label: "Maximum", value: "15.50K" },
        { label: "60th %", value: "45.5" },
      ],
    },
  ],
};
