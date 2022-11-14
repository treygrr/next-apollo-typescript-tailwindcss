import { NextPage, NextPageContext } from 'next'

interface ErrorProps {
  statusCode?: number
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => (
  <p>
    {statusCode
      ? `Watch out! A wild ${statusCode} appeared on the server!`
      : 'An error occurred on client'}
  </p>
)

Error.getInitialProps = (context: NextPageContext) => {
  const statusCode = context?.res ? context?.res.statusCode : context?.err ? context?.err.statusCode : 404
  return { statusCode }
}

export default Error