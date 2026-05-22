import { useState } from 'react';
import { Settings, Save, Undo, RefreshCw, Copy, Plus, Info, X } from 'lucide-react';

interface InventorySupplyNewProps {
  onNavigate: (route: string) => void;
}

export default function InventorySupplyNew({ onNavigate: _onNavigate }: InventorySupplyNewProps) {
  const [activeTab, setActiveTab] = useState('main');
  const [docNumber, setDocNumber] = useState('');
  const [showTooltip, setShowTooltip] = useState(true);
  const [isDraft, setIsDraft] = useState(false);
  const [items] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      item: '',
      unit: '',
      qty: '',
      cost: '',
      sellPrice: '',
      warehouse: '',
      total: ''
    }))
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#f5f5f5', direction: 'rtl', fontFamily: 'Tahoma, Arial, sans-serif' }}>

      {/* ── Top Toolbar ── */}
      <div style={{ background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)', padding: '8px 12px', borderBottom: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="تحديث">
            <RefreshCw size={18} color="#6c757d" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="طباعة">
            <Copy size={18} color="#6c757d" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="جديد">
            <Plus size={18} color="#28a745" />
          </button>
        </div>
      </div>

      {/* ── Tab Bar ── */}
      <div style={{ background: 'linear-gradient(to bottom, #f39c12, #e67e22)', padding: '0 12px', display: 'flex', gap: '2px' }}>
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
      <div style={{ flex: 1, overflow: 'auto', background: '#f0f4f8', padding: '16px' }}>
        
        {activeTab === 'main' && (
          <>
        
        {/* Row 1 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px', position: 'relative' }}>
          {/* رقم المستند */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#333', fontWeight: 'bold', whiteSpace: 'nowrap' }}>رقم المستند</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={docNumber}
                onChange={(e) => setDocNumber(e.target.value)}
                onFocus={() => setShowTooltip(true)}
                onBlur={() => setShowTooltip(false)}
                style={{ width: '180px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fffde7' }}
              />
              {showTooltip && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: '0',
                  marginTop: '4px',
                  background: '#fff9c4',
                  border: '1px solid #f0e68c',
                  borderRadius: '4px',
                  padding: '8px 12px',
                  fontSize: '12px',
                  color: '#666',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  whiteSpace: 'nowrap',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>يمكن ترك الحقل فارغا للحصول على الرقم آليا</span>
                  <X size={14} color="#e74c3c" style={{ cursor: 'pointer' }} onClick={() => setShowTooltip(false)} />
                </div>
              )}
            </div>
          </div>
          {/* نوع الحركة المخزنية */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#333', fontWeight: 'bold', whiteSpace: 'nowrap' }}>نوع الحركة المخزنية</label>
            <select style={{ width: '200px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }}>
              <option value="">-- اختر --</option>
            </select>
          </div>
          {/* إلى المخزن */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#c0392b', fontWeight: 'bold', whiteSpace: 'nowrap' }}>إلى المخزن *</label>
            <select style={{ width: '200px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }}>
              <option value="">-- اختر --</option>
            </select>
          </div>
          {/* المعرض */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#333', fontWeight: 'bold', whiteSpace: 'nowrap' }}>المعرض</label>
            <select style={{ width: '200px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }}>
              <option value="">-- اختر --</option>
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
          {/* التاريخ */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#c0392b', fontWeight: 'bold', whiteSpace: 'nowrap' }}>التاريخ *</label>
            <input type="date" style={{ width: '150px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }} />
          </div>
          {/* مسودة */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" checked={isDraft} onChange={(e) => setIsDraft(e.target.checked)} style={{ cursor: 'pointer' }} />
            <label style={{ fontSize: '13px', color: '#333', cursor: 'pointer' }}>مسودة</label>
            <Info size={14} color="#3c8dbc" style={{ cursor: 'pointer' }} />
          </div>
          {/* عملة المستند */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#c0392b', fontWeight: 'bold', whiteSpace: 'nowrap' }}>عملة المستند *</label>
            <select style={{ width: '150px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fffde7' }}>
              <option value="ري">ر.ي</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
          {/* تقييد الكلفة لحساب/الدائن */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#c0392b', fontWeight: 'bold', whiteSpace: 'nowrap' }}>تقييد الكلفة لحساب/الدائن *</label>
            <select style={{ width: '150px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }}>
              <option value="">-- اختر --</option>
            </select>
            <select style={{ width: '250px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }}>
              <option value="">-- اختر --</option>
            </select>
          </div>
        </div>

        {/* Row 4 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          {/* ملاحظة */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#333', fontWeight: 'bold', whiteSpace: 'nowrap' }}>ملاحظة</label>
            <input type="text" style={{ width: '400px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }} />
          </div>
        </div>

        {/* ── Items Table ─ */}
        <div style={{ background: '#fff', border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden' }}>
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
                  <td style={{ padding: '4px 8px', textAlign: 'center', border: '1px solid #d0d8e0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                      <span>{item.id}</span>
                      <Copy size={12} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                    </div>
                  </td>
                  <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                    <select style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', background: '#fff' }}>
                      <option value="">-- اختر --</option>
                    </select>
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
                    <input type="text" style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', textAlign: 'center' }} />
                  </td>
                  <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                    <input type="text" style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', textAlign: 'center' }} />
                  </td>
                  <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                    <select style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', background: '#fff' }}>
                      <option value="">-- اختر --</option>
                    </select>
                  </td>
                  <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                    <input type="text" readOnly style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', textAlign: 'center', background: '#f0f0f0' }} />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr style={{ background: '#d4e6f1' }}>
                <td colSpan={7} style={{ padding: '8px 10px', textAlign: 'center', border: '1px solid #b0c4de', fontWeight: 'bold', color: '#1a4e76' }}>
                  الإجمالي : 0.00
                </td>
                <td style={{ padding: '8px 10px', textAlign: 'center', border: '1px solid #b0c4de' }}>
                  <Plus size={16} color="#28a745" style={{ cursor: 'pointer' }} />
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

          </>
        )}

        {activeTab === 'extra' && (
          <>
            {/* الأعباء الإضافية Title */}
            <div style={{ marginBottom: '16px', padding: '8px 12px', background: '#f0f0f0', borderRadius: '4px' }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>الأعباء الإضافية</span>
            </div>

            {/* Extra Charges Table */}
            <div style={{ background: '#fff', border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                <thead>
                  <tr style={{ background: '#d4e6f1' }}>
                    <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '40px' }}>م</th>
                    <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de' }}>نوع الحساب</th>
                    <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de' }}>رقم الحساب</th>
                    <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '120px' }}>دائن</th>
                    <th style={{ padding: '8px 10px', color: '#333', fontWeight: 'bold', textAlign: 'center', border: '1px solid #b0c4de', width: '100px' }}>العملة</th>
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
                        <select style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', background: '#fff' }}>
                          <option value="">-- اختر --</option>
                        </select>
                      </td>
                      <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <select style={{ flex: 1, padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', background: '#fff' }}>
                            <option value="">-- اختر --</option>
                          </select>
                          <Copy size={12} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                        </div>
                      </td>
                      <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                        <input type="text" style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px' }} />
                      </td>
                      <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                        <select style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', background: '#fff' }}>
                          <option value="">-- اختر --</option>
                        </select>
                      </td>
                      <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <input type="text" style={{ flex: 1, padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px', textAlign: 'center' }} />
                          <Copy size={12} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                        </div>
                      </td>
                      <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                        <input type="text" style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px' }} />
                      </td>
                      <td style={{ padding: '4px 8px', border: '1px solid #d0d8e0' }}>
                        <input type="text" style={{ width: '100%', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '12px' }} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Yellow Note */}
            <div style={{ background: '#fff9c4', border: '1px solid #f0e68c', borderRadius: '4px', padding: '10px 16px', fontSize: '13px', color: '#666' }}>
              الأعباء هي المبالغ الإضافية مثل كلفة النقل والتأمين والعمولات وخلافه
            </div>
          </>
        )}

      </div>

    </div>
  );
}
