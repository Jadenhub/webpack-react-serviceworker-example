import { API_PATH } from "../../constants/env"
import clientfetch from "../../helpers/clientfetch"

export async function getRates(){
  return clientfetch(
    `${API_PATH}/exchange_rates`,
    {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'GET',
    }
  )
}