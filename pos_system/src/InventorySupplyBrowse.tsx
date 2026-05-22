import { useState } from 'react';
import { Settings, Copy, RefreshCw, FilePlus, ChevronLeft, ChevronRight, ChevronDown, Printer, Search, Home, List, Plus, Info } from 'lucide-react';

interface InventorySupplyBrowseProps {
  onNavigate: (route: string) => void;
}

export default function InventorySupplyBrowse({ onNavigate: _onNavigate }: InventorySupplyBrowseProps) {
  const [activeTab, setActiveTab] = useState('main');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoc, setSelectedDoc] = useState<number | null>(1);

  const mockDocs = [
    { id: 1, docNo: '4', status: 'مرحل' },
    { id: 2, docNo: '3', status: 'مرحل' },
    { id: 3, docNo: '2', status: 'مرحل' },
    { id: 4, docNo: '1', status: 'مرحل' },
  ];

  const items = [
    { id: 1, item: '1017 : فاصوليا حمراء بلدي', unit: 'كيلو', qty: '1', cost: '5,500', sellPrice: '', warehouse: '1 : المعرض', total: '5,500' },
    { id: 2, item: '', unit: '', qty: '', cost: '', sellPrice: '', warehouse: '', total: '' },
    { id: 3, item: '', unit: '', qty: '', cost: '', sellPrice: '', warehouse: '', total: '' },
    { id: 4, item: '', unit: '', qty: '', cost: '', sellPrice: '', warehouse: '', total: '' },
    { id: 5, item: '', unit: '', qty: '', cost: '', sellPrice: '', warehouse: '', total: '' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f5f5f5', direction: 'rtl', fontFamily: 'Tahoma, Arial, sans-serif' }}>

      {/* ── Right Sidebar ─ */}
      <div style={{ width: '220px', background: '#e8ecf0', borderLeft: '1px solid #ccc', display: 'flex', flexDirection: 'column', boxShadow: '2px 0 8px rgba(0,0,0,0.1)' }}>
        {/* Sidebar Header */}
        <div style={{ background: 'linear-gradient(to bottom, #dce4ec, #c8d3df)', padding: '8px 12px', borderBottom: '1px solid #b0bec5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76' }}>أمر توريد مخزني</span>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#c0392b', fontSize: '16px' }}>«</button>
        </div>

        {/* Search & Actions Bar */}
        <div style={{ padding: '8px', background: '#f0f4f8', borderBottom: '1px solid #d0d8e0', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: '#fffdf0', border: '1px solid #dcd89c', borderRadius: '4px', padding: '2px 6px', flex: 1 }}>
            <Search size={14} color="#888" />
            <input
              type="text"
              placeholder="رقم المستند"
              style={{ border: 'none', outline: 'none', padding: '2px 4px', fontSize: '12px', width: '100%', background: 'transparent', direction: 'rtl' }}
            />
          </div>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="جديد">
            <FilePlus size={14} color="#28a745" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="الأعلى">
            <ChevronRight size={14} color="#3c8dbc" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="الأسفل">
            <ChevronLeft size={14} color="#3c8dbc" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="تحديث">
            <RefreshCw size={14} color="#3c8dbc" />
          </button>
        </div>

        {/* Document List */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {mockDocs.map((doc) => (
            <div
              key={doc.id}
              onClick={() => setSelectedDoc(doc.id)}
              style={{
                padding: '8px 12px',
                borderBottom: '1px solid #d0d8e0',
                cursor: 'pointer',
                background: selectedDoc === doc.id ? '#fff9c4' : (doc.id % 2 === 0 ? '#f0f0f0' : 'transparent'),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span style={{ fontSize: '12px', color: '#333' }}>{doc.status}</span>
              <span style={{ fontSize: '12px', color: '#3c8dbc' }}>«</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* ── Top Toolbar ── */}
        <div style={{ background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)', padding: '6px 12px', borderBottom: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px' }}>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="إعدادات">
            <Settings size={18} color="#6c757d" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="نسخ">
            <Copy size={18} color="#6c757d" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="تحديث">
            <RefreshCw size={18} color="#6c757d" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="جديد">
            <FilePlus size={18} color="#28a745" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="التالي">
            <ChevronLeft size={18} color="#6c757d" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="السابق">
            <ChevronRight size={18} color="#6c757d" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="طباعة">
            <Printer size={18} color="#6c757d" />
          </button>
          <div style={{ flex: 1 }} />
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="عرض">
            <ChevronDown size={18} color="#6c757d" />
          </button>
          <span style={{ color: '#999', fontSize: '14px' }}>|</span>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="بحث">
            <Search size={18} color="#6c757d" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="جديد">
            <Plus size={18} color="#28a745" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="قائمة">
            <List size={18} color="#6c757d" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="الرئيسية">
            <Home size={18} color="#6c757d" />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', background: '#fff', border: '1px solid #ccc', borderRadius: '4px', padding: '4px 8px', gap: '6px' }}>
            <Search size={14} color="#888" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="بحث : ر"
              style={{ border: 'none', outline: 'none', fontSize: '12px', width: '100px', background: 'transparent', direction: 'rtl' }}
            />
          </div>
        </div>

        {/* ── Tab Bar ── */}
        <div style={{ background: 'linear-gradient(to bottom, #f39c12, #e67e22)', padding: '0 12px', display: 'flex', gap: '2px', justifyContent: 'flex-start' }}>
          <button
            onClick={() => setActiveTab('main')}
            style={{
              padding: '8px 20px',
              background: activeTab === 'main' ? '#fff' : 'transparent',
              border: 'none',
              borderBottom: activeTab === 'main' ? 'none' : '2px solid transparent',
              borderRadius: '4px 4px 0 0',
              color: activeTab === 'main' ? '#e67e22' : '#fff',
              fontSize: '13px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            أمر توريد مخزني
          </button>
          <button
            onClick={() => setActiveTab('log')}
            style={{
              padding: '8px 20px',
              background: activeTab === 'log' ? '#fff' : 'transparent',
              border: 'none',
              borderBottom: activeTab === 'log' ? 'none' : '2px solid transparent',
              borderRadius: '4px 4px 0 0',
              color: activeTab === 'log' ? '#e67e22' : '#fff',
              fontSize: '13px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            السجل
          </button>
          <button
            onClick={() => setActiveTab('extra')}
            style={{
              padding: '8px 20px',
              background: activeTab === 'extra' ? '#fff' : 'transparent',
              border: 'none',
              borderBottom: activeTab === 'extra' ? 'none' : '2px solid transparent',
              borderRadius: '4px 4px 0 0',
              color: activeTab === 'extra' ? '#e67e22' : '#fff',
              fontSize: '13px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            بيانات إضافية
          </button>
        </div>

        {/* ── Form Content ── */}
        <div style={{ flex: 1, overflow: 'auto', background: '#f0f4f8', padding: '12px' }}>

          {activeTab === 'main' && (
            <>
              {/* Row 1 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>الرقم</label>
                  <input type="text" value="4" readOnly style={{ width: '80px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#f0f0f0' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>نوع الحركة المخزنية</label>
                  <select style={{ width: '250px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#f0f0f0' }}>
                    <option value="">توريد مخزني للبضاعة المشتراة</option>
                  </select>
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>إلى المخزن</label>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '3px', background: '#f0f0f0' }}>
                    <select style={{ flex: 1, padding: '4px 8px', border: 'none', fontSize: '13px', background: 'transparent', outline: 'none' }}>
                      <option value="">المعرض</option>
                    </select>
                    <Search size={14} color="#3c8dbc" style={{ cursor: 'pointer', padding: '4px' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>التاريخ</label>
                  <input type="text" value="4/10/2023" readOnly style={{ width: '120px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#f0f0f0' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>رقم المرجع</label>
                  <input type="text" readOnly style={{ width: '120px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#f0f0f0' }} />
                </div>
              </div>

              {/* Row 3 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" style={{ cursor: 'pointer' }} />
                  <label style={{ fontSize: '13px', color: '#1a4e76' }}>مسودة</label>
                  <Info size={14} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" style={{ cursor: 'pointer' }} />
                  <label style={{ fontSize: '13px', color: '#1a4e76' }}>معلق</label>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>عملة المستند</label>
                  <select style={{ width: '120px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fffde7' }}>
                    <option value="ري">ر.ي</option>
                  </select>
                </div>
              </div>

              {/* Row 4 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>تقييد الكلفة لحساب/الدائن</label>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '3px', background: '#f0f0f0' }}>
                    <select style={{ flex: 1, padding: '4px 8px', border: 'none', fontSize: '13px', background: 'transparent', outline: 'none' }}>
                      <option value="">3291 : مصاريف إدارية أخرى</option>
                    </select>
                    <Search size={14} color="#3c8dbc" style={{ cursor: 'pointer', padding: '4px' }} />
                  </div>
                </div>
              </div>

              {/* Row 5 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>ملاحظة</label>
                  <input type="text" readOnly style={{ width: '400px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#f0f0f0' }} />
                </div>
              </div>

              {/* ── Items Table ── */}
              <div style={{ background: '#fff', border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ background: '#d4e6f1' }}>
                      <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '40px' }}>م</th>
                      <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de' }}>الصنف</th>
                      <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '100px' }}>الوحدة</th>
                      <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '80px' }}>الكمية</th>
                      <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '100px' }}>الكلفة</th>
                      <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '100px' }}>سعر البيع</th>
                      <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '120px' }}>المخزن</th>
                      <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '100px' }}>الإجمالي</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id} style={{ background: item.id % 2 === 0 ? '#f8f9fa' : '#fff' }}>
                        <td style={{ padding: '4px 8px', textAlign: 'center', border: '1px solid #d0d8e0' }}>{item.id}</td>
                        <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                          <input type="text" value={item.item} readOnly style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', background: item.id === 1 ? '#fff' : '#f0f0f0' }} />
                        </td>
                        <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                          <select style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', background: '#f0f0f0' }}>
                            <option value="">{item.unit}</option>
                          </select>
                        </td>
                        <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                          <input type="text" value={item.qty} readOnly style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', textAlign: 'center', background: '#f0f0f0' }} />
                        </td>
                        <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                          <input type="text" value={item.cost} readOnly style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', textAlign: 'center', background: '#f0f0f0' }} />
                        </td>
                        <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                          <input type="text" value={item.sellPrice} readOnly style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', textAlign: 'center', background: '#f0f0f0' }} />
                        </td>
                        <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                          <select style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', background: '#f0f0f0' }}>
                            <option value="">{item.warehouse}</option>
                          </select>
                        </td>
                        <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                          <input type="text" value={item.total} readOnly style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', textAlign: 'center', background: '#f0f0f0' }} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr style={{ background: '#d4e6f1' }}>
                      <td colSpan={7} style={{ padding: '8px 10px', textAlign: 'center', border: '1px solid #b0c4de', fontWeight: 'bold', color: '#1a4e76' }}>
                        الإجمالي : 5,500 &nbsp;&nbsp; خمسة آلاف و خمسمائة ريال يمني
                      </td>
                      <td style={{ padding: '8px 10px', textAlign: 'center', border: '1px solid #b0c4de' }}>
                        <Plus size={16} color="#28a745" style={{ cursor: 'pointer' }} />
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* ─ Bottom Fields ── */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>الحالة</label>
                  <select style={{ width: '200px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#f0f0f0' }}>
                    <option value="">مرحل</option>
                  </select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>مرات الطباعة</label>
                  <input type="text" value="0" readOnly style={{ width: '80px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#f0f0f0' }} />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>المستند الرئيسي</label>
                  <select style={{ width: '200px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#f0f0f0' }}>
                    <option value="">-- اختر --</option>
                  </select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>رقم المستند الرئيسي</label>
                  <input type="text" readOnly style={{ width: '150px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#f0f0f0' }} />
                </div>
              </div>
            </>
          )}

          {activeTab === 'log' && (
            <div style={{ padding: '16px', background: '#f8fafc', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Row 1 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>الإضافة بواسطة</label>
                  <select style={{ width: '200px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#f0f0f0' }}>
                    <option value="">مواد غذائية جملة/تجزئة</option>
                  </select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>تاريخ السجل</label>
                  <input type="text" value="4/10/2023" readOnly style={{ width: '120px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#f0f0f0' }} />
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>وقت الإضافة</label>
                  <input type="text" value="23:25:59" readOnly style={{ width: '100px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#f0f0f0' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>آخر تعديل بواسطة</label>
                  <input type="text" readOnly style={{ width: '150px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#f0f0f0' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>تاريخ وقت آخر تعديل</label>
                  <input type="text" readOnly style={{ width: '150px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#f0f0f0' }} />
                </div>
              </div>

              {/* Row 3 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>وقت آخر تعديل</label>
                  <input type="text" readOnly style={{ width: '100px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#f0f0f0' }} />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'extra' && (
            <div style={{ padding: '16px', background: '#f8fafc' }}>
              {/* Title */}
              <div style={{ marginBottom: '16px', textAlign: 'center' }}>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>الأعباء الإضافية</span>
              </div>

              {/* Table */}
              <div style={{ background: '#fff', border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ background: '#d4e6f1' }}>
                      <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '40px' }}>م</th>
                      <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de' }}>نوع الحساب</th>
                      <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de' }}>رقم الحساب</th>
                      <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '100px' }}>دائن</th>
                      <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '80px' }}>العملة</th>
                      <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '100px' }}>سعر التحويل</th>
                      <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '100px' }}>دائن / محلي</th>
                      <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de' }}>البيان</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5].map((row) => (
                      <tr key={row} style={{ background: row % 2 === 0 ? '#f8f9fa' : '#fff' }}>
                        <td style={{ padding: '4px 8px', textAlign: 'center', border: '1px solid #d0d8e0' }}>{row}</td>
                        <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                          <select style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', background: '#f0f0f0' }}>
                            <option value=""></option>
                          </select>
                        </td>
                        <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <select style={{ flex: 1, padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', background: '#f0f0f0' }}>
                              <option value=""></option>
                            </select>
                            <Search size={12} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                          </div>
                        </td>
                        <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                          <input type="text" readOnly style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', background: '#f0f0f0' }} />
                        </td>
                        <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                          <select style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', background: '#f0f0f0' }}>
                            <option value=""></option>
                          </select>
                        </td>
                        <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <input type="text" readOnly style={{ flex: 1, padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', textAlign: 'center', background: '#f0f0f0' }} />
                            <Search size={12} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                          </div>
                        </td>
                        <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                          <input type="text" readOnly style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', background: '#f0f0f0' }} />
                        </td>
                        <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                          <input type="text" readOnly style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', background: '#f0f0f0' }} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Yellow Note */}
              <div style={{ background: '#fff9c4', border: '1px solid #f0e68c', borderRadius: '4px', padding: '10px 16px', fontSize: '13px', color: '#666', textAlign: 'right' }}>
                الأعباء هي المبالغ الإضافية مثل كلفة النقل والتأمين والعمولات وخلافه
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
