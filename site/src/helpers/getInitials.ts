export const getInitials = (name: string) => {
  return name.match(/\b\w/g).map(char => char.toLocaleUpperCase())
}
