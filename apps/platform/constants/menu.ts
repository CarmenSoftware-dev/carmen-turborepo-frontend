import { SidebarItem } from "@/dto/sidebar.dto"
import {
    LayoutDashboard,
    FolderTree,
    Users,
    FileText,
    Settings,
    UserPlus,
    IdCardIcon,
    HelpCircle,
    User
} from "lucide-react"

export const sidebarItems: SidebarItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
        allowedRoles: ['is_platform', 'is_cluster', 'is_business_unit'],
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
                title: 'Template',
                href: '/cluster/template',
                icon: UserPlus,
            },
            {
                title: 'Members',
                href: '/cluster/members',
                icon: UserPlus,
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
    {
        title: 'Users',
        href: '/user',
        icon: User,
        allowedRoles: ['is_platform', 'is_cluster', 'is_business_unit'],
        children: [
            {
                title: 'Platform Users',
                href: '/user/platform',
            },
            {
                title: 'Cluster Users',
                href: '/user/cluster',
            },
            {
                title: 'Business Unit Users',
                href: '/user/business-unit',
            },
            {
                title: 'Role',
                href: '/user/role',
            },
            {
                title: 'Access Control',
                href: '/user/access-control',
            }
        ]
    },
    {
        title: 'Reports',
        href: '/reports',
        icon: FileText,
        allowedRoles: ['is_platform', 'is_cluster', 'is_business_unit'],
    },
    {
        title: 'Subscriptions',
        href: '/subscriptions',
        icon: IdCardIcon,
        allowedRoles: ['is_platform', 'is_cluster', 'is_business_unit'],
        children: [
            {
                title: 'Subscriptions',
                href: '/subscriptions',
            },
            {
                title: 'Plan',
                href: '/subscriptions/plan',
            },
            {
                title: 'Module',
                href: '/subscriptions/module',
            },

            {
                title: 'Usage',
                href: '/subscriptions/usage',
            },
            {
                title: 'Report',
                href: '/subscriptions/report',
            },
            {
                title: 'Invoice',
                href: '/subscriptions/invoice',
            }
        ]
    },
    {
        title: 'Support',
        href: '/support',
        icon: HelpCircle,
        allowedRoles: ['is_platform', 'is_cluster', 'is_business_unit'],
    },
    {
        title: 'Settings',
        href: '/settings',
        icon: Settings,
        allowedRoles: ['is_platform', 'is_cluster', 'is_business_unit'],
        children: [
            {
                title: 'General ',
                href: '/settings',
            },
            {
                title: 'Profile',
                href: '/settings/profile',
            },
            {
                title: 'Security',
                href: '/settings/security',
            }
        ]
    }
]
