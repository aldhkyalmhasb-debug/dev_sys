import { useState, useEffect } from 'react';
import { Save, RefreshCw, LayoutGrid, List, Plus, Settings, HelpCircle, Calendar, Play } from 'lucide-react';

interface CustomerOrdersNewProps {
  onNavigate: (route: string) => void;
}

interface GridItem {
  id: number;
  group: string;
  itemId: string;
  unit: string;
  qty: number;
  price: number;
  total: number;
}

const AVAILABLE_PRODUCTS = [
  { id: '', name: '--- اختر الصنف ---', unit: '', price: 0 },
  { id: 'p1', name: 'أرز بسمتي 5كجم', unit: 'كيس', price: 3500 },
  { id: 'p2', name: 'حليب مجفف 900جم', unit: 'علبة', price: 5200 },
  { id: 'p3', name: 'شاي الكبوس 250جم', unit: 'حبة', price: 440 },
  { id: 'p4', name: 'زيت طبخ 1 لتر', unit: 'علبة', price: 1330 },
  { id: 'p5', name: 'سكر السعيد 10كجم', unit: 'كيس', price: 4800 }
];

const PRODUCT_GROUPS = [
  { id: 'g1', name: 'المواد الغذائية' },
  { id: 'g2', name: 'المنظفات' },
  { id: 'g3', name: 'الالكترونيات' }
];

const AVAILABLE_UNITS = ['كيس', 'علبة', 'حبة', 'كرتون', 'كيلو'];

