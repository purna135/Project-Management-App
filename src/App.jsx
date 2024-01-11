import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProjects";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProjects() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancle() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProjects(projectData) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, projectData],
      };
    });
  }

  function handleSelectedProject(projectId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onProjectAdd={handleAddProjects} onCancle={handleCancle} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProjects} />;
  } else {
    const selectedProject = projectState.projects.find(
      (project) => project.id === projectState.selectedProjectId
    );
    content = <SelectedProject project={selectedProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProjects}
        projects={projectState.projects}
        onProjectSelect={handleSelectedProject}
        selectedProject={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
