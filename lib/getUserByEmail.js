async function getUserByEmail(email) {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getUserByEmail/${email}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary.
    throw new Error(`Failed to fetch the user data`);
  }

  const { user } = await response.json();

  return user;
}

export default getUserByEmail;