export default function CustomerOrdersNew({ onNavigate }: CustomerOrdersNewProps) {
  const [category, setCategory] = useState('طلب محلي');
  const [docDate, setDocDate] = useState('19/5/2026');
  const [isDraft, setIsDraft] = useState(false);
  const [currency, setCurrency] = useState('ر.ي');
  const [customer, setCustomer] = useState('6003 : صالح منصور');
  const [notes, setNotes] = useState('');

  // Financial totals
  const [discount, setDiscount] = useState(0);
  const [charges, setCharges] = useState(0);
  const [paidViaNetwork, setPaidViaNetwork] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [dueAmount, setDueAmount] = useState(0);

  // Initialize with 10 empty rows as shown in the screenshot
  const [gridRows, setGridRows] = useState<GridItem[]>(() => {
    const initialRows: GridItem[] = [];
    for (let i = 1; i <= 10; i++) {
      initialRows.push({
        id: i,
        group: '',
        itemId: '',
        unit: '',
        qty: 0,
        price: 0,
        total: 0
      });
    }
    return initialRows;
  });

  // Calculate totals whenever gridRows, discount, or charges change
  useEffect(() => {
    const sum = gridRows.reduce((acc, row) => acc + row.total, 0);
    setSubTotal(sum);
    setDueAmount(sum - discount + charges);
  }, [gridRows, discount, charges]);

  const handleProductChange = (rowId: number, selectedId: string) => {
    const prod = AVAILABLE_PRODUCTS.find(p => p.id === selectedId);
    setGridRows(prev => prev.map(row => {
      if (row.id === rowId) {
        if (!prod || selectedId === '') {
          return { ...row, itemId: '', unit: '', price: 0, total: 0 };
        }
        const defaultQty = row.qty || 1;
        const defaultPrice = prod.price;
        return {
          ...row,
          itemId: selectedId,
          unit: prod.unit || 'حبة',
          price: defaultPrice,
          qty: defaultQty,
          total: defaultQty * defaultPrice
        };
      }
      return row;
    }));
  };

  const handleQtyChange = (rowId: number, qty: number) => {
    setGridRows(prev => prev.map(row => {
      if (row.id === rowId) {
        const val = isNaN(qty) ? 0 : qty;
        return {
          ...row,
          qty: val,
          total: val * row.price
        };
      }
      return row;
    }));
  };

  const handlePriceChange = (rowId: number, price: number) => {
    setGridRows(prev => prev.map(row => {
      if (row.id === rowId) {
        const val = isNaN(price) ? 0 : price;
        return {
          ...row,
          price: val,
          total: row.qty * val
        };
      }
      return row;
    }));
  };

  const handleGroupChange = (rowId: number, group: string) => {
    setGridRows(prev => prev.map(row => {
      if (row.id === rowId) {
        return { ...row, group };
      }
      return row;
    }));
  };

  const handleUnitChange = (rowId: number, unit: string) => {
    setGridRows(prev => prev.map(row => {
      if (row.id === rowId) {
        return { ...row, unit };
      }
      return row;
    }));
  };

  const handleAddRow = () => {
    setGridRows(prev => [
      ...prev,
      {
        id: prev.length + 1,
        group: '',
        itemId: '',
        unit: '',
        qty: 0,
        price: 0,
        total: 0
      }
    ]);
  };

  const handleSave = () => {
    const activeItems = gridRows.filter(r => r.itemId !== '');
    if (activeItems.length === 0) {
      alert('الرجاء اختيار صنف واحد على الأقل قبل الحفظ.');
      return;
    }
    alert('تم حفظ طلب العميل بنجاح!');
    // Navigate back to search
    onNavigate('customer-orders-search');
  };

  return (
    <div className="qs-page" style={{ direction: 'rtl', height: '100%', overflowY: 'auto' }}>
      
      {/* 1. Header Toolbar */}
      <div className="qs-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Right Side (Actions in RTL) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="rl-utility-icon" title="الإعدادات" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
            <Settings size={15} />
          </div>
          
          <button className="qs-btn" onClick={handleSave} style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#fff' }}>
            <Save size={13} color="#3c8dbc" />
            <span>حفظ</span>
          </button>

          <button className="qs-btn" onClick={() => onNavigate('customer-orders-search')} style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#fff', color: '#c0392b' }}>
            <Play size={13} fill="#c0392b" color="#c0392b" style={{ transform: 'rotate(180deg)' }} />
            <span>تراجع</span>
          </button>
        </div>

        {/* Left Side (Utilities in RTL) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="rl-utility-icon" title="حفظ المسودة" style={{ cursor: 'pointer' }}>
            <Save size={14} color="#28a745" />
          </div>
          <div className="rl-utility-icon" title="تنسيق العمود" style={{ cursor: 'pointer' }}>
            <List size={14} />
          </div>
          <div className="rl-utility-icon" title="تحديث" onClick={() => setGridRows(gridRows.map(r => ({ ...r, group: '', itemId: '', unit: '', qty: 0, price: 0, total: 0 })))} style={{ cursor: 'pointer' }}>
            <RefreshCw size={14} />
          </div>
          <div className="rl-utility-icon" title="تنسيق الشبكة" style={{ cursor: 'pointer' }}>
            <LayoutGrid size={15} />
          </div>
        </div>
      </div>

      <div className="qs-container">
        
        {/* 2. Orange Header Title Banner */}
        <div style={{ backgroundColor: '#f39c12', color: '#fff', border: '1px solid #d38409', padding: '8px 15px', fontWeight: 'bold', fontSize: '15px', display: 'flex', justifyContent: 'flex-end', borderRadius: '4px 4px 0 0' }}>
          طلبات العملاء
        </div>

        {/* 3. Master Form Panel */}
        <div style={{ backgroundColor: '#f4f8fb', border: '1px solid #c8d3df', borderTop: 'none', padding: '20px 15px', display: 'flex', flexDirection: 'column', gap: '15px', borderRadius: '0 0 4px 4px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px 30px' }}>
            
            {/* Column 1 (Rightmost) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Category Dropdown (Yellow) */}
              <div className="qs-field" style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <select 
                  className="qs-input" 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)} 
                  style={{ width: '100%', direction: 'rtl', backgroundColor: '#ffffcc', border: '1px solid #a5b1c2', height: '28px', fontSize: '12px' }}
                >
                  <option value="طلب محلي">طلب محلي</option>
                  <option value="طلب خارجي">طلب خارجي</option>
                </select>
                <label className="qs-label" style={{ minWidth: '70px', fontWeight: 'bold', fontSize: '12px' }}>الفئة</label>
              </div>

              {/* Document Currency Selector (Yellow) */}
              <div className="qs-field" style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <select 
                  className="qs-input" 
                  value={currency} 
                  onChange={(e) => setCurrency(e.target.value)} 
                  style={{ width: '100%', direction: 'rtl', backgroundColor: '#ffffcc', border: '1px solid #a5b1c2', fontWeight: 'bold', height: '28px', fontSize: '12px' }}
                >
                  <option value="ر.ي">ر.ي</option>
                  <option value="$">دولار ($)</option>
                  <option value="س.س">ريال سعودي (س.س)</option>
                </select>
                <label className="qs-label" style={{ minWidth: '70px', fontWeight: 'bold', fontSize: '12px', color: '#c0392b' }}>عملة المستند *</label>
              </div>
            </div>

            {/* Column 2 (Middle) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Date Input with Calendar Icon */}
              <div className="qs-field" style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ position: 'relative', width: '100%' }}>
                  <input 
                    type="text" 
                    className="qs-input" 
                    value={docDate} 
                    onChange={(e) => setDocDate(e.target.value)} 
                    style={{ width: '100%', textAlign: 'left', paddingRight: '26px', border: '1px solid #b0c2d4', height: '28px', fontSize: '12px' }}
                  />
                  <Calendar size={13} style={{ position: 'absolute', right: '6px', top: '7px', color: '#888' }} />
                </div>
                <label className="qs-label" style={{ minWidth: '70px', fontWeight: 'bold', fontSize: '12px', color: '#c0392b' }}>التاريخ *</label>
              </div>

              {/* Customer Search Dropdown */}
              <div className="qs-field" style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <select 
                  className="qs-input" 
                  value={customer} 
                  onChange={(e) => setCustomer(e.target.value)} 
                  style={{ width: '100%', direction: 'rtl', border: '1px solid #b0c2d4', height: '28px', fontSize: '12px' }}
                >
                  <option value="6003 : صالح منصور">6003 : صالح منصور</option>
                  <option value="6006 : شركة الأفق">6006 : شركة الأفق التجارية</option>
                  <option value="6007 : أحمد نصر محمد">6007 : أحمد نصر محمد</option>
                  <option value="عميل عام">عميل افتراضي</option>
                </select>
                <label className="qs-label" style={{ minWidth: '70px', fontWeight: 'bold', fontSize: '12px' }}>العميل</label>
              </div>
            </div>

            {/* Column 3 (Leftmost) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Draft Checkbox */}
              <div className="qs-field" style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'center', gap: '10px', height: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1, justifyContent: 'flex-end' }}>
                  <HelpCircle size={14} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                  <span style={{ fontSize: '12px', color: '#555' }}>مسودة</span>
                  <input 
                    type="checkbox" 
                    checked={isDraft} 
                    onChange={(e) => setIsDraft(e.target.checked)} 
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>

              {/* Note Text Input */}
              <div className="qs-field" style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input 
                  type="text" 
                  className="qs-input" 
                  value={notes} 
                  placeholder="ملاحظات العقد أو السداد..."
                  onChange={(e) => setNotes(e.target.value)} 
                  style={{ width: '100%', border: '1px solid #b0c2d4', height: '28px', fontSize: '12px', textAlign: 'right' }}
                />
                <label className="qs-label" style={{ minWidth: '70px', fontWeight: 'bold', fontSize: '12px' }}>ملاحظة</label>
              </div>
            </div>

          </div>

          {/* 4. Editable Grid Table */}
          <div style={{ border: '1px solid #c8d3df', borderRadius: '4px', overflowX: 'auto', backgroundColor: '#fff', marginTop: '15px' }}>
            <table className="qb-grid-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#dce4ec' }}>
                  <th style={{ width: '35px', textAlign: 'center', border: '1px solid #c8d3df', padding: '6px', fontSize: '11px', color: '#2b3e50', fontWeight: 'bold' }}>م</th>
                  <th style={{ width: '180px', border: '1px solid #c8d3df', padding: '6px', fontSize: '11px', color: '#2b3e50', fontWeight: 'bold' }}>المجموعة</th>
                  <th style={{ border: '1px solid #c8d3df', padding: '6px', fontSize: '11px', color: '#2b3e50', fontWeight: 'bold' }}>الصنف</th>
                  <th style={{ width: '100px', border: '1px solid #c8d3df', padding: '6px', fontSize: '11px', color: '#2b3e50', fontWeight: 'bold' }}>الوحدة</th>
                  <th style={{ width: '90px', border: '1px solid #c8d3df', padding: '6px', fontSize: '11px', color: '#2b3e50', fontWeight: 'bold' }}>الكمية</th>
                  <th style={{ width: '110px', border: '1px solid #c8d3df', padding: '6px', fontSize: '11px', color: '#2b3e50', fontWeight: 'bold' }}>سعر الوحدة</th>
                  <th style={{ width: '130px', border: '1px solid #c8d3df', padding: '6px', fontSize: '11px', color: '#2b3e50', fontWeight: 'bold' }}>الإجمالي</th>
                </tr>
              </thead>
              <tbody>
                {gridRows.map((row, index) => (
                  <tr key={row.id}>
                    <td className="qb-cell-row-num" style={{ textAlign: 'center', fontSize: '11px', fontWeight: 'bold', color: '#555', padding: '2px', border: '1px solid #cbd5e1' }}>
                      {index + 1}
                    </td>

                    {/* Group Selection */}
                    <td style={{ padding: '0', border: '1px solid #cbd5e1' }}>
                      <select
                        value={row.group}
                        onChange={(e) => handleGroupChange(row.id, e.target.value)}
                        style={{ width: '100%', height: '26px', border: 'none', outline: 'none', background: 'transparent', fontSize: '11px', padding: '0 4px', direction: 'rtl' }}
                      >
                        <option value="">---</option>
                        {PRODUCT_GROUPS.map(g => (
                          <option key={g.id} value={g.id}>{g.name}</option>
                        ))}
                      </select>
                    </td>

                    {/* Product Selection */}
                    <td style={{ padding: '0', border: '1px solid #cbd5e1' }}>
                      <select
                        value={row.itemId}
                        onChange={(e) => handleProductChange(row.id, e.target.value)}
                        style={{ width: '100%', height: '26px', border: 'none', outline: 'none', background: 'transparent', fontSize: '11px', padding: '0 4px', direction: 'rtl', fontWeight: row.itemId ? 'bold' : 'normal' }}
                      >
                        {AVAILABLE_PRODUCTS.map(p => (
                          <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                      </select>
                    </td>

                    {/* Unit Selection */}
                    <td style={{ padding: '0', border: '1px solid #cbd5e1' }}>
                      <select
                        value={row.unit}
                        disabled={row.itemId === ''}
                        onChange={(e) => handleUnitChange(row.id, e.target.value)}
                        style={{ width: '100%', height: '26px', border: 'none', outline: 'none', background: 'transparent', fontSize: '11px', padding: '0 4px', direction: 'rtl' }}
                      >
                        <option value="">---</option>
                        {AVAILABLE_UNITS.map(u => (
                          <option key={u} value={u}>{u}</option>
                        ))}
                      </select>
                    </td>

                    {/* Quantity Input */}
                    <td style={{ padding: '0', border: '1px solid #cbd5e1' }}>
                      <input
                        type="number"
                        value={row.qty || ''}
                        disabled={row.itemId === ''}
                        onChange={(e) => handleQtyChange(row.id, parseInt(e.target.value) || 0)}
                        style={{ width: '100%', height: '26px', border: 'none', outline: 'none', background: 'transparent', textAlign: 'center', fontSize: '12px' }}
                      />
                    </td>

                    {/* Price Input */}
                    <td style={{ padding: '0', border: '1px solid #cbd5e1' }}>
                      <input
                        type="number"
                        value={row.price || ''}
                        disabled={row.itemId === ''}
                        onChange={(e) => handlePriceChange(row.id, parseFloat(e.target.value) || 0)}
                        style={{ width: '100%', height: '26px', border: 'none', outline: 'none', background: 'transparent', textAlign: 'center', fontSize: '12px', fontWeight: 'bold' }}
                      />
                    </td>

                    {/* Line Total Display (Read Only) */}
                    <td style={{ padding: '0 8px', border: '1px solid #cbd5e1', backgroundColor: '#f8f9fa', fontSize: '11px', fontWeight: 'bold', color: '#0f4068', textAlign: 'left', direction: 'ltr', height: '26px', lineHeight: '26px' }}>
                      {row.total > 0 ? row.total.toFixed(2) : ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer / Blue Total Bar */}
          <div style={{ backgroundColor: '#bde0f5', color: '#0f4068', padding: '6px 15px', fontSize: '12px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #99c2e1', borderTop: 'none', borderRadius: '0 0 4px 4px', marginTop: '-16px' }}>
            {/* Left Button to Add rows */}
            <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={handleAddRow} title="إضافة سطر جديد">
              <Plus size={16} strokeWidth={3} />
            </div>

            {/* Right label showing grand items total */}
            <div>
              <span>الإجمالي : </span>
              <span style={{ fontSize: '14px', fontWeight: '900' }}>{subTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* 5. Bottom Financial Summary inputs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '15px', backgroundColor: '#eaeff2', padding: '12px 15px', borderRadius: '4px', border: '1px solid #cbd5e1' }}>
            
            {/* Paid via Network */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#333', textAlign: 'right' }}>مدفوع عبر شبكة</span>
              <input
                type="number"
                value={paidViaNetwork || ''}
                onChange={(e) => setPaidViaNetwork(parseFloat(e.target.value) || 0)}
                style={{ border: '1px solid #b0c2d4', borderRadius: '3px', height: '26px', outline: 'none', fontSize: '12px', textAlign: 'center', backgroundColor: '#fff' }}
              />
            </div>

            {/* Due Amount */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#333', textAlign: 'right' }}>المبلغ المستحق</span>
              <input
                type="text"
                readOnly
                value={dueAmount.toFixed(2)}
                className="cr-footer-readonly"
                style={{ border: '1px solid #cbd5e1', borderRadius: '3px', height: '26px', outline: 'none', fontSize: '12px', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#e2f0d9', color: '#385723' }}
              />
            </div>

            {/* Charges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#333', textAlign: 'right' }}>الأعباء</span>
              <input
                type="number"
                value={charges || ''}
                onChange={(e) => setCharges(parseFloat(e.target.value) || 0)}
                style={{ border: '1px solid #b0c2d4', borderRadius: '3px', height: '26px', outline: 'none', fontSize: '12px', textAlign: 'center', backgroundColor: '#fff' }}
              />
            </div>

            {/* Discount */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#333', textAlign: 'right' }}>التخفيض</span>
              <input
                type="number"
                value={discount || ''}
                onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                style={{ border: '1px solid #b0c2d4', borderRadius: '3px', height: '26px', outline: 'none', fontSize: '12px', textAlign: 'center', backgroundColor: '#fff' }}
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
