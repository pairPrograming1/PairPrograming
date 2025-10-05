// components/AdminLoginContent.jsx
"use client";
import { useState } from "react";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export default function AdminLoginContent() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simular autenticación
    setTimeout(() => {
      if (
        credentials.username === "admin" &&
        credentials.password === "admin123"
      ) {
        // En una aplicación real, aquí se guardaría el token de autenticación
        localStorage.setItem("adminAuthenticated", "true");
        window.location.href = "/admin/dashboard";
      } else {
        setError("Credenciales incorrectas. Usa: admin / admin123");
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Container size="full">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Card padding="lg" className="max-w-md w-full fade-in">
            {/* Logo y título */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary">🔒</span>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Acceso Administrativo
              </h1>
              <p className="text-secondary-text">
                Panel de control de PairProgramming
              </p>
            </div>

            {/* Formulario de login */}
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}

              <Input
                label="Usuario"
                type="text"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
                placeholder="Ingresa tu usuario"
                required
                icon="👤"
              />

              <Input
                label="Contraseña"
                type="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                placeholder="Ingresa tu contraseña"
                required
                icon="🔒"
              />

              <Button
                type="submit"
                disabled={isLoading}
                loading={isLoading}
                className="w-full"
              >
                {isLoading ? "Iniciando Sesión..." : "Acceder al Dashboard"}
              </Button>
            </form>

            {/* Información de demo */}
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-primary mb-2 text-sm">
                Credenciales de Demo:
              </h4>
              <div className="text-secondary-text text-xs space-y-1">
                <p>
                  <strong>Usuario:</strong> admin
                </p>
                <p>
                  <strong>Contraseña:</strong> admin123
                </p>
              </div>
            </div>

            {/* Enlace de regreso */}
            <div className="mt-6 text-center">
              <a href="/" className="text-primary hover:underline text-sm">
                ← Volver al sitio principal
              </a>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
