import { createSafeContext } from "../helpers/createSafeContext"

const SHOW_ALERT = "SHOW_ALERT"
const DISMISS_ALERT = "DISMISS_ALERT"

const initialState = {
  alert: {
    isVisible: false,
    title: "",
    message: "",
    type: "",
  },
}

type AppState = typeof initialState

type Action =
  | {
      type: typeof SHOW_ALERT
      payload: {
        message: string
        title: string
        type: "success" | "error" | "warning"
      }
    }
  | { type: typeof DISMISS_ALERT }

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case SHOW_ALERT:
      console.log("show")
      return {
        ...state,
        alert: {
          isVisible: true,
          message: action.payload.message,
          title: action.payload.title,
          type: action.payload.type,
        },
      }
    case DISMISS_ALERT:
      return {
        ...state,
        alert: {
          isVisible: false,
          message: "",
          title: "",
          type: "success",
        },
      }
    default:
      return state
  }
}

const [context, contextProvider] = createSafeContext(reducer, initialState)

export const AppContext = context
export const AppProvider = contextProvider
