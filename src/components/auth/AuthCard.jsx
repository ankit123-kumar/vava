import { useState } from "react";
import { FcGoogle as Google } from "react-icons/fc";
import "./AuthCard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EyeIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    {open ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    )}
  </svg>
);

function InputField({ label, type = "text", placeholder, value, onChange, showToggle, onToggle, required = false }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, fontFamily: "'DM Sans',sans-serif" }}>
        {label} {required && <span style={{ color: "#ef4444" }}>*</span>}
      </label>
      <div style={{ position: "relative" }}>
        <input
          type={type === "password" && showToggle ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%", padding: "12px 40px 12px 16px", borderRadius: 12, fontSize: 14,
            background: focused ? "rgba(139,92,246,0.06)" : "rgba(255,255,255,0.04)",
            border: focused ? "1px solid rgba(139,92,246,0.55)" : "1px solid rgba(255,255,255,0.08)",
            color: "#f1f5f9", outline: "none", transition: "all 0.2s",
            fontFamily: "'DM Sans',sans-serif", boxSizing: "border-box",
          }}
          required={required}
        />
        {type === "password" && (
          <button onClick={onToggle} type="button" style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#6b7280", display: "flex", alignItems: "center" }}>
            <EyeIcon open={showToggle} />
          </button>
        )}
      </div>
    </div>
  );
}

export default function AuthCard({ defaultTab = "signup", theme = "light" }) {
  const [tab, setTab] = useState(defaultTab);
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    // try {
    //   if (tab === "signup") {
    //     const response = await axios.post(API_ENDPOINTS.auth.signup, form);
    //     if(response.status === 201) {
    //       alert("Registration successful! Please log in.");
    //       setTab("login");
    //       setShowPw(false);
    //     } else {
    //       alert("Registration failed. Please try again.");
    //     }
    //   } else {
    //     const response = await axios.post(API_ENDPOINTS.auth.login, form);
    //     if(response.status === 200) {
    //       alert("Login successful! Welcome back.");
    //       localStorage.setItem("accessToken", response.data.accessToken);
    //       localStorage.setItem("refreshToken", response.data.refreshToken);
    //       // Redirect to dashboard or home page
    //       window.location.href = "/dashboard";
    //     } else {
    //       alert("Login failed. Please check your credentials and try again.");
    //     }
    //   }
    // } catch (error) {
    //   console.error("Authentication error:", error);
    //   alert(error.response?.data?.message || "An error occurred. Please try again.");
    // }
    // setLoading(false);
    navigate("/dashboard")
  };

  return (
    <>
      <div className="auth-wrap">
        {/* Ambient glows */}
        <div style={{ position: "fixed", top: "12%", left: "8%", width: 320, height: 320, background: "radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "fixed", bottom: "12%", right: "8%", width: 260, height: 260, background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

        <div className="auth-card">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 14, background: "linear-gradient(135deg,#8b5cf6,#6366f1)", marginBottom: 14 }}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", lineHeight: 1 }}>
              {tab === "signup" ? "Create account" : "Welcome back"}
            </h1>
            <p style={{ color: "#6b7280", fontSize: 13, marginTop: 6 }}>
              {tab === "signup" ? "Start your journey today" : "Sign in to continue"}
            </p>
          </div>

          <div className="card-body">
            {/* Tabs */}
            <div style={{ display: "flex", padding: 4, borderRadius: 14, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", marginBottom: 24, gap: 4 }}>
              {[["signup", "Sign Up"], ["login", "Log In"]].map(([t, label]) => (
                <button key={t} onClick={() => { setTab(t); setShowPw(false); }} className={`tab-btn ${tab === t ? "tab-active" : "tab-inactive"}`}>
                  {label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-slide" key={tab}>
                {tab === "signup" && (
                  <InputField label="Username" placeholder="johndoe" value={form.username} onChange={set("username")} required={true} />
                )}
                <InputField label="Email address" type="email" placeholder="you@example.com" value={form.email} required={true} onChange={set("email")} />
                <InputField label="Password" type="password" placeholder="••••••••" value={form.password} onChange={set("password")} showToggle={showPw} onToggle={() => setShowPw(!showPw)} required={true} />
              </div>

              {/* Options row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, marginTop: -4 }}>
                <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", color: "#6b7280", fontSize: 13 }} onClick={() => setRemember(!remember)}>
                  <div className="check-box" style={{ border: remember ? "1px solid #8b5cf6" : "1px solid rgba(255,255,255,0.15)", background: remember ? "rgba(139,92,246,0.28)" : "transparent" }}>
                    {remember && <svg viewBox="0 0 12 12" width="10" height="10"><polyline points="1.5,6 5,9.5 10.5,2.5" stroke="#c4b5fd" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </div>
                  Remember me
                </label>
                {tab === "login" && (
                  <button type="button" style={{ background: "none", border: "none", cursor: "pointer", color: "#8b5cf6", fontSize: 13, fontFamily: "'DM Sans',sans-serif" }}>
                    Forgot password?
                  </button>
                )}
              </div>

              <button type="submit" disabled={loading} className="submit-btn">
                {loading ? (
                  <svg className="spinner" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="white" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
                    <path d="M12 2a10 10 0 0110 10" strokeLinecap="round" />
                  </svg>
                ) : (tab === "signup" ? "Create Account →" : "Sign In →")}
              </button>
            </form>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0" }}>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
              <span style={{ color: "#4b5563", fontSize: 12, fontWeight: 500 }}>or continue with</span>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
            </div>

            <button type="button" className="social-btn">
              <Google size={20} />
              Continue with Google
            </button>
          </div>

          {/* Footer */}
          <p style={{ textAlign: "center", marginTop: 20, color: "#4b5563", fontSize: 13 }}>
            {tab === "signup" ? "Already have an account? " : "Don't have an account? "}
            <button className="footer-link" onClick={() => setTab(tab === "signup" ? "login" : "signup")}>
              {tab === "signup" ? "Log in" : "Sign up"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}