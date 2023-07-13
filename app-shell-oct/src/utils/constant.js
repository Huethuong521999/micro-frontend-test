export const users = [
  {
    username: "user1",
    password: "user1",
    role: 'bacsi'
  },
  {
    username: "user2",
    password: "user2",
    role: 'dieuduong'
  },
  {
    username: "user3",
    password: "user3",
    role: 'truongkhoa'
  },
];

export const remoteModules = [
  {
    remoteEntry: "http://localhost:3000/remoteEntry.js",
    remoteName: "oct_patient",
    exposedModule: "PatientApp",
  },
  {
    remoteEntry: "http://localhost:3001/remoteEntry.js",
    remoteName: "oct_admin",
    exposedModule: "AdminApp",
  },
  {
    remoteEntry: "http://localhost:3002/remoteEntry.js",
    remoteName: "oct_clinical",
    exposedModule: "ClinicalApp",
  },
  {
    remoteEntry: "http://localhost:3003/remoteEntry.js",
    remoteName: "oct_pharmacy",
    exposedModule: "PharmacyApp",
  },
];
