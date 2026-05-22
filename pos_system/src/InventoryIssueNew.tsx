import { useState } from 'react';
import { Save, Ban, Settings, Plus, RefreshCw, LayoutGrid, Maximize2, FileText, ChevronDown, Calendar } from 'lucide-react';

interface InventoryIssueNewProps {
  onNavigate?: (route: string) => void;
}

export default function InventoryIssueNew({ onNavigate }: InventoryIssueNewProps) {
  const [docNo, setDocNo] = useState('آلي');
  const [movementType, setMovementType] = useState('عام');
  const [fromStore, setFromStore] = useState('المعرض');
  const [date, setDate] = useState('2026-05-21');
  const [refNo, setRefNo] = useState('');
  const [isDraft, setIsDraft] = useState(false);
  const [currency, setCurrency] = useState('ر.ي');
  const [costAccount, setCostAccount] = useState('');
  const [note, setNote] = useState('');

  const [rows, setRows] = useState(
    Array.from({ length: 10 }).map((_, i) => ({
      id: i + 1,
      item: '',
      unit: '',
      qty: '',
      cost: '',
      store: '',
      total: '0.00'
    }))
  );

  const items = ['أرز بسمتي 5كجم', 'زيت طبخ 1 لتر', 'حليب مجفف 900جم', 'سكر السعيد 10كجم', 'شاي الكبوس 250جم'];
  const units = ['حبة', 'كيس', 'كرتون', 'علبة'];
  const stores = ['المخزن الرئيسي', 'المخزن الفرعي', 'معرض البيع'];
  const movementTypes = ['عام', 'تالف', 'هدايا', 'عينات', 'استهلاك داخلي'];

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        item: '',
        unit: '',
        qty: '',
        cost: '',
        store: '',
        total: '0.00'
      }
    ]);
  };

  const handleRowChange = (id: number, field: string, value: string) => {
    setRows(rows.map(row => {
      if (row.id === id) {
        const updated = { ...row, [field]: value };
        if (field === 'qty' || field === 'cost') {
          const qty = parseFloat(updated.qty) || 0;
          const cost = parseFloat(updated.cost) || 0;
          updated.total = (qty * cost).toFixed(2);
        }
        return updated;
      }
      return row;
    }));
  };

  const grandTotal = rows.reduce((sum, row) => sum + (parseFloat(row.total) || 0), 0).toFixed(2);

  return (
    <div className="pos-page">
      {/* Top Toolbar */}
      <div className="pos-toolbar">
        <div className="pos-toolbar-left">
          <button className="pos-btn pos-save-btn">
            <Save size={14} style={{ marginLeft: '6px' }} />
            حفظ
          </button>
          <button className="pos-btn pos-cancel-btn" onClick={() => onNavigate && onNavigate('dashboard')}>
            <Ban size={14} style={{ marginLeft: '6px' }} />
            تراجع
          </button>
          <button className="pos-icon-btn"><Settings size={15} color="#555" /></button>
        </div>

        <div className="pos-toolbar-right">
          <button className="pos-icon-btn"><Maximize2 size={14} color="#555" /></button>
          <button className="pos-icon-btn"><RefreshCw size={14} color="#555" /></button>
          <button className="pos-icon-btn"><LayoutGrid size={14} color="#555" /></button>
          <button className="pos-icon-btn"><FileText size={14} color="#555" /></button>
        </div>
      </div>

      {/* Orange Title Bar */}
      <div className="pos-title-bar">
        <span>أمر صرف مخزني</span>
      </div>

      {/* Form Content Area */}
      <div className="pos-form-container">
        {/* Row 1 */}
        <div className="pos-row">
          <div className="pos-col">
            <label className="pos-label">رقم المستند <span className="pos-required">*</span></label>
            <input
              type="text"
              className="pos-input pos-yellow-bg"
              value={docNo}
              onChange={(e) => setDocNo(e.target.value)}
            />
          </div>

          <div className="pos-col">
            <label className="pos-label">نوع الحركة المخزنية <span className="pos-required">*</span></label>
            <div className="pos-select-wrap">
              <select
                className="pos-input"
                value={movementType}
                onChange={(e) => setMovementType(e.target.value)}
              >
                {movementTypes.map((t, idx) => (
                  <option key={idx} value={t}>{t}</option>
                ))}
              </select>
              <span className="pos-select-arrow"><ChevronDown size={12} color="#007bff" /></span>
            </div>
          </div>

          <div className="pos-col">
            <label className="pos-label">من المخزن <span className="pos-required">*</span></label>
            <div className="pos-select-wrap">
              <select
                className="pos-input"
                value={fromStore}
                onChange={(e) => setFromStore(e.target.value)}
              >
                {stores.map((s, idx) => (
                  <option key={idx} value={s}>{s}</option>
                ))}
              </select>
              <span className="pos-select-arrow"><ChevronDown size={12} color="#007bff" /></span>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="pos-row">
          <div className="pos-col">
            <label className="pos-label">التاريخ <span className="pos-required">*</span></label>
            <div className="pos-input-wrap">
              <input
                type="text"
                className="pos-input pos-center"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <span className="pos-input-icon"><Calendar size={14} color="#007bff" /></span>
            </div>
          </div>

          <div className="pos-col">
            <label className="pos-label">رقم المرجع</label>
            <input
              type="text"
              className="pos-input"
              value={refNo}
              onChange={(e) => setRefNo(e.target.value)}
            />
          </div>

          <div className="pos-col pos-draft-col">
            <div className="pos-draft-wrap">
              <span style={{ marginLeft: '6px' }}>مسودة</span>
              <input
                type="checkbox"
                className="pos-checkbox"
                checked={isDraft}
                onChange={(e) => setIsDraft(e.target.checked)}
              />
            </div>
          </div>

          <div className="pos-col">
            <label className="pos-label">عملة المستند <span className="pos-required">*</span></label>
            <select
              className="pos-input pos-yellow-bg"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="ر.ي">ر.ي</option>
              <option value="ر.س">ر.س</option>
              <option value="دولار">دولار</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div className="pos-row">
          <div className="pos-col pos-col-double">
            <label className="pos-label">تقييد الكلفة على الحساب/المدين <span className="pos-required">*</span></label>
            <div className="pos-select-wrap">
              <select
                className="pos-input"
                value={costAccount}
                onChange={(e) => setCostAccount(e.target.value)}
              >
                <option value=""></option>
                <option value="6001">6001 - تكلفة البضاعة المباعة</option>
                <option value="6002">6002 - مصروفات عامة</option>
              </select>
              <span className="pos-select-arrow"><ChevronDown size={12} color="#007bff" /></span>
            </div>
          </div>
        </div>

        {/* Notes Row */}
        <div className="pos-row">
          <div className="pos-col pos-col-full">
            <label className="pos-label">ملاحظة</label>
            <input
              type="text"
              className="pos-input pos-note-input"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Grid Table */}
      <div className="pos-grid-container">
        <table className="pos-grid-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}>م</th>
              <th>الصنف</th>
              <th style={{ width: '120px' }}>الوحدة</th>
              <th style={{ width: '80px' }}>الكمية</th>
              <th style={{ width: '100px' }}>الكلفة</th>
              <th style={{ width: '15%' }}>المخزن</th>
              <th style={{ width: '120px' }}>الإجمالي</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="pos-grid-id">{row.id}</td>
                <td>
                  <div className="pos-td-select">
                    <select 
                      value={row.item}
                      onChange={(e) => handleRowChange(row.id, 'item', e.target.value)}
                    >
                      <option value=""></option>
                      {items.map((it, idx) => (
                        <option key={idx} value={it}>{it}</option>
                      ))}
                    </select>
                    <ChevronDown size={11} color="#aaa" className="pos-td-arrow" />
                  </div>
                </td>
                <td>
                  <div className="pos-td-select">
                    <select 
                      value={row.unit}
                      onChange={(e) => handleRowChange(row.id, 'unit', e.target.value)}
                    >
                      <option value=""></option>
                      {units.map((u, idx) => (
                        <option key={idx} value={u}>{u}</option>
                      ))}
                    </select>
                    <ChevronDown size={11} color="#aaa" className="pos-td-arrow" />
                  </div>
                </td>
                <td>
                  <input 
                    type="text" 
                    className="pos-td-input pos-center" 
                    value={row.qty}
                    onChange={(e) => handleRowChange(row.id, 'qty', e.target.value)}
                  />
                </td>
                <td>
                  <input 
                    type="text" 
                    className="pos-td-input pos-center" 
                    value={row.cost}
                    onChange={(e) => handleRowChange(row.id, 'cost', e.target.value)}
                  />
                </td>
                <td>
                  <div className="pos-td-select">
                    <select 
                      value={row.store}
                      onChange={(e) => handleRowChange(row.id, 'store', e.target.value)}
                    >
                      <option value=""></option>
                      {stores.map((s, idx) => (
                        <option key={idx} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown size={11} color="#aaa" className="pos-td-arrow" />
                  </div>
                </td>
                <td>
                  <input 
                    type="text" 
                    className="pos-td-input pos-readonly" 
                    value={row.total} 
                    readOnly 
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Summary total bar */}
        <div className="pos-summary-bar">
          <button className="pos-add-row-btn" onClick={handleAddRow}>
            <Plus size={15} color="#555" />
          </button>
          <div className="pos-total-display">الإجمالي : {grandTotal}</div>
        </div>
      </div>
    </div>
  );
}
