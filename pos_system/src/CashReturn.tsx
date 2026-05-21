import React, { useState } from 'react';
import { Settings, Save, Ban, FileText, LayoutGrid, RefreshCw, Maximize2, Plus, Trash2, Calendar, HelpCircle, ChevronDown } from 'lucide-react';

interface CashReturnProps {
  onNavigate: (route: string) => void;
}

interface RowItem {
  id: number;
  group: string;
  itemName: string;
  unit: string;
  qty: string;
  price: string;
  total: number;
}

const GROUPS = ['مواد غذائية', 'مشروبات', 'منظفات', 'معلبات'];

const ITEMS = [
  { name: 'أرز بسمتي 5كجم', group: 'مواد غذائية', unit: 'كيس', price: 3500 },
  { name: 'زيت طبخ 1 لتر', group: 'منظفات', unit: 'علبة', price: 1200 },
  { name: 'حليب مجفف 900جم', group: 'مواد غذائية', unit: 'علبة', price: 5200 },
  { name: 'سكر السعيد 10كجم', group: 'مواد غذائية', unit: 'كيس', price: 4800 },
  { name: 'شاي الكبوس 250جم', group: 'مشروبات', unit: 'حبة', price: 400 },
  { name: 'تونة هالي 100جم', group: 'معلبات', unit: 'حبة', price: 600 }
];

const UNITS = ['حبة', 'كيس', 'علبة', 'كرتون'];

