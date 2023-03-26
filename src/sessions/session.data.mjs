/* eslint-disable */
import { Peer } from '@elementbound/nlon'
/* eslint-enable */
import { timestamp } from '../utils.mjs'

export class SessionData {
  /**
  * Session id
  * @type {string}
  */
  id

  /**
  * Associated user's id
  * @type {string}
  */
  userId

  /**
  * Peer associated with session
  * @type {Peer}
  */
  peer

  /**
  * Date of the last message received
  * @type {number}
  */
  lastMessage = timestamp()

  /**
  * Construct instance.
  * @param {SessionData} [data] Data
  */
  constructor (data) {
    data && Object.assign(this, data)
  }
}
