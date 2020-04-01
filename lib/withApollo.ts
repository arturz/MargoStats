import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { PORT, HOSTNAME } = publicRuntimeConfig

const port = parseInt(PORT) || 80
const hostname = HOSTNAME || 'localhost'

const uri = port === 80 || port === 443
  ? `http://${hostname}/graphql`
  : `http://${hostname}:${port}/graphql`

const config = {
  link: new HttpLink({
    uri,
    credentials: 'same-origin'
  }),
  onError(error){
    console.log(error)
  }
}

export default withData(config)