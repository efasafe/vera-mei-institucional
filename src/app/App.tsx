import { HashRouter as Router, Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { FAQPage } from "./components/pages/FAQPage";
import { ContactPage } from "./components/pages/ContactPage";
import { BlogPage } from "./components/pages/BlogPage";
import { BlogPostPage } from "./components/pages/BlogPostPage";
import { LoginPage } from "./components/pages/LoginPage";
import { SignupPage } from "./components/pages/SignupPage";
import { AdminDashboardNew } from "./components/pages/AdminDashboardNew";
import { AdminDashboardLocal } from "./components/pages/AdminDashboardLocal";
import { ProtectedRoute } from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes (without navbar/footer) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboardNew /></ProtectedRoute>} />
        <Route path="/admin-local" element={<ProtectedRoute><AdminDashboardLocal /></ProtectedRoute>} />

        {/* Public routes (with navbar/footer) */}
        <Route
          path="/*"
          element={
            <div
              className="min-h-screen flex flex-col"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/sobre" element={<AboutPage />} />
                  <Route path="/servicos" element={<ServicesPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/contato" element={<ContactPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:id" element={<BlogPostPage />} />
                </Routes>
              </main>
              <Footer />
              <WhatsAppButton />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
