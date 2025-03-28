import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockHotelGroups, mockModules, mockRoles, mockStatus } from "@/constants/option";

export default function FilterCluster() {
    return (
        <div className="flex items-center justify-between gap-4">
            <Input placeholder="Search" className="w-1/2" />

            <div className="flex gap-2 w-1/2">
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Hotel Group" />
                    </SelectTrigger>
                    <SelectContent>
                        {mockHotelGroups.map((hotelGroup) => (
                            <SelectItem key={hotelGroup.value} value={hotelGroup.value}>
                                {hotelGroup.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                        {mockRoles.map((role) => (
                            <SelectItem key={role.value} value={role.value}>
                                {role.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Module" />
                    </SelectTrigger>
                    <SelectContent>
                        {mockModules.map((module) => (
                            <SelectItem key={module.value} value={module.value}>
                                {module.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        {mockStatus.map((status) => (
                            <SelectItem key={status.value} value={status.value}>
                                {status.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

        </div>
    )
}
