import React, { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  github: string;
  liveDemo: string;
}

const AdminDashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(
    JSON.parse(localStorage.getItem("projects") || "[]")
  );
  const [newProject, setNewProject] = useState({
    id: 0,
    title: "",
    description: "",
    github: "",
    liveDemo: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [viewers, setViewers] = useState(0);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const addOrUpdateProject = () => {
    if (editMode) {
      setProjects(
        projects.map((project) =>
          project.id === newProject.id ? newProject : project
        )
      );
    } else {
      setProjects([...projects, { ...newProject, id: Date.now() }]);
    }
    setNewProject({ id: 0, title: "", description: "", github: "", liveDemo: "" });
    setEditMode(false);
  };

  const editProject = (project: Project) => {
    setNewProject(project);
    setEditMode(true);
  };

  const deleteProject = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleProjectClick = () => {
    setClicks((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h2>

      <div className="mb-6 text-center bg-gray-800 p-4 rounded">
        <h3 className="text-xl font-semibold mb-2">Real-Time Stats</h3>
        <p>👀 Current Viewers: <span className="font-bold text-green-400">{viewers}</span></p>
        <p>📊 Total Project Clicks: <span className="font-bold text-blue-400">{clicks}</span></p>
      </div>

      <div className="max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Project Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          className="w-full p-3 mb-4 bg-gray-700 rounded text-white"
        />
        <textarea
          placeholder="Project Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          className="w-full p-3 mb-4 bg-gray-700 rounded text-white"
        />
        <input
          type="text"
          placeholder="GitHub Link"
          value={newProject.github}
          onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
          className="w-full p-3 mb-4 bg-gray-700 rounded text-white"
        />
        <input
          type="text"
          placeholder="Live Demo Link"
          value={newProject.liveDemo}
          onChange={(e) => setNewProject({ ...newProject, liveDemo: e.target.value })}
          className="w-full p-3 mb-4 bg-gray-700 rounded text-white"
        />
        <button
          onClick={addOrUpdateProject}
          className={`w-full py-2 rounded ${editMode ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"}`}
        >
          {editMode ? "Update Project" : "Add Project"}
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Your Projects</h3>
        {projects.length === 0 ? (
          <p className="text-gray-400">No projects added yet.</p>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-4 rounded mb-4">
              <h4 className="text-lg font-bold">{project.title}</h4>
              <p className="text-gray-400">{project.description}</p>
              <div className="flex gap-4 mt-2">
                <a href={project.github} onClick={handleProjectClick} className="text-blue-400 hover:text-blue-300">GitHub</a>
                <a href={project.liveDemo} onClick={handleProjectClick} className="text-green-400 hover:text-green-300">Live Demo</a>
              </div>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => editProject(project)}
                  className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProject(project.id)}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
