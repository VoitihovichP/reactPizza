const getMenu = async () => {
  const response = await fetch('http://localhost:3000/db.json');
  return await response.json();
}

export default getMenu; 