"use client";
import { MenuCardGrid, MenuCardItem } from "@/components/ui/menu-card";
import { Boxes, SlidersHorizontal, Search, ClipboardCheck, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function InventoryManagementPage() {
    const t = useTranslations('Modules');

    const subMenu: MenuCardItem[] = [
        {
            name: t('InventoryManagement.stockOverview'),
            href: '/inventory-management/stock-overview',
            icon: Boxes
        },
        {
            name: t('InventoryManagement.inventoryAdjustments'),
            href: '/inventory-management/inventory-adjustments',
            icon: SlidersHorizontal
        },
        {
            name: t('InventoryManagement.spotCheck'),
            href: '/inventory-management/spot-check',
            icon: Search
        },
        {
            name: t('InventoryManagement.physicalCountManagement'),
            href: '/inventory-management/physical-count-management',
            icon: ClipboardCheck
        },
        {
            name: t('InventoryManagement.periodEnd'),
            href: '/inventory-management/period-end',
            icon: Clock
        }
    ]
    return (
        <div className="container">
            <h1 className="text-3xl font-bold mb-8">{t('inventoryManagement')}</h1>
            <MenuCardGrid items={subMenu} />
        </div>
    )
}
