
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AppLayout from "./components/Layout/AppLayout";
import LoginPage from "./components/LoginPage";
import HomePage from "./pages/HomePage";
import UniversitiesPage from "./pages/UniversitiesPage";
import ProtectedRoute from "./components/ProtectedRoute";
import BranchesPage from "./pages/BranchesPage";
import CreateUserPage from "./components/CreateUserPage";
import StudentsListPage from "./pages/StudentsListPage";
import AddStudentPage from "./pages/AddStudentPage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import ApplicationDetailsPage from "./pages/ApplicationDetailsPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import EmployeesPage from "./pages/EmployeesPage";
import AddApplicationPage from "./pages/AddApplicationPage";
import AgentsPage from "./pages/AgentsPage";
import SubAgentsPage from './pages/SubAgentsPage';
import TeamsPage from './pages/TeamsPage';
import ProfilePage from "./pages/ProfilePage";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import AllBranchesPage from "./pages/AllBranchesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            
            {/* Protected Routes with Layout */}
            <Route path="/" element={
              <ProtectedRoute>
                <AppLayout>
                  <HomePage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/students" element={
              <ProtectedRoute>
                <AppLayout>
                  <StudentsListPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/students/:id" element={
              <ProtectedRoute>
                <AppLayout>
                  <StudentDetailsPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/add-student" element={
              <ProtectedRoute>
                <AppLayout>
                  <AddStudentPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/universities" element={
              <ProtectedRoute>
                <AppLayout>
                  <UniversitiesPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/create-user" element={
              <ProtectedRoute>
                <AppLayout>
                  <CreateUserPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/branches/:universityId" element={
              <ProtectedRoute>
                <AppLayout>
                  <BranchesPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/employees" element={
              <ProtectedRoute>
                <AppLayout>
                  <EmployeesPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/add-application" element={
              <ProtectedRoute>
                <AppLayout>
                  <AddApplicationPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/agents" element={
              <ProtectedRoute>
                <AppLayout>
                  <AgentsPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/sub-agents" element={
              <ProtectedRoute>
                <AppLayout>
                  <SubAgentsPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/teams" element={
              <ProtectedRoute>
                <AppLayout>
                  <TeamsPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <AppLayout>
                  <ProfilePage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/announcements" element={
              <ProtectedRoute>
                <AppLayout>
                  <AnnouncementsPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/AllBranchesPage" element={
              <ProtectedRoute>
                <AppLayout>
                  <AllBranchesPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/applications" element={
              <ProtectedRoute>
                <AppLayout>
                  <ApplicationsPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/applications/:id" element={
              <ProtectedRoute>
                <AppLayout>
                  <ApplicationDetailsPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
