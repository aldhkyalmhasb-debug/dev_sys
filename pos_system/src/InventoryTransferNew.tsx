import { useState } from 'react';
import { Settings, Save, Undo, Plus, Search, Info, Copy } from 'lucide-react';

interface InventoryTransferNewProps {
  onNavigate: (route: string) => void;
}

export default function InventoryTransferNew({ onNavigate: _onNavigate }: InventoryTransferNewProps) {
  const [items] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      item: '',
      unit: '',
      qty: '',
      cost: '',
      total: ''
    }))
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#f5f5f5', direction: 'rtl', fontFamily: 'Tahoma, Arial, sans-serif' }}>

      {/* ── Top Toolbar ── */}
      <div style={{ background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)', padding: '8px 12px', borderBottom: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="خيارات">
            <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#333', border: '1px solid #ccc', borderRadius: '3px', padding: '2px 8px', background: '#fff' }}>خيارات</span>
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }}>
            <span style={{ fontSize: '13px', color: '#333', border: '1px solid #ccc', borderRadius: '3px', padding: '2px 8px', background: '#fff' }}>📄</span>
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }}>
            <span style={{ fontSize: '13px', color: '#333', border: '1px solid #ccc', borderRadius: '3px', padding: '2px 8px', background: '#fff' }}>🔄</span>
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }}>
            <span style={{ fontSize: '13px', color: '#333', border: '1px solid #ccc', borderRadius: '3px', padding: '2px 8px', background: '#fff' }}>⚙️</span>
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="إعدادات">
            <Settings size={18} color="#6c757d" />
          </button>
          <button style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'linear-gradient(to bottom, #fff, #f0f0f0)', border: '1px solid #ccc', borderRadius: '3px', padding: '4px 12px', color: '#333', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>
            <Save size={14} color="#6c757d" />
            <span>حفظ</span>
          </button>
          <button style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'linear-gradient(to bottom, #fff, #f0f0f0)', border: '1px solid #ccc', borderRadius: '3px', padding: '4px 12px', color: '#333', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>
            <Undo size={14} color="#e74c3c" />
            <span>تراجع</span>
          </button>
        </div>
      </div>

      {/* ── Tab Bar ── */}
      <div style={{ background: 'linear-gradient(to bottom, #f39c12, #e67e22)', padding: '0 12px', display: 'flex', gap: '2px', justifyContent: 'flex-start' }}>
        <button style={{
          padding: '8px 20px',
          background: '#fff',
          border: 'none',
          borderBottom: 'none',
          borderRadius: '4px 4px 0 0',
          color: '#e67e22',
          fontSize: '13px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          أمر تحويل بضاعة إلى مخزن آخر
        </button>
      </div>

      {/* ── Form Content ── */}
      <div style={{ flex: 1, overflow: 'auto', background: '#f0f4f8', padding: '16px' }}>
        
        {/* Row 1 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px', justifyContent: 'flex-start' }}>
          {/* رقم التحويل */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>رقم التحويل</label>
            <input type="text" placeholder="آليا" style={{ width: '150px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }} />
          </div>
          {/* نوع الحركة المخزنية */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>نوع الحركة المخزنية</label>
            <select style={{ width: '250px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }}>
              <option value="">أمر تحويل بضاعة إلى مخزن آخر</option>
            </select>
          </div>
          {/* من المخزن */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#c0392b', fontWeight: 'bold', whiteSpace: 'nowrap' }}>من المخزن *</label>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '3px', background: '#fff', width: '200px' }}>
              <select style={{ flex: 1, padding: '4px 8px', border: 'none', fontSize: '13px', background: 'transparent', outline: 'none' }}>
                <option value="">المعرض</option>
              </select>
              <Search size={14} color="#3c8dbc" style={{ cursor: 'pointer', padding: '4px' }} />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px', justifyContent: 'flex-start' }}>
          {/* إلى المخزن */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#c0392b', fontWeight: 'bold', whiteSpace: 'nowrap' }}>إلى المخزن *</label>
            <select style={{ width: '200px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }}>
              <option value="">-- اختر --</option>
            </select>
          </div>
          {/* تاريخ التحويل */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#c0392b', fontWeight: 'bold', whiteSpace: 'nowrap' }}>تاريخ التحويل *</label>
            <input type="date" defaultValue="2026-05-22" style={{ width: '130px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }} />
          </div>
          {/* رقم المرجع */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>رقم المرجع</label>
            <input type="text" style={{ width: '120px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }} />
          </div>
          {/* مسودة */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" style={{ cursor: 'pointer' }} />
            <label style={{ fontSize: '13px', color: '#1a4e76', cursor: 'pointer' }}>مسودة</label>
            <Info size={14} color="#3c8dbc" style={{ cursor: 'pointer' }} />
          </div>
        </div>

        {/* Row 3 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', justifyContent: 'flex-start' }}>
          {/* ملاحظة */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>ملاحظة</label>
            <input type="text" style={{ width: '400px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }} />
          </div>
        </div>

        {/* ── Items Table ── */}
        <div style={{ background: '#fff', border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden', maxWidth: '800px', marginRight: 'auto', marginLeft: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: '#d4e6f1' }}>
                <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '40px' }}>م</th>
                <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de' }}>الصنف</th>
                <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '100px' }}>الوحدة</th>
                <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '80px' }}>الكمية</th>
                <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '100px' }}>الكلفة</th>
                <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '100px' }}>الإجمالي</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} style={{ background: item.id % 2 === 0 ? '#f8f9fa' : '#fff' }}>
                  <td style={{ padding: '4px 8px', textAlign: 'center', border: '1px solid #d0d8e0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                      <span>{item.id}</span>
                      <Copy size={12} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                    </div>
                  </td>
                  <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <select style={{ flex: 1, padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', background: '#fff' }}>
                        <option value="">-- اختر --</option>
                      </select>
                      <Search size={12} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                    </div>
                  </td>
                  <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                    <select style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', background: '#fff' }}>
                      <option value="">-- اختر --</option>
                    </select>
                  </td>
                  <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                    <input type="text" style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', textAlign: 'center' }} />
                  </td>
                  <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                    <input type="text" readOnly style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', textAlign: 'center', background: '#f0f0f0' }} />
                  </td>
                  <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                    <input type="text" readOnly style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', textAlign: 'center', background: '#f0f0f0' }} />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr style={{ background: '#d4e6f1' }}>
                <td colSpan={5} style={{ padding: '8px 10px', textAlign: 'center', border: '1px solid #b0c4de', fontWeight: 'bold', color: '#1a4e76' }}>
                  الإجمالي : 0.00
                </td>
                <td style={{ padding: '8px 10px', textAlign: 'center', border: '1px solid #b0c4de' }}>
                  <Plus size={16} color="#28a745" style={{ cursor: 'pointer' }} />
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>

    </div>
  );
}
