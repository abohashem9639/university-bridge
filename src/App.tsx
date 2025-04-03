
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
            
            {/* Routes with Layout - No longer protected */}
            <Route path="/" element={
              <AppLayout>
                <HomePage />
              </AppLayout>
            } />
            <Route path="/students" element={
              <AppLayout>
                <StudentsListPage />
              </AppLayout>
            } />
            <Route path="/students/:id" element={
              <AppLayout>
                <StudentDetailsPage />
              </AppLayout>
            } />
            <Route path="/add-student" element={
              <AppLayout>
                <AddStudentPage />
              </AppLayout>
            } />
            <Route path="/universities" element={
              <AppLayout>
                <UniversitiesPage />
              </AppLayout>
            } />
            <Route path="/create-user" element={
              <AppLayout>
                <CreateUserPage />
              </AppLayout>
            } />
            <Route path="/branches/:universityId" element={
              <AppLayout>
                <BranchesPage />
              </AppLayout>
            } />
            <Route path="/employees" element={
              <AppLayout>
                <EmployeesPage />
              </AppLayout>
            } />
            <Route path="/add-application" element={
              <AppLayout>
                <AddApplicationPage />
              </AppLayout>
            } />
            <Route path="/agents" element={
              <AppLayout>
                <AgentsPage />
              </AppLayout>
            } />
            <Route path="/sub-agents" element={
              <AppLayout>
                <SubAgentsPage />
              </AppLayout>
            } />
            <Route path="/teams" element={
              <AppLayout>
                <TeamsPage />
              </AppLayout>
            } />
            <Route path="/profile" element={
              <AppLayout>
                <ProfilePage />
              </AppLayout>
            } />
            <Route path="/announcements" element={
              <AppLayout>
                <AnnouncementsPage />
              </AppLayout>
            } />
            <Route path="/AllBranchesPage" element={
              <AppLayout>
                <AllBranchesPage />
              </AppLayout>
            } />
            <Route path="/applications" element={
              <AppLayout>
                <ApplicationsPage />
              </AppLayout>
            } />
            <Route path="/applications/:id" element={
              <AppLayout>
                <ApplicationDetailsPage />
              </AppLayout>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
