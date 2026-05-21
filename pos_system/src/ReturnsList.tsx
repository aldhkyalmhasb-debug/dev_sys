import { useState } from 'react';
import { Search, Printer, Settings, Home, Eye, X } from 'lucide-react';

interface ReturnsListProps {
  onNavigate: (route: string) => void;
}

interface ReturnRecord {
  id: string;
  type: string;
  voucherType: string;
  customer: string;
  currency: string;
  total: number;
  penalty: number;
  dueAmount: number;
  returnedCash: number;
  returnedNetwork: number;
  creditedToCustomer: number;
  isViaNetwork: boolean;
  status: 'مرحل' | 'جديد';
  date: string;
  exchangeRate: string;
  items: Array<{ itemName: string; qty: number; price: number; unit: string }>;
}

const INITIAL_RECORDS: ReturnRecord[] = [
  {
    id: '10006',
    type: 'مرتجع المبيعات',
    voucherType: 'مرتجع مبيعات بفاتورة',
    customer: '6003 : صالح منصور',
    currency: 'ر.ي',
    total: 4000.00,
    penalty: 0,
    dueAmount: 4000.00,
    returnedCash: 0,
    returnedNetwork: 0,
    creditedToCustomer: 4000.00,
    isViaNetwork: false,
    status: 'مرحل',
    date: '3/12/2024',
    exchangeRate: '1.00',
    items: [
      { itemName: 'أرز بسمتي 5كجم', qty: 1, price: 3500, unit: 'كيس' },
      { itemName: 'شاي الكبوس 250جم', qty: 1, price: 400, unit: 'حبة' }
    ]
  },
  {
    id: '10005',
    type: 'مرتجع المبيعات',
    voucherType: 'مرتجع مبيعات بفاتورة',
    customer: '6003 : صالح منصور',
    currency: 'ر.ي',
    total: 2500.00,
    penalty: 0,
    dueAmount: 2500.00,
    returnedCash: 2500.00,
    returnedNetwork: 0,
    creditedToCustomer: 0,
    isViaNetwork: false,
    status: 'جديد',
    date: '24/12/2023',
    exchangeRate: '1.00',
    items: [
      { itemName: 'زيت طبخ 1 لتر', qty: 2, price: 1200, unit: 'علبة' }
    ]
  },
  {
    id: '10004',
    type: 'مرتجع المبيعات',
    voucherType: 'مرتجع مبيعات بفاتورة',
    customer: '6003 : صالح منصور',
    currency: 'ر.ي',
    total: 800000.00,
    penalty: 0,
    dueAmount: 800000.00,
    returnedCash: 800000.00,
    returnedNetwork: 0,
    creditedToCustomer: 0,
    isViaNetwork: false,
    status: 'مرحل',
    date: '19/9/2022',
    exchangeRate: '1.00',
    items: [
      { itemName: 'حليب مجفف 900جم', qty: 150, price: 5200, unit: 'علبة' },
      { itemName: 'سكر السعيد 10كجم', qty: 4, price: 4800, unit: 'كيس' }
    ]
  },
  {
    id: '10003',
    type: 'مرتجع المبيعات',
    voucherType: 'مرتجع مبيعات بفاتورة',
    customer: 'حمود',
    currency: 'ر.ي',
    total: 9000.00,
    penalty: 0,
    dueAmount: 9000.00,
    returnedCash: 9000.00,
    returnedNetwork: 0,
    creditedToCustomer: 0,
    isViaNetwork: false,
    status: 'مرحل',
    date: '5/9/2021',
    exchangeRate: '1.00',
    items: [
      { itemName: 'أرز بسمتي 5كجم', qty: 2, price: 3500, unit: 'كيس' },
      { itemName: 'زيت طبخ 1 لتر', qty: 1, price: 1200, unit: 'علبة' }
    ]
  },
  {
    id: '10002',
    type: 'مرتجع المبيعات',
    voucherType: 'مرتجع مبيعات بفاتورة',
    customer: 'حمود',
    currency: 'ر.ي',
    total: 6000.00,
    penalty: 0,
    dueAmount: 6000.00,
    returnedCash: 6000.00,
    returnedNetwork: 0,
    creditedToCustomer: 0,
    isViaNetwork: false,
    status: 'مرحل',
    date: '5/9/2021',
    exchangeRate: '1.00',
    items: [
      { itemName: 'سكر السعيد 10كجم', qty: 1, price: 4800, unit: 'كيس' },
      { itemName: 'زيت طبخ 1 لتر', qty: 1, price: 1200, unit: 'علبة' }
    ]
  },
  {
    id: '10001',
    type: 'مرتجع المبيعات',
    voucherType: 'مرتجع مبيعات بفاتورة',
    customer: '6003 : صالح منصور',
    currency: 'ر.ي',
    total: 13260.00,
    penalty: 0,
    dueAmount: 13260.00,
    returnedCash: 0,
    returnedNetwork: 0,
    creditedToCustomer: 13260.00,
    isViaNetwork: false,
    status: 'مرحل',
    date: '29/1/2020',
    exchangeRate: '1.00',
    items: [
      { itemName: 'أرز بسمتي 5كجم', qty: 3, price: 3500, unit: 'كيس' },
      { itemName: 'حليب مجفف 900جم', qty: 1, price: 5200, unit: 'علبة' }
    ]
  }
];

