import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";

import { PROJECTS_DATA } from "../data";
import ProjectsDisplayer from "../components/ProjectsDisplayer";

const ProjectsPage = () => {
  return (
    <Layout>
      <Breadcrumb />

      <ProjectsDisplayer
        title="Mes projets"
        titleStyle={{ margin: "24px 0 16px" }}
        projects={PROJECTS_DATA.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )}
      />
    </Layout>
  );
};

export default ProjectsPage;
