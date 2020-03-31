import express from 'express'
/* import Agenda from 'agenda' */
import { EventEmitter2 } from  'eventemitter2'
import { isProduction } from '../../config'
import loadSubscribers from '../subscribers/index'
/* import loadAgenda from './agenda' */
import loadExpress from './express'
import loadApollo from './apollo'
import loadJobs from './jobs'

export default async (app?: express.Application) => {
  if(!isProduction)
    console.log(`Loading in DEVELOPMENT mode`)

  console.log(`Loading subscribers...`)
  const emitter: EventEmitter2 = await loadSubscribers()
  console.log(`Subscribers loaded!`)

  console.log(`Loading jobs...`)
  await loadJobs()
  console.log(`Jobs loaded!`)

  if(app){
    console.log(`Received preloaded express app`)
  } else {
    console.log(`Loading express...`)
    app = await loadExpress()
    /* app = await loadExpress({ agenda }) */
    console.log(`Express loaded!`)
  }

  console.log(`Loading apollo...`)
  await loadApollo({ app })
  console.log(`Apollo loaded!`)

  if(isProduction)
    emitter.emit('started')
}