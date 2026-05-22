import { useState } from 'react';
import { Settings, LayoutGrid, List, FilePlus, Search, ChevronLeft, Check, Printer, RefreshCw, Download } from 'lucide-react';

interface InventoryTransferMainProps {
  onNavigate: (route: string) => void;
}

export default function InventoryTransferMain({ onNavigate }: InventoryTransferMainProps) {
  const [activeTab, setActiveTab] = useState('settings');
  const [recordCount, setRecordCount] = useState('100');

  const tabs = [
    { id: 'settings', label: 'الإعدادات : سمات مخصصة' },
    { id: 'drafts', label: 'المسودات' },
    { id: 'docTypes', label: 'أصناف المستندات' },
    { id: 'docTypesQty', label: 'أصناف المستندات ( كميات )' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#f5f5f5', direction: 'rtl', fontFamily: 'Tahoma, Arial, sans-serif' }}>

      {/* ── Top Toolbar ── */}
      <div style={{ background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)', padding: '8px 12px', borderBottom: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px' }}>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="عرض الشبكة">
          <LayoutGrid size={18} color="#6c757d" />
        </button>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="عرض القائمة">
          <List size={18} color="#6c757d" />
        </button>
        <button onClick={() => onNavigate('inventory-transfer-new')} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'linear-gradient(to bottom, #fff, #f0f0f0)', border: '1px solid #ccc', borderRadius: '3px', padding: '4px 12px', textDecoration: 'none', color: '#333', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>
          <span>جديد (أمر تحويل بضاعة إلى مخزن آخر)</span>
          <FilePlus size={14} color="#28a745" />
        </button>
        <button onClick={() => onNavigate('inventory-transfer-search')} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'linear-gradient(to bottom, #fff, #f0f0f0)', border: '1px solid #ccc', borderRadius: '3px', padding: '4px 12px', textDecoration: 'none', color: '#333', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>
          <span>بحث متقدم</span>
          <Search size={14} color="#6c757d" />
        </button>
        <span style={{ color: '#999', fontSize: '16px' }}>|</span>
        <button style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'linear-gradient(to bottom, #e74c3c, #c0392b)', border: '1px solid #a93226', borderRadius: '3px', padding: '4px 12px', textDecoration: 'none', color: '#fff', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>
          <span>تنفيذ</span>
          <ChevronLeft size={14} />
        </button>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="عرض">
          <LayoutGrid size={18} color="#6c757d" />
        </button>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="الإعدادات">
          <Settings size={18} color="#6c757d" />
        </button>
      </div>

      {/* ── Title Bar ── */}
      <div style={{ background: '#e8ecf0', padding: '6px 12px', borderBottom: '1px solid #ccc', textAlign: 'center' }}>
        <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#1a1a1a' }}>أمر تحويل بضاعة إلى مخزن آخر</span>
      </div>

      {/* ── Search Form Area ── */}
      <div style={{ background: '#f0f4f8', padding: '12px 16px', borderBottom: '1px solid #d0d8e0' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', marginBottom: '12px' }}>
          {/* الرقم */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#333', fontWeight: 'bold', whiteSpace: 'nowrap' }}>الرقم</label>
            <input type="text" style={{ width: '100px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fffde7' }} />
          </div>
          {/* رقم التحويل */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#333', fontWeight: 'bold', whiteSpace: 'nowrap' }}>رقم التحويل</label>
            <input type="text" style={{ width: '150px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }} />
          </div>
          {/* رقم الحساب */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#333', fontWeight: 'bold', whiteSpace: 'nowrap' }}>رقم الحساب</label>
            <select style={{ width: '200px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }}>
              <option value="">-- اختر --</option>
            </select>
          </div>
        </div>
        {/* Execute Search Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(to bottom, #4a90d9, #357abd)', border: '1px solid #2a6aad', borderRadius: '4px', padding: '8px 24px', color: '#fff', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            <Check size={16} />
            <span>تنفيذ البحث</span>
          </button>
        </div>
      </div>

      {/* ─ Record Count ── */}
      <div style={{ background: '#f8f9fa', padding: '8px 16px', borderBottom: '1px solid #d0d8e0', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '10px' }}>
        <label style={{ fontSize: '13px', color: '#333', fontWeight: 'bold' }}>عدد السجلات</label>
        <input
          type="text"
          value={recordCount}
          onChange={(e) => setRecordCount(e.target.value)}
          style={{ width: '80px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', textAlign: 'center' }}
        />
      </div>

      {/* ── Tabs ── */}
      <div style={{ background: '#f0f4f8', borderBottom: '1px solid #d0d8e0', display: 'flex', gap: '2px', padding: '4px 8px 0', overflowX: 'auto', justifyContent: 'flex-start' }}>
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

      {/* ── Table Toolbar ── */}
      <div style={{ background: '#d4e6f1', padding: '6px 12px', borderBottom: '1px solid #b0c4de', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px' }}>
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
              <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78' }}>عملة المستند</th>
              <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78' }}>الإجمالي</th>
              <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78', width: '80px' }}>الحالة</th>
              <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78' }}>تاريخ التحويل</th>
              <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78' }}>من المخزن</th>
              <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78' }}>إلى المخزن</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty body as per screenshot */}
          </tbody>
        </table>
      </div>

    </div>
  );
}
