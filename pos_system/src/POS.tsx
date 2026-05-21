import { useState } from 'react';
import { Save, Ban, Settings, Plus, RefreshCw, LayoutGrid, Maximize2, HelpCircle, FileText, ChevronDown } from 'lucide-react';

interface POSProps {
  onNavigate?: (route: string) => void;
}

export default function POS({ onNavigate }: POSProps) {
  const [invoiceType, setInvoiceType] = useState('cash');
  const [drawer, setDrawer] = useState('صندوق المبيعات اليومية');
  const [store, setStore] = useState('المخزن');
  const [date, setDate] = useState('2026-05-18');
  const [refNo, setRefNo] = useState('');
  const [isDraft, setIsDraft] = useState(false);
  const [currency, setCurrency] = useState('ر.ي');
  const [customerNo, setCustomerNo] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [note, setNote] = useState('');

  // Row Data for Grid
  const [rows, setRows] = useState(
    Array.from({ length: 10 }).map((_, i) => ({
      id: i + 1,
      group: '',
      item: '',
      unit: '',
      qty: '',
      freeQty: '',
      price: '',
      total: '0.00'
    }))
  );

  const groups = ['مواد غذائية', 'مشروبات', 'منظفات', 'معلبات'];
  const items = ['أرز بسمتي 5كجم', 'زيت طبخ 1 لتر', 'حليب مجفف 900جم', 'سكر السعيد 10كجم', 'شاي الكبوس 250جم'];
  const units = ['حبة', 'كيس', 'كرتون', 'علبة'];

  const footerFields = [
    { label: 'التخفيض', value: '0.00' },
    { label: 'الأعباء', value: '0.00' },
    { label: 'المبلغ المستحق', value: '0.00', highlight: true },
    { label: 'مدفوع عبر شبكة', value: '0.00' },
    { label: 'مدفوع نقدا', value: '0.00' },
    { label: 'المبلغ الآجل', value: '0.00' },
  ];

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        group: '',
        item: '',
        unit: '',
        qty: '',
        freeQty: '',
        price: '',
        total: '0.00'
      }
    ]);
  };

  return (
    <div className="pos-page">
      {/* Top Toolbar matching RemoX style */}
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

      {/* Tabs list with Orange accent color */}
      <div className="pos-tabs-container">
        <div className="pos-tabs-list">
          <div className="pos-tab active">فاتورة مبيعات</div>
          <div className="pos-tab">مدفوع عبر شبكة</div>
          <div className="pos-tab">بيانات إضافية</div>
          <div className="pos-tab">التقسيط</div>
        </div>
        <div className="pos-tabs-bar"></div>
      </div>

      {/* Form Content Area */}
      <div className="pos-form-container">
        {/* Row 1 */}
        <div className="pos-row">
          <div className="pos-col">
            <label className="pos-label">نوع الفاتورة <span className="pos-required">*</span></label>
            <select
              className="pos-input pos-yellow-bg"
              value={invoiceType}
              onChange={(e) => setInvoiceType(e.target.value)}
            >
              <option value="cash">نقدية</option>
              <option value="credit">آجلة</option>
            </select>
          </div>

          <div className="pos-col pos-col-double">
            <label className="pos-label">الصندوق</label>
            <div className="pos-select-wrap">
              <select
                className="pos-input"
                value={drawer}
                onChange={(e) => setDrawer(e.target.value)}
              >
                <option value="صندوق المبيعات اليومية">صندوق المبيعات اليومية</option>
              </select>
              <span className="pos-select-arrow"><ChevronDown size={12} color="#007bff" /></span>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="pos-row">
          <div className="pos-col">
            <label className="pos-label">المخزن <span className="pos-required">*</span></label>
            <div className="pos-select-wrap">
              <select
                className="pos-input"
                value={store}
                onChange={(e) => setStore(e.target.value)}
              >
                <option value="المخزن">المخزن</option>
              </select>
              <span className="pos-select-arrow"><ChevronDown size={12} color="#007bff" /></span>
            </div>
          </div>

          <div className="pos-col">
            <label className="pos-label">التاريخ <span className="pos-required">*</span></label>
            <input
              type="text"
              className="pos-input pos-center"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
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
              <button className="pos-help-btn"><HelpCircle size={14} color="#0056b3" /></button>
              <span style={{ marginRight: '6px' }}>مسودة</span>
              <input
                type="checkbox"
                className="pos-checkbox"
                checked={isDraft}
                onChange={(e) => setIsDraft(e.target.checked)}
              />
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="pos-row">
          <div className="pos-col">
            <label className="pos-label">عملة الفاتورة <span className="pos-required">*</span></label>
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

          <div className="pos-col">
            <label className="pos-label">رقم العميل</label>
            <div className="pos-select-wrap">
              <select
                className="pos-input"
                value={customerNo}
                onChange={(e) => setCustomerNo(e.target.value)}
              >
                <option value=""></option>
                <option value="6003">6003</option>
                <option value="6009">6009</option>
              </select>
              <span className="pos-select-arrow"><ChevronDown size={12} color="#007bff" /></span>
            </div>
          </div>

          <div className="pos-col pos-col-double">
            <label className="pos-label">اسم العميل</label>
            <div className="pos-select-wrap">
              <input
                type="text"
                className="pos-input"
                placeholder=""
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
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
              <th style={{ width: '15%' }}>المجموعة</th>
              <th>الصنف</th>
              <th style={{ width: '120px' }}>الوحدة</th>
              <th style={{ width: '80px' }}>الكمية</th>
              <th style={{ width: '80px' }}>ك.مجانية</th>
              <th style={{ width: '100px' }}>سعر الوحدة</th>
              <th style={{ width: '120px' }}>الإجمالي</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="pos-grid-id">{row.id}</td>
                <td>
                  <div className="pos-td-select">
                    <select value={row.group}>
                      <option value=""></option>
                      {groups.map((g, idx) => (
                        <option key={idx} value={g}>{g}</option>
                      ))}
                    </select>
                    <ChevronDown size={11} color="#aaa" className="pos-td-arrow" />
                  </div>
                </td>
                <td>
                  <div className="pos-td-select">
                    <select value={row.item}>
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
                    <select value={row.unit}>
                      <option value=""></option>
                      {units.map((u, idx) => (
                        <option key={idx} value={u}>{u}</option>
                      ))}
                    </select>
                    <ChevronDown size={11} color="#aaa" className="pos-td-arrow" />
                  </div>
                </td>
                <td><input type="text" className="pos-td-input pos-center" value={row.qty} /></td>
                <td><input type="text" className="pos-td-input pos-center" value={row.freeQty} /></td>
                <td><input type="text" className="pos-td-input pos-center" value={row.price} /></td>
                <td><input type="text" className="pos-td-input pos-readonly" value={row.total} readOnly /></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Summary total bar below table */}
        <div className="pos-summary-bar">
          <button className="pos-add-row-btn" onClick={handleAddRow}>
            <Plus size={15} color="#555" />
          </button>
          <div className="pos-total-display">الاحمالي : 0.00</div>
        </div>
      </div>

      {/* Footer Fields */}
      <div className="pos-footer-summary">
        {footerFields.map((field, idx) => (
          <div key={idx} className="pos-footer-col">
            <label className="pos-footer-label">{field.label}</label>
            <input
              type="text"
              className={`pos-footer-input ${field.highlight ? 'pos-footer-highlight' : ''}`}
              value={field.value}
              readOnly
            />
          </div>
        ))}
      </div>
    </div>
  );
}
