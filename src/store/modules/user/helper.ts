import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://s.gravatar.com/avatar/ec1085dae1bed2bc1d0334aa4dcc1928?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fha.png',
      name: 'haohao',
      description: 'Star on GitHub',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
