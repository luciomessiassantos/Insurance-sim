import { ZardIcon } from "@/shared/components/icon"

export type SidebarLink = {
    id: string
    icon: ZardIcon
    label: string
    path: string | "#"
}

export type SidebarSection = {
    id: string
    menuTitle: string
    items: SidebarLink[]
}
