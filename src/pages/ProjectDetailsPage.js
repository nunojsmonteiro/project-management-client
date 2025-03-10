import { useEffect, useState } from "react";
import TaskCard from "../components/ProjectCard"; //  <== IMPORT
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AddTask from "../components/AddTask"

 
const API_URL = "http://localhost:5005";
 
function ProjectDetailsPage (props) {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();
  
  
  const getProject = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
   
    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${API_URL}/api/projects/${projectId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneProject = response.data;
        setProject(oneProject);
      })
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {
    getProject();
  }, [] );
 
  
  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}
      
      <AddTask refreshProject={getProject} projectId={projectId} />    
 
       {/* Below: UPDATE */}      
      { project && project.tasks.map((task) => (
        <TaskCard key={task._id} {...task} /> 
      ))} 
      
 
      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
      
      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit Project</button>
      </Link>      
      
    </div>
  );
}
 
export default ProjectDetailsPage;