export const initUsers = () => {
  const existingUsers = localStorage.getItem("users");

  if (!existingUsers) {
    const users = [
      { id: 1, username: "admin", password: "admin123", role: "admin" },
      { id: 2, username: "user", password: "user123", role: "user" },
    ];

    localStorage.setItem("users", JSON.stringify(users));
  }
};
