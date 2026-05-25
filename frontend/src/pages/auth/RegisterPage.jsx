// pages/auth/RegisterPage.jsx

import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";
import SecurityHighlights from "@/components/auth/SecurityHighlights";

export default function RegisterPage() {
  return (
    <AuthLayout
      leftContent={<SecurityHighlights />}
      rightContent={<RegisterForm />}
    />
  );
}