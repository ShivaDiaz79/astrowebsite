import '@/styles/normalize.css'
import '@/styles/globals.css'
import '@/styles/main.css'


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export const config = {
  unstable_runtimeJS: false,
};
