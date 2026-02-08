import { ZardIcon } from "@/shared/components/icon"
import { LucideIconData, LucideIcons } from "lucide-angular"

export type SidebarLink = {
    id: string
    icon: LucideIconData
    label: string
    path: string | "#"
}

export type SidebarSection = {
    id: string
    menuTitle: string
    items: SidebarLink[]
}


export type User = {
    username: string

    lastLoggedIn: Date | string
}