export default function ReturnsList({ onNavigate }: ReturnsListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'الكل' | 'مرحل' | 'جديد'>('الكل');
  const [selectedRecord, setSelectedRecord] = useState<ReturnRecord | null>(null);

  // Search and filter logic
  const filteredRecords = INITIAL_RECORDS.filter(record => {
    const matchesSearch = record.id.includes(searchQuery) || record.customer.includes(searchQuery);
    const matchesStatus = statusFilter === 'الكل' || record.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const toggleStatusFilter = () => {
    if (statusFilter === 'الكل') setStatusFilter('مرحل');
    else if (statusFilter === 'مرحل') setStatusFilter('جديد');
    else setStatusFilter('الكل');
  };

  const handlePrintList = () => {
    window.print();
  };

  return (
    <div className="rl-page">
      {/* 1. Header Toolbar */}
      <div className="rl-header">
        {/* Search Input (Left side in RTL screenshot) */}
        <div className="rl-search-wrap">
          <Search size={14} color="#888" style={{ marginLeft: '6px' }} />
          <input
            type="text"
            className="rl-search-input"
            placeholder="بحث : الرقم أو العميل..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Toolbar Actions (Right side in RTL screenshot) */}
        <div className="rl-header-actions">
          <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#555' }}>
            تصفية الحالة: <span style={{ color: '#0b5394', cursor: 'pointer' }} onClick={toggleStatusFilter}>{statusFilter}</span>
          </span>

          <button className="rl-btn-adv" onClick={toggleStatusFilter}>
            <Search size={13} style={{ marginLeft: '4px' }} />
            <span>بحث متقدم</span>
          </button>

          <div className="rl-utility-icon" title="طباعة" onClick={handlePrintList}>
            <Printer size={15} />
          </div>

          <div className="rl-utility-icon" title="الرئيسية" onClick={() => onNavigate('dashboard')}>
            <Home size={15} />
          </div>

          <div className="rl-utility-icon" title="الإعدادات">
            <Settings size={15} />
          </div>
        </div>
      </div>

      {/* Title banner */}
      <div style={{ backgroundColor: '#eaeff2', padding: '6px 15px', borderBottom: '1px solid #c0cbd9', direction: 'rtl' }}>
        <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#2b3e50' }}>مرتجع المبيعات</span>
      </div>

      {/* 2. Main Grid Table */}
      <div className="rl-table-container">
        <table className="rl-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}>م</th>
              <th style={{ width: '40px' }}>عرض</th>
              <th>الرقم</th>
              <th>النوع</th>
              <th>نوع السند</th>
              <th>العميل</th>
              <th>العملة</th>
              <th>الإجمالي</th>
              <th>الغرامة على العميل/التخفيض المعاد</th>
              <th>المبلغ المستحق</th>
              <th>المبلغ المعاد نقداً</th>
              <th>المبلغ المعاد للعميل عبر الشبكة</th>
              <th>مبلغ يقيد لحساب العميل</th>
              <th>عبر شبكة</th>
              <th>الحالة</th>
              <th>التاريخ</th>
              <th>سعر التحويل</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.length === 0 ? (
              <tr>
                <td colSpan={17} style={{ textAlign: 'center', padding: '20px', color: '#7f8c8d' }}>
                  لا توجد سجلات تطابق البحث.
                </td>
              </tr>
            ) : (
              filteredRecords.map((record, index) => (
                <tr key={record.id}>
                  <td style={{ textAlign: 'center', backgroundColor: '#f5f7f8' }}>{index + 1}</td>
                  <td style={{ textAlign: 'center' }}>
                    <button 
                      onClick={() => setSelectedRecord(record)}
                      style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', color: '#3c8dbc' }}
                      title="استعراض تفاصيل المستند"
                    >
                      <Eye size={13} />
                    </button>
                  </td>
                  <td style={{ fontWeight: 'bold', color: '#0b5394' }}>{record.id}</td>
                  <td>{record.type}</td>
                  <td>{record.voucherType}</td>
                  <td>{record.customer}</td>
                  <td>{record.currency}</td>
                  <td style={{ fontWeight: 'bold' }}>{record.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                  <td>{record.penalty > 0 ? record.penalty.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '-'}</td>
                  <td style={{ fontWeight: 'bold' }}>{record.dueAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                  <td>{record.returnedCash.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                  <td>{record.returnedNetwork > 0 ? record.returnedNetwork.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '-'}</td>
                  <td style={{ fontWeight: 'bold', color: '#27ae60' }}>
                    {record.creditedToCustomer.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <input type="checkbox" checked={record.isViaNetwork} readOnly disabled />
                  </td>
                  <td>
                    <span className={record.status === 'مرحل' ? 'rl-status-posted' : 'rl-status-new'}>
                      {record.status}
                    </span>
                  </td>
                  <td>{record.date}</td>
                  <td>{record.exchangeRate}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 3. Bottom Tabs Bar */}
      <div className="rl-bottom-bar">
        <button className="rl-bottom-btn" onClick={() => alert('عرض أصناف المستندات بكمياتها.')}>
          <span>أصناف المستندات ( كميات )</span>
          <span className="rl-blue-square"></span>
        </button>

        <button className="rl-bottom-btn" onClick={() => alert('عرض كافة أصناف المستندات تفصيلياً.')}>
          <span>أصناف المستندات</span>
          <span className="rl-blue-square"></span>
        </button>

        <button className="rl-bottom-btn" onClick={() => alert('عرض المسودات المحفوظة.')}>
          <span>المسودات</span>
          <span className="rl-blue-square"></span>
        </button>

        <button className="rl-bottom-btn" onClick={() => alert('إعدادات السمات المخصصة للمستند.')}>
          <span>الإعدادات : سمات مخصصة</span>
          <span className="rl-blue-square"></span>
        </button>
      </div>

      {/* 4. Details Preview Modal Overlay */}
      {selectedRecord && (
        <div className="rl-modal-overlay" onClick={() => setSelectedRecord(null)}>
          <div className="rl-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="rl-modal-header">
              <span>تفاصيل مستند مرتجع مبيعات رقم {selectedRecord.id}</span>
              <button 
                onClick={() => setSelectedRecord(null)}
                style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="rl-modal-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                <div><strong>النوع:</strong> {selectedRecord.type}</div>
                <div><strong>نوع السند:</strong> {selectedRecord.voucherType}</div>
                <div><strong>العميل:</strong> {selectedRecord.customer}</div>
                <div><strong>التاريخ:</strong> {selectedRecord.date}</div>
                <div><strong>الحالة:</strong> <span style={{ fontWeight: 'bold', color: selectedRecord.status === 'مرحل' ? '#7f8c8d' : '#2980b9' }}>{selectedRecord.status}</span></div>
                <div><strong>العملة:</strong> {selectedRecord.currency}</div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ margin: '0 0 10px 0', borderBottom: '1px solid #ddd', paddingBottom: '4px' }}>أصناف المستند المرتجع:</h4>
                <table className="pos-grid-table" style={{ width: '100%' }}>
                  <thead>
                    <tr>
                      <th>م</th>
                      <th>الصنف</th>
                      <th>الوحدة</th>
                      <th>الكمية</th>
                      <th>سعر الوحدة</th>
                      <th>الإجمالي</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedRecord.items.map((item, index) => (
                      <tr key={index}>
                        <td className="pos-grid-id">{index + 1}</td>
                        <td style={{ padding: '6px' }}>{item.itemName}</td>
                        <td style={{ padding: '6px' }}>{item.unit}</td>
                        <td style={{ padding: '6px', textAlign: 'center' }}>{item.qty}</td>
                        <td style={{ padding: '6px', textAlign: 'center' }}>{item.price.toFixed(2)}</td>
                        <td style={{ padding: '6px', textAlign: 'center', fontWeight: 'bold' }}>{(item.qty * item.price).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '10px', borderRadius: '4px', border: '1px solid #e2edf6' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', textAlign: 'center' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#666' }}>إجمالي الأصناف</div>
                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{selectedRecord.total.toLocaleString()} {selectedRecord.currency}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#666' }}>المعاد نقداً</div>
                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{selectedRecord.returnedCash.toLocaleString()} {selectedRecord.currency}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#666' }}>يقيد لحساب العميل</div>
                    <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#27ae60' }}>{selectedRecord.creditedToCustomer.toLocaleString()} {selectedRecord.currency}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rl-modal-footer">
              <button 
                className="cr-btn cr-btn-save" 
                onClick={() => {
                  alert('ميزة ترحيل المستندات مباشرة.');
                }}
                style={{ marginLeft: '8px' }}
                disabled={selectedRecord.status === 'مرحل'}
              >
                ترحيل المستند
              </button>
              <button className="cr-btn cr-btn-cancel" onClick={() => setSelectedRecord(null)}>إغلاق</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
