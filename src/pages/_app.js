import { store } from "@/redux/store"
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux"

export default function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return <Provider store={store}> <SessionProvider session={session}>{getLayout(<Component {...pageProps} />)}</SessionProvider></Provider>

}