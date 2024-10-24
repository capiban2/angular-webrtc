import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "/login",
    loadComponent: () =>
      import("./login/login.component").then((x) => x.LoginComponent),
    title: "LoginPage",
    data: {
      requiredPermissions: [],
    },
  },
  {
    path: "/desktop",
    loadComponent: () =>
      import("./desktop/desktop.component").then((x) => x.DesktopComponent),
    title: "Desktop",
    data: {
      requiredPermissions: ["common"],
    },
  },
  {
    path: "/monitoring",
    loadComponent: () =>
      import("./monitoring/monitoring.component").then((x) =>
        x.MonitoringComponent
      ),
    title: "Monitoring",
    data: {
      requiredPermissions: ["common", "viewMonitoring"],
    },
  },
];
