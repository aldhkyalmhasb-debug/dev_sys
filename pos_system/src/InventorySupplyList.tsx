import { useState } from 'react';
import { Settings, Home, Search, FilePlus, Printer, Copy, RefreshCw, Download, Eye } from 'lucide-react';

interface InventorySupplyListProps {
  onNavigate: (route: string) => void;
}

export default function InventorySupplyList({ onNavigate }: InventorySupplyListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('pending');

  const mockData = [
    { id: 1, docNo: '4', type: 'أمر توريد مخزني', movementType: 'توريد مخزني للبضاعة المشتراة', date: '2023-10-04', status: 'مرحل', note: '', addedBy: 'مواد غذائية جملة/تجزئة', recordDate: '2023-10-04' },
    { id: 2, docNo: '3', type: 'أمر توريد مخزني', movementType: '', date: '2023-09-15', status: 'مرحل', note: '', addedBy: 'مواد غذائية جملة/تجزئة تجريبي', recordDate: '2023-09-15' },
    { id: 3, docNo: '2', type: 'أمر توريد مخزني', movementType: '', date: '2023-09-15', status: 'مرحل', note: '', addedBy: 'مواد غذائية جملة/تجزئة تجريبي', recordDate: '2023-09-15' },
    { id: 4, docNo: '1', type: 'أمر توريد مخزني', movementType: '', date: '2023-09-15', status: 'مرحل', note: '', addedBy: 'مواد غذائية جملة/تجزئة تجريبي', recordDate: '2023-09-15' },
  ];

  const tabs = [
    { id: 'pending', label: 'بإنتظار الموافقة' },
    { id: 'settings', label: 'الإعدادات : سمات مخصصة' },
    { id: 'drafts', label: 'المسودات' },
    { id: 'docTypes', label: 'أصناف المستندات' },
    { id: 'docTypesQty', label: 'أصناف المستندات ( كميات )' },
    { id: 'docCategories', label: 'فئات المستند' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#f5f5f5', direction: 'rtl', fontFamily: 'Tahoma, Arial, sans-serif' }}>

      {/* ── Top Toolbar ── */}
      <div style={{ background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)', padding: '8px 12px', borderBottom: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px' }}>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="الإعدادات">
          <Settings size={18} color="#6c757d" />
        </button>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="الرئيسية">
          <Home size={18} color="#6c757d" />
        </button>
        <span style={{ color: '#999', fontSize: '16px' }}>|</span>
        <button onClick={() => onNavigate('inventory-supply-search')} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'linear-gradient(to bottom, #fff, #f0f0f0)', border: '1px solid #ccc', borderRadius: '3px', padding: '4px 12px', textDecoration: 'none', color: '#333', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>
          <span>بحث متقدم</span>
          <Search size={14} color="#6c757d" />
        </button>
        <button onClick={() => onNavigate('inventory-supply-new')} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'linear-gradient(to bottom, #fff, #f0f0f0)', border: '1px solid #ccc', borderRadius: '3px', padding: '4px 12px', textDecoration: 'none', color: '#333', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>
          <span>جديد (أمر توريد مخزني)</span>
          <FilePlus size={14} color="#28a745" />
        </button>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="طباعة">
          <Printer size={18} color="#6c757d" />
        </button>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px', fontSize: '12px', color: '#3c8dbc' }}>
          Eco
        </button>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center', background: '#fff', border: '1px solid #ccc', borderRadius: '4px', padding: '4px 8px', gap: '6px' }}>
          <Search size={14} color="#888" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="بحث : رقم المستند"
            style={{ border: 'none', outline: 'none', fontSize: '12px', width: '150px', background: 'transparent', direction: 'rtl' }}
          />
        </div>
      </div>

      {/* ── Table Toolbar ── */}
      <div style={{ background: '#d4e6f1', padding: '6px 12px', borderBottom: '1px solid #b0c4de', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '12px' }}>
        <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#1a4e76' }}>أمر توريد مخزني</span>
        <div style={{ flex: 1 }} />
        <input type="checkbox" style={{ cursor: 'pointer' }} />
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px' }} title="طباعة">
          <Printer size={16} color="#3c8dbc" />
        </button>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px' }} title="تحديث">
          <RefreshCw size={16} color="#3c8dbc" />
        </button>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px' }} title="تصدير">
          <Download size={16} color="#3c8dbc" />
        </button>
      </div>

      {/* ── Data Table ── */}
      <div style={{ flex: 1, overflow: 'auto', background: '#fff' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: '#6c7a89' }}>
              <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78', width: '40px' }}>م</th>
              <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78', width: '60px' }}>الرقم</th>
              <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78' }}>النوع</th>
              <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78' }}>نوع الحركة المخزنية</th>
              <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78', width: '100px' }}>التاريخ</th>
              <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78', width: '80px' }}>الحالة</th>
              <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78' }}>ملاحظة</th>
              <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78' }}>الإضافة بواسطة</th>
              <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78', width: '100px' }}>تاريخ السجل</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <tr
                key={row.id}
                style={{
                  background: index % 2 === 0 ? '#f8f9fa' : '#fff',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#e8f0f8')}
                onMouseLeave={(e) => (e.currentTarget.style.background = index % 2 === 0 ? '#f8f9fa' : '#fff')}
              >
                <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <span>{index + 1}</span>
                    <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '0' }} title="عرض">
                      <Eye size={14} color="#3c8dbc" />
                    </button>
                    <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '0' }} title="نسخ">
                      <Copy size={14} color="#3c8dbc" />
                    </button>
                  </div>
                </td>
                <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0', fontWeight: 'bold', color: '#3c8dbc' }}>{row.docNo}</td>
                <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0', color: '#3c8dbc' }}>{row.type}</td>
                <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0', color: '#3c8dbc' }}>{row.movementType}</td>
                <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0' }}>{row.date}</td>
                <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0' }}>
                  <span style={{
                    padding: '2px 8px',
                    borderRadius: '3px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    backgroundColor: row.status === 'مرحل' ? '#d4edda' : '#cce5ff',
                    color: row.status === 'مرحل' ? '#155724' : '#004085'
                  }}>{row.status}</span>
                </td>
                <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0' }}>{row.note || ''}</td>
                <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0', color: '#3c8dbc' }}>{row.addedBy}</td>
                <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0' }}>{row.recordDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Tabs ── */}
      <div style={{ background: '#f0f4f8', borderTop: '1px solid #d0d8e0', display: 'flex', gap: '2px', padding: '4px 8px 0', overflowX: 'auto', justifyContent: 'flex-start' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '6px 14px',
              border: '1px solid #ccc',
              borderBottom: activeTab === tab.id ? 'none' : '1px solid #ccc',
              borderRadius: '4px 4px 0 0',
              background: activeTab === tab.id ? '#fff' : 'linear-gradient(to bottom, #f8f9fa, #e9ecef)',
              color: activeTab === tab.id ? '#1a4e76' : '#666',
              fontSize: '12px',
              fontWeight: activeTab === tab.id ? 'bold' : 'normal',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              marginBottom: '-1px'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

    </div>
  );
}
