import { SidebarItem } from "@/types/main";
import {
    LayoutDashboard,
    FolderTree,
    Users,
    FileText,
    Settings,
    UserPlus
} from "lucide-react"

export const sidebarItems: SidebarItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
        allowedRoles: ['is_platform', 'is_cluster', 'is_business_unit'],
    },
    {
        title: 'Platforms',
        href: '/platform',
        icon: FileText,
        allowedRoles: ['is_platform'],
        children: [
            {
                title: 'Overview',
                href: '/platform',
            },
            {
                title: 'Platform Users',
                href: '/platform/users',
                icon: UserPlus,
            },
            {
                title: 'Platform Settings',
                href: '/platform/settings',
                icon: Settings,
            }
        ]
    },
    {
        title: 'Clusters',
        href: '/cluster',
        icon: FolderTree,
        allowedRoles: ['is_platform', 'is_cluster'],
        children: [
            {
                title: 'Overview',
                href: '/cluster',
            },
            {
                title: 'Cluster Users',
                href: '/cluster/users',
                icon: UserPlus,
            },
            {
                title: 'Cluster Settings',
                href: '/cluster/settings',
                icon: Settings,
            }
        ]
    },
    {
        title: 'Business Units',
        href: '/business-unit',
        icon: Users,
        allowedRoles: ['is_platform', 'is_cluster', 'is_business_unit'],
        children: [
            {
                title: 'Overview',
                href: '/business-unit',
            },
            {
                title: 'Business Unit Users',
                href: '/business-unit/users',
                icon: UserPlus,
            },
            {
                title: 'Business Unit Settings',
                href: '/business-unit/settings',
                icon: Settings,
            }
        ]
    },
]
