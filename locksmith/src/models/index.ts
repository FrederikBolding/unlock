import { Sequelize } from 'sequelize-typescript'
import { User } from './user'
import { UserReference } from './userReference'
import { Lock } from './lock'
import { Transaction } from './transaction'
import { AuthorizedLock } from './authorizedLock'
import { LockMetadata } from './lockMetadata'
import { KeyMetadata } from './keyMetadata'
import { ParsedBlockForLockCreation } from './parsedBlockForLockCreation'
import { UserTokenMetadata } from './usertokenmetadata'
import { StripeCustomer } from './stripeCustomer'
import { StripeConnectLock } from './stripeConnectLock'
import { LockIcons } from './lockIcons'
import { Charge } from './charge'
import logger from '../logger'

const config = require('../../config/config').database

logger.info(`Connecting to database, ${JSON.stringify(config)}`)

let sequelize
if (config.uri) {
  sequelize = new Sequelize(config.uri, config.options)
} else {
  // We assume config from an object of {username, password, database, host, dialect}
  sequelize = new Sequelize(config)
}

sequelize.addModels([
  User,
  UserReference,
  Lock,
  Transaction,
  AuthorizedLock,
  LockMetadata,
  KeyMetadata,
  ParsedBlockForLockCreation,
  UserTokenMetadata,
  StripeCustomer,
  StripeConnectLock,
  LockIcons,
  Charge,
])

User.removeAttribute('id')
Lock.removeAttribute('id')
Transaction.removeAttribute('id')
LockMetadata.removeAttribute('id')
StripeCustomer.removeAttribute('id')

export * from './user'
export * from './userReference'
export * from './lock'
export * from './transaction'
export * from './authorizedLock'
export * from './usertokenmetadata'
export * from './stripeCustomer'
export * from './stripeConnectLock'
export * from './charge'
export * from './lockIcons'
