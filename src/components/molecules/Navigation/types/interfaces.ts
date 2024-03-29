export interface NavLink {
  href: string
  text: string
  icon?: React.ComponentType
}

export interface NavProps {
  navLinks?: NavLink[]
}
