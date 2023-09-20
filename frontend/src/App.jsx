import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AddProduct, CheckYourMail, Dashboard, ForgotPassword, ImportCsv, Login, Marketplace, NotFound, Onboarding, Products, ResetPassword, ResetPasswordSuccess, Settings, SignUp, Tasks, VerifyEmail } from "./pages";
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/check-your-mail" element={<CheckYourMail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password-success" element={<ResetPasswordSuccess />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/products" element={<Products />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/import" element={<ImportCsv />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App