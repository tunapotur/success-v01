async function getAllSuccess() {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getAllSuccess`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary.
    throw new Error(`Failed to fetch the data`);
  }
  const { data } = await response.json();

  return data;
}

export default getAllSuccess;
