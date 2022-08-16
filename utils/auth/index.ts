import { TUserStrapiRes } from 'types/user'

export const normalizeUser = (user: TUserStrapiRes) => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    isActive: true,
    role: {
      name: user.role.name,
      description: user.role.description,
      type: user.role.type,
      id: user.role.id,
    },
  }
}
