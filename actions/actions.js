export const USER_LIST = "USER_LIST";

export function userList() {
  return {
    type: USER_LIST,
    list: [
      { firstName: "Irfan", lastName: "Sandhu" },
      { firstName: "Imran", lastName: "Sandhu" },
    ],
  };
}
