import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pasteles: resolve(__dirname, 'Secciones/Pasteles.html'), 
        panes: resolve(__dirname, 'Secciones/Panesrellenos.html'),
        galletas: resolve(__dirname, 'Secciones/Galletas.html')
      },
    },
  },
})