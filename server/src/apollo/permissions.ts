import { rule, shield, and, or, not } from 'graphql-shield'
import { isAdmin } from './rules'

export default shield({
  Query: {

  },
  Mutation: {
    
  }
})