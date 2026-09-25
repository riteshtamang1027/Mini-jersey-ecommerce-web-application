import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./layouts/header.jsx";
import Footer from "./layouts/footer.jsx";
import ClubKits from "./pages/categoryBrowse/ClubKits.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      {/* Main content takes all remaining space */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/clubKits" element={<ClubKits />} />
        </Routes>
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  </BrowserRouter>,
);
