// components/auth/RegisterForm.jsx

import {useState} from "react";
import {api} from "@/lib/api";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui";
import { Input } from "@/components/ui";

export default function RegisterForm() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/auth/register", {
        fullName,
        email,
      });

      console.log("User created:", res.data);

      navigate("/register/success");
    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="
        w-full
        max-w-md
        rounded-3xl
        border
        bg-background/70
        backdrop-blur-xl
        p-8
        shadow-sm
      "
    >
      <div className="space-y-2 mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          Create your Vault identity
        </h2>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Your secure vault will only be accessible through
          the Vault mobile app.
        </p>
      </div>

      {/* <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); navigate("/register/success");}}> */}
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* FULL NAME */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Full Name
          </label>

          <Input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* EMAIL */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Email Address
          </label>

          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD */}
        {/* <div className="space-y-2">
          <label className="text-sm font-medium">
            Password
          </label>

          <Input
            type="password"
            placeholder="Create a secure password"
          />
        </div> */}

        {/* CONFIRM PASSWORD */}
        {/* <div className="space-y-2">
          <label className="text-sm font-medium">
            Confirm Password
          </label>

          <Input
            type="password"
            placeholder="Confirm your password"
          />
        </div> */}

        {/* CTA */}
        <Button type = "submit" className="w-full h-12 rounded-xl">
          {loading ? "Creating Account..." : "Create Secure Account"}
          {/* Create Secure Account */}
        </Button>
      </form>

      {/* FOOTNOTE */}
      <div className="mt-8 pt-6 border-t">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Vault does not support browser-based access.
          Your encrypted documents remain accessible only
          through trusted mobile devices.
        </p>
      </div>
    </div>
  );
}