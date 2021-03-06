import { ITcpTransportDescription, ITlsOptions } from '../session-description'
import { ConnectionOptions, TlsOptions } from 'tls'
const path = require('path')
const fs = require('fs')

function read (filePath: string) {
  const root: string = path.join(__dirname, '../../../')
  const fullPath = path.join(root, filePath)
  return fs.readFileSync(fullPath,
    {
      encoding: 'utf8', flag: 'r'
    })
}

export function getTlsOptions (tls: ITlsOptions): TlsOptions {
  let tlsOptions: TlsOptions = null
  if (tls && tls.key) {
    tlsOptions = {
      key: read(tls.key),
      cert: read(tls.cert),
      requestCert: tls.requestCert,
      rejectUnauthorized: tls.rejectUnauthorized
    } as TlsOptions
    if (tls.ca && tls.ca.length > 0) {
      tlsOptions.ca = tls.ca.map(i => read(i))
    }
  }
  return tlsOptions
}

export function getTlsConnectionOptions (tcp: ITcpTransportDescription): ConnectionOptions {
  let connectionOptions: ConnectionOptions = null
  const tls = tcp.tls
  if (tls && tls.key) {
    connectionOptions = {
      port: tcp.port,
      host: tcp.host,
      key: read(tcp.tls.key),
      cert: read(tcp.tls.cert)
    } as ConnectionOptions
    if (tcp.tls.ca && tcp.tls.ca.length > 0) {
      connectionOptions.ca = tcp.tls.ca.map(i => read(i))
    }
    if (tcp.tls.timeout) {
      connectionOptions.timeout = tcp.tls.timeout
    }
    if (tcp.tls.sessionTimeout) {
      connectionOptions.sessionTimeout = tcp.tls.sessionTimeout
    }
  }
  return connectionOptions
}
