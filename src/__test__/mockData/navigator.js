import { DESKTOP_AGENT, MOBILE_AGENT } from "./agent";


export function MockDesktopNavigator(){
  global.navigator = {
    userAgent: DESKTOP_AGENT
  }
}

export function MockMobileNavigator(){
  global.navigator = {
    userAgent: MOBILE_AGENT
  }
}