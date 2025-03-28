"use client";

import { DepartmentDto } from "@/dtos/config.dto";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Pencil, Power } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TableBodySkeleton } from "@/components/loading/TableBodySkeleton";

interface DepartmentListProps {
    readonly departments: DepartmentDto[];
    readonly onEdit: (department: DepartmentDto) => void;
    readonly onToggleStatus: (department: DepartmentDto) => void;
    readonly isLoading: boolean;
}

export default function DepartmentList({
    departments,
    onEdit,
    onToggleStatus,
    isLoading
}: DepartmentListProps) {
    const t = useTranslations('TableHeader');
    return (
        <div className="relative">
            <Table>
                <TableHeader className="sticky top-0">
                    <TableRow>
                        <TableHead className="w-10">#</TableHead>
                        <TableHead className="w-20">{t('name')}</TableHead>
                        <TableHead className="w-20">{t('status')}</TableHead>
                        <TableHead className="w-20 text-right">{t('action')}</TableHead>
                    </TableRow>
                </TableHeader>
            </Table>
            {isLoading ? (
                <TableBodySkeleton columns={3} />
            ) : (
                <ScrollArea className="h-[calc(102vh-300px)] w-full">
                    <Table>
                        <TableBody>
                            {departments.map((department, index) => (
                                <TableRow key={department.id}>
                                    <TableCell className="w-10">{index + 1}</TableCell>
                                    <TableCell className="w-20">
                                        {department.name}
                                    </TableCell>
                                    <TableCell className="w-20" >
                                        <Badge variant={department.is_active ? "default" : "destructive"}>
                                            {department.is_active ? "Active" : "Inactive"}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="w-20">
                                        <div className="flex items-center justify-end gap-2">
                                            <Button
                                                variant="ghost"
                                                size={'sm'}
                                                onClick={() => onEdit(department)}
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size={'sm'}
                                                onClick={() => onToggleStatus(department)}
                                                className={department.is_active ? "hover:text-red-500" : "hover:text-green-500"}
                                            >
                                                <Power className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollArea>
            )}
        </div>
    )
} 