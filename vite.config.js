import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fee-calculator_public/',  // ← GitHubリポジトリ名に合わせる
})
