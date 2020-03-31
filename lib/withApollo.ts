import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const config = {
  link: new HttpLink({
    uri: process.env.HOSTNAME ? `http://${process.env.HOSTNAME}/graphql` : 'http://localhost/graphql',
    credentials: 'same-origin'
  }),
  onError(error){
    console.log(error)
  }
}

export default withData(config)