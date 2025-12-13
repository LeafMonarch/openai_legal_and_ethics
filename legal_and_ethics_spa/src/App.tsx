import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Intro from "./pages/Intro/Intro";
import Ethics from "./pages/Ethics/Ethics";
import Professional from "./pages/Professional/Professional";
import Governance from "./pages/Governance/Governance";
import References from "./pages/References/References";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/ethical" element={<Ethics />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/legal" element={<Governance />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </Layout>
    </Router>
  );
}
