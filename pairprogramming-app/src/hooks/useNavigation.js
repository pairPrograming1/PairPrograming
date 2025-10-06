// src/hooks/useNavigation.js
"use client";

import { useRouter } from "next/navigation";
import { routes } from "@/config/routes";

export const useAppNavigation = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  const navigateToServices = () => navigateTo(routes.servicios);
  const navigateToPortfolio = () => navigateTo(routes.portafolio);
  const navigateToCalendar = () => navigateTo(routes.calendario);
  const navigateToAbout = () => navigateTo(routes.nosotros);
  const navigateToSupport = () => navigateTo(routes.soporte);
  const navigateToContact = () => navigateTo(routes.contacto);
  const navigateToAdmin = () => navigateTo(routes.admin.dashboard);
  const navigateToHome = () => navigateTo(routes.home);

  return {
    navigateTo,
    navigateToServices,
    navigateToPortfolio,
    navigateToCalendar,
    navigateToAbout,
    navigateToSupport,
    navigateToContact,
    navigateToAdmin,
    navigateToHome,
  };
};
