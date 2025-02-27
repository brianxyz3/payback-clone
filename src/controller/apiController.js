const submitCaseFile = async (newCase) => {
  try {
    const res = await fetch(`/api/newCase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCase),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

const registerUser = async (newUser) => {
  try {
    const res = await fetch(`/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

const loginUser = async (user) => {
  try {
    const res = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

export { submitCaseFile, registerUser, loginUser };
