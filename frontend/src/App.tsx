import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Navbar from "./components/navbar.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Footer from "./components/footer.tsx";
import Innovations from "./pages/Innovations.tsx";
import Projects from "./pages/Projects.tsx";
import Innovation from "./pages/Innovation.tsx";
import CreateInnovation from "./pages/CreateInnovation.tsx";
import ScrollToTop from "./lib/scrollToTop.tsx";
import { AuthProvider } from "./context/authContext.tsx";
import Protect from "./lib/protect.tsx";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route path="/innovations" element={<Protect><Innovations /></Protect>} />
              <Route path="/innovation/:id" element={<Protect><Innovation /></Protect>} />
              <Route
                path="/create/innovation"
                element={<Protect><CreateInnovation /></Protect>}
              />
              <Route path="/projects" element={<Protect><Projects /></Protect>} />
            </Routes>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
