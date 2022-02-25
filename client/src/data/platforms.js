import * as icons from "../assets/PlatformIcons";

export const CATEGORIES = {
  HOME: "HOME",
  HR: "HR",
  COMMUNICATION: "COMMUNICATION",
  PROJECT_MANAGEMENT: "PROJECT_MANAGEMENT",
  ACCESS_MANAGEMENT: "ACCESS_MANAGEMENT",
  WIKI: "WIKI",
}

export const platforms = [
  {
    _id: 1,
    name: "Slab",
    icon: icons.slab,
    link: "https://radically-digital.slab.com/",
    description: "Slab is a knowledge hub and wiki for the modern workplace",
    category: CATEGORIES.WIKI,
  },
  {
    _id: 2,
    name: "Slack",
    icon: icons.slack,
    link: "https://radicallydigital.slack.com/",
    description: "Business communication",
    category: CATEGORIES.COMMUNICATION,
  },
  {
    _id: 3,
    name: "Bamboo HR",
    icon: icons.bamboo_hr,
    link: "https://radicallydigital.bamboohr.com/login.php",
    description: "Bamboo HR is all things HR",
    category: CATEGORIES.HR,
  },
  {
    _id: 4,
    name: "Gsuite",
    icon: icons.gsuite,
    link: "https://drive.google.com/drive/folders/0AKrHmJ1xdcApUk9PVA",
    description: "You should have access when signed in via any Radically Digital email address",
    category: CATEGORIES.COMMUNICATION,
  },
  {
    _id: 5,
    name: "Miro",
    icon: icons.miro,
    link: "https://miro.com/app/dashboard/",
    description: "White-boarding tool",
    category: CATEGORIES.PROJECT_MANAGEMENT,
  },
  {
    _id: 6,
    name: "GitHub",
    icon: icons.github,
    link: "https://github.com/radically-digital",
    description: "Code repository, to get access please send your Github handle to Oliver",
    category: CATEGORIES.PROJECT_MANAGEMENT,
  },
  {
    _id: 7,
    name: "LastPass",
    icon: icons.lastpass,
    link: "https://www.lastpass.com/",
    description: "Password manager that stores encrypted passwords online",
    category: CATEGORIES.ACCESS_MANAGEMENT,
  },
  {
    _id: 8,
    name: "Authy",
    icon: icons.authy,
    link: "https://authy.com/",
    description: "2 factor authentication application",
    category: CATEGORIES.ACCESS_MANAGEMENT,
  },
  {
    _id: 9,
    name: "Harvest",
    icon: icons.harvest,
    link: "https://radicallydigitalltd.harvestapp.com/",
    description: "Timesheets and Expenses",
    category: CATEGORIES.PROJECT_MANAGEMENT,
  },
  {
    _id: 10,
    name: "iHasco",
    icon: icons.ihasco,
    link: "https://app.ihasco.co.uk/9rlzmy",
    description: "Training Purposes",
    category: CATEGORIES.HR,
  },
  {
    _id: 11,
    name: "Jira",
    icon: icons.jira,
    link: "https://radically-digital.atlassian.net/",
    description: "Project management tool used for internal work",
    category: CATEGORIES.PROJECT_MANAGEMENT,
  },
  {
    _id: 12,
    name: "Trello",
    icon: icons.trello,
    link: "https://trello.com/radicallydigital",
    description: "Visual work management tool",
    category: CATEGORIES.PROJECT_MANAGEMENT,
  },
  {
    _id: 13,
    name: "CultureAmp",
    icon: icons.culture_amp,
    link: "https://radicallydigital.cultureamp.com/app/home",
    description: "Employee engagement, performance, and development tools",
    category: CATEGORIES.HR,
  },
];