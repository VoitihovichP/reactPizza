const getMenu = async () => {
  const response = await fetch('http://localhost:3001/pizzas');
  return await response.json();
}

export default getMenu; 