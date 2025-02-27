const submitCaseFile = async (newCase) => {
  try {
    const res = await fetch(`/api/newCase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCase),
    });
    return res;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};


export { submitCaseFile };
