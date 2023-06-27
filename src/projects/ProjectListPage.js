const getAllProjects = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
   
    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/api/projects`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };