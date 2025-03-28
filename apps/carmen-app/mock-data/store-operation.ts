import { StoreRequisitionDto } from "@/dtos/store-operation.dto";

export const mockStoreRequisitions: StoreRequisitionDto[] = [
    {
        id: "SR-001",
        ref_no: "REQ-20240301-001",
        request_to: "Main Warehouse",
        store_name: "Office Supplies",
        description: "Request for printing paper and stationery",
        total_amount: 1200,
        status: "Pending",
        date_created: "2024-03-01",
    },
    {
        id: "SR-002",
        ref_no: "REQ-20240302-002",
        request_to: "IT Storage",
        store_name: "IT Equipment",
        description: "Request for replacement keyboards and mice",
        total_amount: 4500,
        status: "Approved",
        date_created: "2024-03-02",
    },
    {
        id: "SR-003",
        ref_no: "REQ-20240303-003",
        request_to: "Marketing Storage",
        store_name: "Marketing Materials",
        description: "Request for promotional banners and flyers",
        total_amount: 3200,
        status: "Under Review",
        date_created: "2024-03-03",
    },
    {
        id: "SR-004",
        ref_no: "REQ-20240304-004",
        request_to: "HR Supplies",
        store_name: "HR Department",
        description: "Request for onboarding kits for new employees",
        total_amount: 2500,
        status: "Rejected",
        date_created: "2024-03-04",
    },
    {
        id: "SR-005",
        ref_no: "REQ-20240305-005",
        request_to: "Facilities Storage",
        store_name: "Building Maintenance",
        description: "Request for new light bulbs and cleaning supplies",
        total_amount: 1800,
        status: "Approved",
        date_created: "2024-03-05",
    },
    {
        id: "SR-006",
        ref_no: "REQ-20240306-006",
        request_to: "Medical Supplies",
        store_name: "Health & Safety",
        description: "Request for first aid kits and safety gloves",
        total_amount: 5000,
        status: "Pending",
        date_created: "2024-03-06",
    },
    {
        id: "SR-007",
        ref_no: "REQ-20240307-007",
        request_to: "IT Storage",
        store_name: "Software Licenses",
        description: "Request for additional Microsoft Office licenses",
        total_amount: 15000,
        status: "Completed",
        date_created: "2024-03-07",
    },
    {
        id: "SR-008",
        ref_no: "REQ-20240308-008",
        request_to: "Main Warehouse",
        store_name: "Office Furniture",
        description: "Request for ergonomic chairs and desks",
        total_amount: 20000,
        status: "Under Review",
        date_created: "2024-03-08",
    },
    {
        id: "SR-009",
        ref_no: "REQ-20240309-009",
        request_to: "Security Storage",
        store_name: "Security Equipment",
        description: "Request for new CCTV cameras and alarm system parts",
        total_amount: 18000,
        status: "Rejected",
        date_created: "2024-03-09",
    },
    {
        id: "SR-010",
        ref_no: "REQ-20240310-010",
        request_to: "HR Supplies",
        store_name: "Training Materials",
        description: "Request for training manuals and printed handouts",
        total_amount: 6000,
        status: "Completed",
        date_created: "2024-03-10",
    },
];


export const mockStockData = [
    {
        id: 1,
        name: 'Thai Milk Tea',
        description: 'Premium Thai tea powder with creamer (12 sachets/box)',
        sku: 'BEV-001',
        location: 'Central Kitchen',
        locationCode: 'CK-001',
        currentStock: 25,
        minLevel: 30,
        maxLevel: 100,
        parLevel: 80,
        onOrder: 50,
        reorderPoint: 40,
        lastPrice: 45.99,
        lastVendor: 'Thai Beverage Co.',
        status: 'low',
        usage: 'high',
        orderAmount: 0,
        unit: 'Box'
    },
    {
        id: 2,
        name: 'Coffee Beans',
        description: 'Premium Arabica whole beans (1kg/bag)',
        sku: 'BEV-002',
        location: 'Roastery Store',
        locationCode: 'RS-001',
        currentStock: 45,
        minLevel: 20,
        maxLevel: 80,
        parLevel: 60,
        onOrder: 0,
        reorderPoint: 30,
        lastPrice: 28.50,
        lastVendor: 'Global Coffee Suppliers',
        status: 'normal',
        usage: 'medium',
        orderAmount: 0,
        unit: 'Bag'
    }
];

export const mockStockLevels = [
    { month: 'Jan', level: 150 },
    { month: 'Feb', level: 180 },
    { month: 'Mar', level: 120 },
    { month: 'Apr', level: 200 },
    { month: 'May', level: 160 },
    { month: 'Jun', level: 140 },
];


export const mockMonthlyWastage = [
    { month: 'Jan', value: 2500 },
    { month: 'Feb', value: 1800 },
    { month: 'Mar', value: 3200 },
    { month: 'Apr', value: 2200 },
    { month: 'May', value: 2800 },
    { month: 'Jun', value: 1900 }
];

export const mockWastageByReason = [
    { name: 'Expiration', value: 45 },
    { name: 'Damage', value: 25 },
    { name: 'Quality Issues', value: 20 },
    { name: 'Other', value: 10 }
];

export const mockWastageRecords = [
    {
        id: 1,
        date: '2024-01-15',
        itemCode: 'BEV-001',
        itemName: 'Thai Milk Tea (12 pack)',
        quantity: 5,
        unitCost: 45.99,
        totalLoss: 229.95,
        reason: 'Expiration',
        reportedBy: 'John Smith',
        status: 'Pending Review'
    },
    {
        id: 2,
        date: '2024-01-14',
        itemCode: 'BEV-002',
        itemName: 'Coffee Beans (1kg)',
        quantity: 2,
        unitCost: 28.50,
        totalLoss: 57.00,
        reason: 'Quality Issues',
        reportedBy: 'Jane Doe',
        status: 'Approved'
    }
];
