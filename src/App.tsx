import { useState } from 'react'


    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Home from './components/Home';
    import Layout from './components/layout';
    import Contact from './components/Contact';
    import Project from './components/Project';
    import ProjectItem from './components/ProjectItem';

    function App() {
      const [count, setCount] = useState(0);

      return (
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/projects" element={<Project/>} />
              <Route path="/project-item/:projectId" element={<ProjectItem/>} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
          </Layout>
        </Router>
      );
    }

    export default App;

