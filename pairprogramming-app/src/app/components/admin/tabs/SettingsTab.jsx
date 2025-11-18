
import { Card } from "../../ui/Card";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";

export default function SettingsTab({ settings, updateSettings }) {
  const handleSave = () => {
    updateSettings(settings);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    window.location.href = "/";
  };

  return (
    <Card padding="lg">
      <h3 className="text-lg md:text-xl font-bold text-primary mb-6">
        Configuración del Sitio
      </h3>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Título del Sitio"
            value={settings.siteTitle}
            onChange={(e) =>
              updateSettings({ ...settings, siteTitle: e.target.value })
            }
            placeholder="Nombre de la empresa"
            size="sm"
          />
          <Input
            label="Descripción"
            value={settings.siteDescription}
            onChange={(e) =>
              updateSettings({
                ...settings,
                siteDescription: e.target.value,
              })
            }
            placeholder="Descripción breve del sitio"
            size="sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-secondary-text font-semibold mb-2 text-sm">
              Color Primario
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={settings.primaryColor}
                onChange={(e) =>
                  updateSettings({
                    ...settings,
                    primaryColor: e.target.value,
                  })
                }
                className="w-8 h-8 md:w-10 md:h-10 rounded cursor-pointer border border-border-color"
              />
              <Input
                value={settings.primaryColor}
                onChange={(e) =>
                  updateSettings({
                    ...settings,
                    primaryColor: e.target.value,
                  })
                }
                placeholder="#d4af37"
                size="sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-secondary-text font-semibold mb-2 text-sm">
              Color Secundario
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={settings.secondaryColor}
                onChange={(e) =>
                  updateSettings({
                    ...settings,
                    secondaryColor: e.target.value,
                  })
                }
                className="w-8 h-8 md:w-10 md:h-10 rounded cursor-pointer border border-border-color"
              />
              <Input
                value={settings.secondaryColor}
                onChange={(e) =>
                  updateSettings({
                    ...settings,
                    secondaryColor: e.target.value,
                  })
                }
                placeholder="#ffd700"
                size="sm"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-background/50 rounded-lg gap-3">
          <div className="flex-1">
            <h4 className="font-semibold text-white text-sm">
              Modo Mantenimiento
            </h4>
            <p className="text-secondary-text text-xs">
              Cuando está activado, los visitantes verán una página de
              mantenimiento
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.maintenanceMode}
              onChange={(e) =>
                updateSettings({
                  ...settings,
                  maintenanceMode: e.target.checked,
                })
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 justify-center sm:justify-start">
          <Button
            onClick={handleSave}
            size="sm"
            icon="💾"
            className="flex-1 sm:flex-none"
          >
            Guardar
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.location.reload()}
            className="flex-1 sm:flex-none"
          >
            Recargar
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 sm:flex-none text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
            onClick={handleLogout}
            icon="🚪"
          >
            Cerrar Sesión
          </Button>
        </div>
      </div>
    </Card>
  );
}
