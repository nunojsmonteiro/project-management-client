import axios from "axios";
import AddProject from "../components/AddProject"; //  <== IMPORT
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
 
const API_URL = "http://localhost:5005";
 
 
function ProjectListPage() {
  const [projects, setProjects] = useState([]);
 
  const getAllProjects = () => {
    axios
      .get(`${API_URL}/api/projects`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };
 
  useEffect(() => {
    getAllProjects();
  }, [] );
 
  
  return (
    <div className="ProjectListPage">
      
      <AddProject refreshProjects={getAllProjects} />
      
      {/* Below: UPDATE */}
      { projects.map((project) => (
        <ProjectCard key={project._id} {...project} />
      ))}     
       
    </div>
  );
}
 
export default ProjectListPage;