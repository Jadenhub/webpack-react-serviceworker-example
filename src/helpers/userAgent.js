import UAParser from 'ua-parser-js'
import { MOBILE_OS_REGEX, MOBILE, DESKTOP } from '../constants/devices.js'
const parser = new UAParser()

/**
 * @TODO define tablet
 * @param ua STRING: user agent 
 * @return desktop | mobile
 */
export function getDeviceType(req) {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  parser.setUA(userAgent)
  const { name } = parser.getOS()

  const isMobile = MOBILE_OS_REGEX.test(name)
  if (isMobile)  {
    return MOBILE
  } else {
    return DESKTOP
  }
}
