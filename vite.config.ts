import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
// export default defineConfig({
//   server: {
//     port: 3000,
//     host: true
//   },
//   plugins: [vue()]
// })


export default ({ mode }: { mode: string }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const { VITE_APP_VERSION, VITE_APP_PORT, VITE_APP_TITLE, VITE_APP_DESC, VITE_APP_AUTHOR, VITE_APP_AUTHOR_EMAIL } = env;

  return defineConfig({
    define: {
      __APP_VERSION__: JSON.stringify(VITE_APP_VERSION),
      __APP_TITLE__: JSON.stringify(VITE_APP_TITLE),
      __APP_DESC__: JSON.stringify(VITE_APP_DESC),
      __APP_AUTHOR__: JSON.stringify(VITE_APP_AUTHOR),
      __APP_AUTHOR_EMAIL__: JSON.stringify(VITE_APP_AUTHOR_EMAIL)
    },
    server: {
      port: Number(VITE_APP_PORT),
      host: true
    },
    resolve: {
      alias: {
        '@': `${root}/src`,
        '@views': `${root}/src/views`,
        '@assets': `${root}/src/assets`,
        '@utils': `${root}/src/utils`,
        // '@components': `${root}/src/components`,
        // '@layouts': `${root}/src/layouts`,
        '@store': `${root}/src/store`,
        '@router': `${root}/src/router`
      }
    },
    plugins: [
      vue(),
      vueDevTools()
    ]
  })
}