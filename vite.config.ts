import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactClickToComponent } from "vite-plugin-react-click-to-component";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    reactClickToComponent(),
  ],
});