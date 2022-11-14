import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '@/lib/apollo'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import '../styles/globals.css'


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ApolloProvider>
  )
}

export default App