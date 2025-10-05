// components/AdminAuth.jsx
"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export default function AdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      if (
        credentials.username === "admin" &&
        credentials.password === "admin123"
      ) {
        localStorage.setItem("adminAuthenticated", "true");
        setIsAuthenticated(true);
        setShowLogin(false);
        setCredentials({ username: "", password: "" });
        window.location.reload();
      } else {
        setError("Credenciales incorrectas");
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    setIsAuthenticated(false);
    window.location.reload();
  };

  if (isAuthenticated) {
    return (
      <div className="flex items-center space-x-2">
        <span className="text-secondary-text text-sm hidden sm:inline">
          Admin
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={handleLogout}
          className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white text-xs"
        >
          Cerrar Sesión
        </Button>
      </div>
    );
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowLogin(!showLogin)}
        icon="🔐"
        className="text-xs"
      >
        Admin
      </Button>

      {showLogin && (
        <div className="absolute top-full right-0 mt-2 w-72 bg-card-bg border border-border-color rounded-lg shadow-xl z-50 p-3">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-white text-sm">Acceso Admin</h3>
            <button
              onClick={() => setShowLogin(false)}
              className="text-secondary-text hover:text-white text-xs"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-2">
            {error && (
              <div className="p-2 bg-red-500/20 border border-red-500/30 rounded text-red-400 text-xs">
                {error}
              </div>
            )}

            <Input
              label="Usuario"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              placeholder="admin"
              required
              size="sm"
            />

            <Input
              label="Contraseña"
              type="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              placeholder="••••••••"
              required
              size="sm"
            />

            <Button
              type="submit"
              disabled={isLoading}
              loading={isLoading}
              className="w-full"
              size="sm"
            >
              {isLoading ? "Conectando..." : "Acceder"}
            </Button>
          </form>

          <div className="mt-2 p-2 bg-primary/10 rounded border border-primary/20">
            <p className="text-secondary-text text-xs">
              <strong>Demo:</strong> admin / admin123
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