export default function CashReturn({ onNavigate }: CashReturnProps) {
  // Initialize with 10 empty rows as in the screenshot
  const [rows, setRows] = useState<RowItem[]>(() => {
    const initialRows: RowItem[] = [];
    for (let i = 1; i <= 10; i++) {
      initialRows.push({
        id: i,
        group: '',
        itemName: '',
        unit: '',
        qty: '',
        price: '',
        total: 0
      });
    }
    return initialRows;
  });

  // Form Fields
  const [drawer, setDrawer] = useState('صندوق المبيعات اليومية');
  const [store, setStore] = useState('المخزن الرئيسي');
  const [currency, setCurrency] = useState('ر.ي');
  const [date, setDate] = useState('19/5/2026');
  const [refNo, setRefNo] = useState('');
  const [isDraft, setIsDraft] = useState(false);
  const [customer, setCustomer] = useState('');
  const [note, setNote] = useState('');

  // Footer Fields
  const [penalty, setPenalty] = useState('');
  const [expenses, setExpenses] = useState('');
  const [cashReturned, setCashReturned] = useState('');
  const [networkReturned, setNetworkReturned] = useState('');

  // UI state
  const [successBanner, setSuccessBanner] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('cash-return');

  // Math Calculations
  const subtotal = rows.reduce((sum, r) => sum + r.total, 0);
  const penaltyNum = parseFloat(penalty) || 0;
  const expensesNum = parseFloat(expenses) || 0;
  const netDue = subtotal - penaltyNum + expensesNum;

  const cashReturnedNum = parseFloat(cashReturned) || 0;
  const networkReturnedNum = parseFloat(networkReturned) || 0;
  const clientCredit = netDue - cashReturnedNum - networkReturnedNum;

  // Handlers
  const handleAddRow = () => {
    setRows(prev => [
      ...prev,
      {
        id: Date.now(),
        group: '',
        itemName: '',
        unit: '',
        qty: '',
        price: '',
        total: 0
      }
    ]);
  };

  const handleRemoveRow = (id: number) => {
    // Keep at least 1 row
    if (rows.length === 1) return;
    setRows(prev => prev.filter(r => r.id !== id));
  };

  const handleRowChange = (id: number, field: keyof RowItem, value: string) => {
    setRows(prev => prev.map(row => {
      if (row.id !== id) return row;

      const updatedRow = { ...row, [field]: value };

      // Pre-fill unit and price if item changes
      if (field === 'itemName') {
        const selectedItem = ITEMS.find(it => it.name === value);
        if (selectedItem) {
          updatedRow.group = selectedItem.group;
          updatedRow.unit = selectedItem.unit;
          updatedRow.price = selectedItem.price.toString();
        }
      }

      // Calculate Total
      const qtyNum = parseFloat(updatedRow.qty) || 0;
      const priceNum = parseFloat(updatedRow.price) || 0;
      updatedRow.total = qtyNum * priceNum;

      return updatedRow;
    }));
  };

  const handleSave = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();

    // Check if at least one item is selected with quantity
    const hasItems = rows.some(r => r.itemName && (parseFloat(r.qty) || 0) > 0);
    if (!hasItems) {
      alert('يرجى إضافة صنف واحد على الأقل بكمية صحيحة.');
      return;
    }

    if (!store) {
      alert('يرجى تحديد المخزن المستلم.');
      return;
    }

    setSuccessBanner(`تم حفظ مستند مرتجع مبيعات نقدية (بدون فاتورة) بنجاح برقم مرجع ${refNo || 'CRN-' + Date.now().toString().slice(-6)} بقيمة ${netDue.toFixed(2)} ${currency}`);
    
    // Reset form after saving
    const resetRows: RowItem[] = [];
    for (let i = 1; i <= 10; i++) {
      resetRows.push({
        id: i,
        group: '',
        itemName: '',
        unit: '',
        qty: '',
        price: '',
        total: 0
      });
    }
    setRows(resetRows);
    setRefNo('');
    setNote('');
    setPenalty('');
    setExpenses('');
    setCashReturned('');
    setNetworkReturned('');
  };

  return (
    <div className="cr-page">
      {/* 1. Toolbar */}
      <div className="cr-toolbar">
        {/* Left Side: Layout and utility icons */}
        <div className="cr-toolbar-left">
          <button className="pos-icon-btn"><FileText size={15} color="#28a745" /></button>
          <button className="pos-icon-btn"><LayoutGrid size={15} color="#555" /></button>
          <button className="pos-icon-btn"><RefreshCw size={14} color="#555" /></button>
          <button className="pos-icon-btn"><Maximize2 size={14} color="#555" /></button>
        </div>

        {/* Right Side: Primary Actions */}
        <div className="cr-toolbar-right">
          <div className="cr-toolbar-right" style={{ gap: '4px' }}>
            <button className="pos-icon-btn" style={{ marginLeft: '12px' }}><Settings size={15} color="#555" /></button>
            
            <button className="cr-btn cr-btn-save" onClick={handleSave}>
              <Save size={14} color="#27ae60" style={{ marginLeft: '4px' }} />
              <span>حفظ</span>
            </button>

            <button className="cr-btn cr-btn-cancel" onClick={() => onNavigate('dashboard')}>
              <Ban size={14} color="#c62828" style={{ marginLeft: '4px' }} />
              <span>تراجع</span>
            </button>
          </div>
        </div>
      </div>

      {/* Success banner */}
      {successBanner && (
        <div className="si-success-banner" style={{ margin: '10px 15px' }}>
          <span>{successBanner}</span>
          <span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => setSuccessBanner(null)}>X</span>
        </div>
      )}

      {/* 2. Orange Tabs Bar */}
      <div className="cr-tab-container">
        <div 
          className={`cr-tab ${activeTab === 'cash-return' ? 'active' : 'inactive'}`} 
          onClick={() => setActiveTab('cash-return')}
        >
          مرتجع مبيعات نقدية
        </div>
        <div 
          className={`cr-tab ${activeTab === 'network' ? 'active' : 'inactive'}`} 
          onClick={() => {
            setActiveTab('network');
            alert('هذه التبويبة لعرض تفاصيل إضافية للشبكات.');
          }}
        >
          مدفوع عبر شبكة
        </div>
        <div 
          className={`cr-tab ${activeTab === 'extra' ? 'active' : 'inactive'}`} 
          onClick={() => {
            setActiveTab('extra');
            alert('تفاصيل وبيانات إضافية للمستند.');
          }}
        >
          بيانات إضافية
        </div>
      </div>

      {/* 3. Form Fields Box */}
      <div className="cr-form-box">
        {/* Row 1 */}
        <div className="cr-row">
          {/* نوع السند (Right) */}
          <div className="cr-col">
            <div className="cr-field-inline">
              <label className="cr-field-label">نوع السند</label>
              <div className="cr-field-input-wrap">
                <select className="pos-input pos-readonly" style={{ width: '100%' }} disabled>
                  <option>مرتجع مبيعات نقدية</option>
                </select>
                <div className="pos-select-arrow"><ChevronDown size={11} color="#888" /></div>
              </div>
            </div>
          </div>

          {/* الصندوق (Middle) */}
          <div className="cr-col">
            <div className="cr-field-inline">
              <label className="cr-field-label">الصندوق</label>
              <div className="cr-field-input-wrap">
                <select 
                  className="pos-input" 
                  value={drawer} 
                  onChange={(e) => setDrawer(e.target.value)}
                  style={{ width: '100%', paddingLeft: '25px' }}
                >
                  <option value="صندوق المبيعات اليومية">صندوق المبيعات اليومية</option>
                  <option value="الصندوق الرئيسي">الصندوق الرئيسي</option>
                </select>
                <div className="pos-select-arrow"><ChevronDown size={11} color="#888" /></div>
                <div className="cr-input-icon"><FileText size={12} /></div>
              </div>
            </div>
          </div>

          {/* رقم المرجع & مسودة (Left) */}
          <div className="cr-col">
            <div className="cr-field-inline">
              <label className="cr-field-label" style={{ width: '80px' }}>رقم المرجع</label>
              <input 
                type="text" 
                className="pos-input" 
                value={refNo} 
                onChange={(e) => setRefNo(e.target.value)}
                placeholder="تلقائي..."
                style={{ width: '120px' }}
              />
              <div className="pos-draft-wrap" style={{ marginRight: '15px', gap: '5px' }}>
                <input 
                  type="checkbox" 
                  className="pos-checkbox" 
                  checked={isDraft} 
                  onChange={(e) => setIsDraft(e.target.checked)}
                />
                <span>مسودة</span>
                <HelpCircle size={13} color="#3c8dbc" style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="cr-row">
          {/* المخزن (Right) */}
          <div className="cr-col">
            <div className="cr-field-inline">
              <label className="cr-field-label">المخزن <span className="pos-required">*</span></label>
              <div className="cr-field-input-wrap">
                <select 
                  className="pos-input" 
                  value={store} 
                  onChange={(e) => setStore(e.target.value)}
                  style={{ width: '100%', paddingLeft: '25px' }}
                >
                  <option value="المخزن الرئيسي">المخزن الرئيسي</option>
                  <option value="مخزن المواد الغذائية">مخزن المواد الغذائية</option>
                  <option value="مخزن المنظفات">مخزن المنظفات</option>
                </select>
                <div className="pos-select-arrow"><ChevronDown size={11} color="#888" /></div>
                <div className="cr-input-icon"><FileText size={12} /></div>
              </div>
            </div>
          </div>

          {/* التاريخ (Middle) */}
          <div className="cr-col">
            <div className="cr-field-inline">
              <label className="cr-field-label">التاريخ <span className="pos-required">*</span></label>
              <div className="cr-field-input-wrap">
                <input 
                  type="text" 
                  className="pos-input pos-center" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)}
                  style={{ paddingLeft: '25px' }}
                />
                <div className="cr-input-icon"><Calendar size={12} /></div>
              </div>
            </div>
          </div>

          {/* Blank space to match layout */}
          <div className="cr-col"></div>
        </div>

        {/* Row 3 */}
        <div className="cr-row">
          {/* عملة المستند (Right) */}
          <div className="cr-col">
            <div className="cr-field-inline">
              <label className="cr-field-label">عملة المستند <span className="pos-required">*</span></label>
              <div className="cr-field-input-wrap">
                <select 
                  className="pos-input pos-yellow-bg" 
                  value={currency} 
                  onChange={(e) => setCurrency(e.target.value)}
                  style={{ width: '100%' }}
                >
                  <option value="ر.ي">ر.ي</option>
                  <option value="س.ر">س.ر</option>
                  <option value="$">$</option>
                </select>
                <div className="pos-select-arrow"><ChevronDown size={11} color="#888" /></div>
              </div>
            </div>
          </div>

          {/* العميل (Middle) */}
          <div className="cr-col">
            <div className="cr-field-inline">
              <label className="cr-field-label">العميل</label>
              <div className="cr-field-input-wrap">
                <select 
                  className="pos-input" 
                  value={customer} 
                  onChange={(e) => setCustomer(e.target.value)}
                  style={{ width: '100%', paddingLeft: '25px' }}
                >
                  <option value="">-- عميل افتراضي نقدي --</option>
                  <option value="صالح منصور">صالح منصور</option>
                  <option value="سعيد القديمي">سعيد القديمي</option>
                  <option value="شركة الافق">شركة الافق</option>
                </select>
                <div className="pos-select-arrow"><ChevronDown size={11} color="#888" /></div>
                <div className="cr-input-icon"><FileText size={12} /></div>
              </div>
            </div>
          </div>

          {/* Blank space to match layout */}
          <div className="cr-col"></div>
        </div>

        {/* Row 4 */}
        <div className="cr-row">
          <div className="cr-col cr-col-double">
            <div className="cr-field-inline">
              <label className="cr-field-label">ملاحظة</label>
              <input 
                type="text" 
                className="pos-input" 
                value={note} 
                onChange={(e) => setNote(e.target.value)}
                placeholder="اكتب تفاصيل أو ملاحظات بخصوص مرتجع المبيعات النقدية..."
              />
            </div>
          </div>
          <div className="cr-col"></div>
        </div>
      </div>

      {/* 4. Data Grid Table */}
      <div className="pos-grid-container" style={{ flex: 1, overflowY: 'auto' }}>
        <table className="pos-grid-table">
          <thead>
            <tr>
              <th style={{ width: '30px' }}></th> {/* Trash/actions column */}
              <th style={{ width: '40px' }}>م</th>
              <th>المجموعة</th>
              <th style={{ width: '300px' }}>الصنف</th>
              <th style={{ width: '120px' }}>الوحدة</th>
              <th style={{ width: '100px' }}>الكمية</th>
              <th style={{ width: '120px' }}>سعر الوحدة</th>
              <th style={{ width: '140px' }}>الإجمالي</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id}>
                <td style={{ textAlign: 'center' }}>
                  <button className="cr-row-trash-btn" onClick={() => handleRemoveRow(row.id)}>
                    <Trash2 size={13} />
                  </button>
                </td>
                <td className="pos-grid-id">{index + 1}</td>
                
                {/* المجموعة */}
                <td>
                  <div className="pos-td-select">
                    <select
                      value={row.group}
                      onChange={(e) => handleRowChange(row.id, 'group', e.target.value)}
                    >
                      <option value=""></option>
                      {GROUPS.map((g, gi) => (
                        <option key={gi} value={g}>{g}</option>
                      ))}
                    </select>
                    <span className="pos-td-arrow"><ChevronDown size={10} color="#888" /></span>
                  </div>
                </td>

                {/* الصنف */}
                <td>
                  <div className="pos-td-select">
                    <select
                      value={row.itemName}
                      onChange={(e) => handleRowChange(row.id, 'itemName', e.target.value)}
                    >
                      <option value=""></option>
                      {ITEMS.map((item, ii) => (
                        <option key={ii} value={item.name}>{item.name}</option>
                      ))}
                    </select>
                    <span className="pos-td-arrow" style={{ left: '22px' }}><ChevronDown size={10} color="#888" /></span>
                    <span className="cr-input-icon" style={{ left: '6px' }}><FileText size={11} /></span>
                  </div>
                </td>

                {/* الوحدة */}
                <td>
                  <div className="pos-td-select">
                    <select
                      value={row.unit}
                      onChange={(e) => handleRowChange(row.id, 'unit', e.target.value)}
                    >
                      <option value=""></option>
                      {UNITS.map((u, ui) => (
                        <option key={ui} value={u}>{u}</option>
                      ))}
                    </select>
                    <span className="pos-td-arrow"><ChevronDown size={10} color="#888" /></span>
                  </div>
                </td>

                {/* الكمية */}
                <td>
                  <input
                    type="text"
                    className="pos-td-input"
                    style={{ textAlign: 'center' }}
                    value={row.qty}
                    onChange={(e) => handleRowChange(row.id, 'qty', e.target.value)}
                    placeholder="0"
                  />
                </td>

                {/* سعر الوحدة */}
                <td>
                  <input
                    type="text"
                    className="pos-td-input"
                    style={{ textAlign: 'center' }}
                    value={row.price}
                    onChange={(e) => handleRowChange(row.id, 'price', e.target.value)}
                    placeholder="0.00"
                  />
                </td>

                {/* الإجمالي */}
                <td className="pos-readonly" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  {row.total.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Grid Summary Bar */}
      <div className="pos-summary-bar">
        <button className="pos-add-row-btn" onClick={handleAddRow}>
          <Plus size={14} color="#333" />
        </button>
        <div className="pos-total-display">
          الإجمالي : {subtotal.toFixed(2)}
        </div>
      </div>

      {/* 5. Footer Summary Fields (Screenshot 2 layout) */}
      <div className="cr-footer-grid">
        {/* Row 1 */}
        {/* الأعباء (Left) */}
        <div className="cr-footer-field">
          <label className="cr-footer-label">الأعباء</label>
          <input
            type="text"
            className="cr-footer-input"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            placeholder="0.00"
          />
        </div>

        {/* الغرامة على العميل/التخفيض المعاد (Middle) */}
        <div className="cr-footer-field">
          <label className="cr-footer-label">الغرامة على العميل/التخفيض المعاد</label>
          <input
            type="text"
            className="cr-footer-input"
            value={penalty}
            onChange={(e) => setPenalty(e.target.value)}
            placeholder="0.00"
          />
        </div>

        {/* الإجمالي * (Right) */}
        <div className="cr-footer-field">
          <label className="cr-footer-label">الإجمالي <span className="pos-required">*</span></label>
          <input
            type="text"
            className="cr-footer-input cr-footer-readonly"
            value={subtotal.toFixed(2)}
            readOnly
          />
        </div>

        {/* Row 2 */}
        {/* مبلغ يقيد لحساب العميل (Left) */}
        <div className="cr-footer-field">
          <label className="cr-footer-label">مبلغ يقيد لحساب العميل</label>
          <input
            type="text"
            className="cr-footer-input cr-footer-readonly"
            value={clientCredit.toFixed(2)}
            readOnly
          />
        </div>

        {/* المبلغ المعاد نقدا (Middle) */}
        <div className="cr-footer-field">
          <label className="cr-footer-label">المبلغ المعاد نقداً</label>
          <input
            type="text"
            className="cr-footer-input"
            value={cashReturned}
            onChange={(e) => setCashReturned(e.target.value)}
            placeholder="0.00"
          />
        </div>

        {/* المبلغ المستحق (Right) */}
        <div className="cr-footer-field">
          <label className="cr-footer-label">المبلغ المستحق</label>
          <input
            type="text"
            className="cr-footer-input cr-footer-readonly cr-footer-highlight"
            value={netDue.toFixed(2)}
            readOnly
          />
        </div>

        {/* Row 3 */}
        {/* Empty left field */}
        <div></div>

        {/* Empty middle field */}
        <div></div>

        {/* المبلغ المعاد للعميل عبر الشبكة (Right) */}
        <div className="cr-footer-field">
          <label className="cr-footer-label">المبلغ المعاد للعميل عبر الشبكة</label>
          <input
            type="text"
            className="cr-footer-input"
            value={networkReturned}
            onChange={(e) => setNetworkReturned(e.target.value)}
            placeholder="0.00"
          />
        </div>
      </div>
    </div>
  );
}
