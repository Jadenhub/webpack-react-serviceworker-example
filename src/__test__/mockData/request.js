import { DESKTOP_AGENT, MOBILE_AGENT } from "./agent"

export function getMockDesktopRequest(){
  return {
    path: '/',
    headers: {
      'user-agent': DESKTOP_AGENT
    }
  }
}

export function getMockMobileRequest(){
  return {
    path: '/',
    headers: {
      'user-agent': MOBILE_AGENT
    }
  }
}