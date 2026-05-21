import { useState } from 'react';
import { Settings, LayoutGrid, Search, FilePlus, List, Play, ChevronDown, ChevronLeft, Check, CornerDownLeft, Eye, X, Save, ArrowLeft } from 'lucide-react';

interface SalesInvoicesProps {
  onNavigate: (route: string) => void;
  isReturnMode?: boolean;
}

interface Item {
  id: number;
  group: string;
  name: string;
  unit: string;
  qty: number;
  returnedQty: number;
  price: number;
  total: number;
}

interface Invoice {
  id: string;
  customerNo: string;
  customerName: string;
  date: string;
  currency: string;
  drawer: string;
  store: string;
  type: string;
  items: Item[];
  subtotal: number;
  discount: number;
  tax: number;
  net: number;
  status: string;
}

// Global mock database of invoices so changes persist during the session
const mockInvoices: Invoice[] = [
  {
    id: 'INV-2026-001',
    customerNo: '6003',
    customerName: 'صالح منصور',
    date: '2026-05-18',
    currency: 'ر.ي',
    drawer: 'صندوق المبيعات اليومية',
    store: 'المخزن الرئيسي',
    type: 'نقدي',
    items: [
      { id: 1, group: 'مواد غذائية', name: 'أرز بسمتي 5كجم', unit: 'كيس', qty: 5, returnedQty: 0, price: 3500, total: 17500 },
      { id: 2, group: 'منظفات', name: 'زيت طبخ 1 لتر', unit: 'علبة', qty: 10, returnedQty: 2, price: 1200, total: 12000 },
      { id: 3, group: 'مشروبات', name: 'شاي الكبوس 250جم', unit: 'حبة', qty: 20, returnedQty: 0, price: 400, total: 8000 }
    ],
    subtotal: 37500,
    discount: 500,
    tax: 0,
    net: 37000,
    status: 'مدفوعة'
  },
  {
    id: 'INV-2026-002',
    customerNo: '6006',
    customerName: 'شركة الافق',
    date: '2026-05-17',
    currency: 'دولار',
    drawer: 'صندوق المبيعات اليومية',
    store: 'المخزن الرئيسي',
    type: 'آجل',
    items: [
      { id: 1, group: 'مواد غذائية', name: 'حليب مجفف 900جم', unit: 'علبة', qty: 2, returnedQty: 0, price: 15, total: 30 },
      { id: 2, group: 'معلبات', name: 'تونة هالي 100جم', unit: 'حبة', qty: 50, returnedQty: 5, price: 1.5, total: 75 }
    ],
    subtotal: 105,
    discount: 5,
    tax: 5,
    net: 105,
    status: 'جزئية'
  },
  {
    id: 'INV-2026-003',
    customerNo: '6009',
    customerName: 'عميل النقدية',
    date: '2026-05-19',
    currency: 'ر.ي',
    drawer: 'صندوق المبيعات اليومية',
    store: 'المخزن الرئيسي',
    type: 'نقدي',
    items: [
      { id: 1, group: 'مشروبات', name: 'شاي الكبوس 250جم', unit: 'حبة', qty: 5, returnedQty: 0, price: 400, total: 2000 }
    ],
    subtotal: 2000,
    discount: 0,
    tax: 0,
    net: 2000,
    status: 'مدفوعة'
  }
];

export default function SalesInvoices({ onNavigate, isReturnMode = false }: SalesInvoicesProps) {
  const [docNo, setDocNo] = useState('');
  const [customerSearch, setCustomerSearch] = useState('');
  const [maxRecords, setMaxRecords] = useState('100');
  const [showToolsMenu, setShowToolsMenu] = useState(false);
  const [showPreviewTools, setShowPreviewTools] = useState(false);

  // Search Results & View Mode states
  const [hasSearched, setHasSearched] = useState(false);
  const [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>([]);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [isCreatingReturn, setIsCreatingReturn] = useState(false);

  // Return Document form states
  const [returnQtys, setReturnQtys] = useState<Record<number, string>>({}); // itemId -> returned quantity input
  const [returnDate, setReturnDate] = useState('2026-05-20');
  const [returnNote, setReturnNote] = useState('');
  const [successBanner, setSuccessBanner] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<number, string>>({});

  const customers = [
    { id: '6003', name: 'صالح منصور' },
    { id: '6005', name: 'سعيد القديمي' },
    { id: '6006', name: 'شركة الافق' },
    { id: '6007', name: 'احمد نصر محمد' },
    { id: '6008', name: 'ناصر علي' },
    { id: '6009', name: 'عميل النقدية' },
    { id: '6010', name: 'سعيد هزاع' },
    { id: '6011', name: 'محمد عبدالحبيب' },
  ];

  const footerLinks = [
    'الإعدادات : سمات مخصصة',
    'المسودات',
    'أصناف المستندات',
    'أصناف المستندات ( كميات )',
    'أعمار الديون',
    'الدفعات المستحقة',
  ];

  const handleSearch = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setSuccessBanner(null);
    let results = [...mockInvoices];
    if (docNo) {
      results = results.filter(inv => inv.id.toLowerCase().includes(docNo.toLowerCase()));
    }
    if (customerSearch) {
      results = results.filter(inv => inv.customerNo === customerSearch);
    }
    setFilteredInvoices(results);
    setHasSearched(true);
  };

  const handleStartReturn = () => {
    if (!selectedInvoice) return;
    const initialQtys: Record<number, string> = {};
    const initialErrors: Record<number, string> = {};
    selectedInvoice.items.forEach(item => {
      initialQtys[item.id] = ''; // blank by default
    });
    setReturnQtys(initialQtys);
    setValidationErrors(initialErrors);
    setReturnNote('');
    setIsCreatingReturn(true);
    setShowPreviewTools(false);
  };

  const handleReturnQtyChange = (itemId: number, val: string, maxQty: number) => {
    setReturnQtys(prev => ({ ...prev, [itemId]: val }));

    if (val === '') {
      setValidationErrors(prev => {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      });
      return;
    }

    const num = parseFloat(val);
    if (isNaN(num) || num < 0) {
      setValidationErrors(prev => ({ ...prev, [itemId]: 'كمية غير صالحة' }));
    } else if (num > maxQty) {
      setValidationErrors(prev => ({ ...prev, [itemId]: `الحد الأقصى ${maxQty}` }));
    } else {
      setValidationErrors(prev => {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      });
    }
  };

  const getReturnSubtotal = () => {
    if (!selectedInvoice) return 0;
    return selectedInvoice.items.reduce((sum, item) => {
      const val = parseFloat(returnQtys[item.id] || '0');
      const qty = isNaN(val) ? 0 : val;
      return sum + (qty * item.price);
    }, 0);
  };

  const handleSaveReturn = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!selectedInvoice) return;

    if (Object.keys(validationErrors).length > 0) {
      alert('يرجى تصحيح الأخطاء قبل حفظ المرتجع.');
      return;
    }

    let hasReturnVal = false;
    let isInvalid = false;
    selectedInvoice.items.forEach(item => {
      const val = parseFloat(returnQtys[item.id] || '0');
      const maxQty = item.qty - item.returnedQty;
      if (val > 0) {
        hasReturnVal = true;
      }
      if (val < 0 || val > maxQty) {
        isInvalid = true;
      }
    });

    if (isInvalid) {
      alert('توجد كميات مرجعة غير صحيحة.');
      return;
    }

    if (!hasReturnVal) {
      alert('يرجى إدخال كمية مرجعة واحدة على الأقل أكبر من الصفر.');
      return;
    }

    // Apply Return updates to mock database
    const returnVal = getReturnSubtotal();
    const updatedItems = selectedInvoice.items.map(item => {
      const val = parseFloat(returnQtys[item.id] || '0');
      const qty = isNaN(val) ? 0 : val;
      return {
        ...item,
        returnedQty: item.returnedQty + qty
      };
    });

    const allReturned = updatedItems.every(it => it.returnedQty === it.qty);
    const someReturned = updatedItems.some(it => it.returnedQty > 0);
    const updatedStatus = allReturned ? 'مرتجع بالكامل' : (someReturned ? 'مرتجع جزئي' : selectedInvoice.status);

    // Apply directly to mock list
    const index = mockInvoices.findIndex(inv => inv.id === selectedInvoice.id);
    if (index !== -1) {
      mockInvoices[index].items = updatedItems;
      mockInvoices[index].status = updatedStatus;
    }

    setSuccessBanner(`تم حفظ مستند مرتجع المبيعات بنجاح بقيمة ${returnVal.toFixed(2)} ${selectedInvoice.currency} للفاتورة ${selectedInvoice.id}`);
    setIsCreatingReturn(false);
    setSelectedInvoice(null);
    setHasSearched(false); // Force fresh search to show updated status
  };

  return (
    <div className="si-page">
      {/* 1. Main Search View Toolbar */}
      {!selectedInvoice && !isCreatingReturn && (
        <div className="si-toolbar">
          <div className="si-toolbar-right">
            <div className="si-tool-dropdown"
              onMouseEnter={() => setShowToolsMenu(true)}
              onMouseLeave={() => setShowToolsMenu(false)}
            >
              <button className="si-icon-btn"><Settings size={15} color="#555" /></button>
              {showToolsMenu && (
                <div className="si-tool-panel">
                  <a href="#">التقارير</a>
                  <a href="#">عرض القائمة</a>
                  <a href="#">قائمة التصفح</a>
                  {!isReturnMode && (
                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('pos'); }}>جديد (فاتورة مبيعات)</a>
                  )}
                  <a href="#">إحصائيات</a>
                  <a href="#">أدوات متقدمة</a>
                  <a href="#">إجراءات جماعية</a>
                  <a href="#">سجل المتابعة</a>
                  <a href="#">سجل التعديلات</a>
                  <div className="si-tool-sep"></div>
                  <a href="#">الإعدادات : سمات مخصصة</a>
                  <a href="#">المسودات</a>
                  <a href="#">أصناف المستندات</a>
                  <a href="#">تحديث</a>
                  <a href="#">مساعدة</a>
                </div>
              )}
            </div>
            <button className="si-icon-btn"><LayoutGrid size={15} color="#555" /></button>
            <button className="si-icon-btn"><List size={15} color="#555" /></button>
          </div>

          <div className="si-toolbar-center">
            <a href="#" onClick={handleSearch} className="si-tb-action si-tb-execute">
              <span className="si-tb-execute-badge">1</span>
              <span>تنفيذ</span>
              <Play size={13} fill="#e67e22" color="#e67e22" />
            </a>

            <span className="si-tb-sep">|</span>

            <a href="#" onClick={handleSearch} className="si-tb-action">
              <span>بحث متقدم</span>
              <Search size={14} color="#3c8dbc" />
            </a>

            {!isReturnMode && (
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('pos'); }} className="si-tb-action si-tb-new">
                <span>جديد (فاتورة مبيعات)</span>
                <FilePlus size={14} color="#3c8dbc" />
              </a>
            )}

            <button className="si-icon-btn"><List size={15} color="#555" /></button>
            <button className="si-icon-btn"><LayoutGrid size={15} color="#555" /></button>
          </div>
        </div>
      )}

      {/* 2. Invoice Preview Toolbar */}
      {selectedInvoice && !isCreatingReturn && (
        <div className="invoice-preview-toolbar">
          <div className="invoice-preview-actions-left">
            <button className="btn-back-to-list" onClick={() => setSelectedInvoice(null)}>
              <ArrowLeft size={14} style={{ marginLeft: '6px' }} />
              الرجوع للبحث
            </button>
          </div>

          <div className="si-toolbar-center">
            {isReturnMode && (
              <button className="btn-return-add" onClick={handleStartReturn}>
                <CornerDownLeft size={14} style={{ marginLeft: '6px' }} />
                مرتجع المبيعات - إضافة
              </button>
            )}

            <div className="si-tool-dropdown"
              onMouseEnter={() => setShowPreviewTools(true)}
              onMouseLeave={() => setShowPreviewTools(false)}
              style={{ marginRight: '8px' }}
            >
              <button className="si-icon-btn"><Settings size={15} color="#555" /></button>
              {showPreviewTools && (
                <div className="si-tool-panel">
                  {isReturnMode && (
                    <a href="#" onClick={(e) => { e.preventDefault(); handleStartReturn(); }}>
                      <span style={{ color: '#d9534f', fontWeight: 'bold' }}>مرتجع المبيعات - إضافة</span>
                    </a>
                  )}
                  <a href="#">طباعة الفاتورة</a>
                  <a href="#">تصدير PDF</a>
                  <a href="#">إرسال بالبريد</a>
                  <a href="#">تعديل الفاتورة</a>
                  <a href="#">حذف الفاتورة</a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. Return Form Toolbar */}
      {isCreatingReturn && selectedInvoice && (
        <div className="invoice-preview-toolbar" style={{ backgroundColor: '#fff1f0', borderColor: '#ffa39e' }}>
          <div className="invoice-preview-actions-left">
            <button className="btn-back-to-list" onClick={() => setIsCreatingReturn(false)}>
              <X size={14} style={{ marginLeft: '6px' }} />
              تراجع
            </button>
          </div>

          <div className="si-toolbar-center">
            <button className="pos-btn" style={{ background: 'linear-gradient(to bottom, #d9534f, #c9302c)', color: 'white', borderColor: '#ac2925' }} onClick={handleSaveReturn}>
              <Save size={14} style={{ marginLeft: '6px' }} />
              حفظ المرتجع
            </button>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className="si-content">
        {successBanner && (
          <div className="si-success-banner">
            <span>{successBanner}</span>
            <X size={16} className="si-success-close" onClick={() => setSuccessBanner(null)} />
          </div>
        )}

        {/* Dynamic Title */}
        <div className="si-title-bar">
          {isCreatingReturn ? `إضافة مرتجع مبيعات للفاتورة: ${selectedInvoice?.id}` : 
           selectedInvoice ? `تفاصيل فاتورة المبيعات: ${selectedInvoice.id}` : 
           'فواتير المبيعات'}
        </div>

        {/* A. MAIN SEARCH FORM AND INSTRUCTIONS */}
        {!selectedInvoice && !isCreatingReturn && (
          <>
            <div className="si-form-box">
              {/* الرقم */}
              <div className="si-field-row">
                <div className="si-field-label">الرقم</div>
                <div className="si-field-input">
                  <input
                    type="text"
                    className="si-text-input si-num-input"
                    value={docNo}
                    onChange={(e) => setDocNo(e.target.value)}
                    placeholder="INV-2026-..."
                    maxLength={16}
                  />
                </div>
              </div>

              {/* رقم العميل */}
              <div className="si-field-row">
                <div className="si-field-label">رقم العميل</div>
                <div className="si-field-input">
                  <div className="si-select-wrapper">
                    <select
                      className="si-select-input"
                      value={customerSearch}
                      onChange={(e) => setCustomerSearch(e.target.value)}
                    >
                      <option value=""></option>
                      {customers.map((c) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                    <button className="si-select-tools-btn">
                      <ChevronDown size={11} color="#666" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Execute Search Button */}
            <div className="si-execute-row">
              <a href="#" onClick={handleSearch} className="si-execute-search-btn">
                <Check size={16} color="white" style={{ marginLeft: '8px' }} />
                <span>تنفيذ البحث</span>
              </a>
            </div>

            {/* Record Count */}
            <div className="si-records-section">
              <table className="si-records-table">
                <tbody>
                  <tr>
                    <td className="si-rec-empty"></td>
                    <td className="si-rec-input-cell">
                      <input
                        type="text"
                        className="si-text-input si-rec-input"
                        value={maxRecords}
                        onChange={(e) => setMaxRecords(e.target.value)}
                      />
                    </td>
                    <td className="si-rec-label">عدد السجلات</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Search Results Area */}
            {hasSearched && (
              <div className="si-results-container">
                {filteredInvoices.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '20px', color: '#999', border: '1px dotted #ccc' }}>
                    لا توجد فواتير مطابقة لخيارات البحث.
                  </div>
                ) : (
                  <table className="si-results-table">
                    <thead>
                      <tr>
                        <th style={{ width: '40px' }}>م</th>
                        <th>رقم الفاتورة</th>
                        <th>اسم العميل</th>
                        <th>التاريخ</th>
                        <th>النوع</th>
                        <th>العملة</th>
                        <th>الإجمالي</th>
                        <th>الحالة</th>
                        <th style={{ width: '120px' }}>إجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredInvoices.map((inv, idx) => (
                        <tr key={inv.id}>
                          <td>{idx + 1}</td>
                          <td style={{ fontWeight: 'bold', color: '#3c8dbc' }}>{inv.id}</td>
                          <td>{inv.customerName}</td>
                          <td>{inv.date}</td>
                          <td>{inv.type}</td>
                          <td>{inv.currency}</td>
                          <td style={{ fontWeight: 'bold' }}>{inv.net.toFixed(2)}</td>
                          <td>
                            <span className={`si-status-badge ${
                              inv.status === 'مدفوعة' ? 'si-status-paid' :
                              inv.status === 'جزئية' || inv.status === 'مرتجع جزئي' ? 'si-status-partial' : 'si-status-returned'
                            }`}>
                              {inv.status}
                            </span>
                          </td>
                          <td>
                            <button className="si-btn-view" onClick={() => setSelectedInvoice(inv)}>
                              <Eye size={12} />
                              <span>إستعراض</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}

            {/* Warning Box exactly matching the screenshot instructions */}
            {isReturnMode && !hasSearched && (
              <div className="si-warning-box">
                <div className="si-warning-content">
                  <div style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '14px', color: '#856404' }}>تنبيه وإرشادات مرتجع المبيعات:</div>
                  <div>1- قم بالبحث عن فاتورة المبيعات وإستعراضها</div>
                  <div>2- من قائمة الأدوات في شاشة المبيعات قم بإختيار: مرتجع المبيعات - إضافة</div>
                  <div>3- قم بإدخال الكميات التي تريد إرجاعها</div>
                </div>
                <div className="si-warning-icon-wrap">
                  <div style={{ border: '2px solid #f39c12', borderRadius: '50%', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '15px' }}>i</div>
                </div>
              </div>
            )}

            {/* Footer Links */}
            <div className="si-footer-tags">
              {footerLinks.map((link, idx) => (
                <a key={idx} href="#" onClick={(e) => e.preventDefault()} className="si-tag">
                  <ChevronLeft size={12} color="#3c8dbc" />
                  <span>{link}</span>
                </a>
              ))}
            </div>
          </>
        )}

        {/* B. INVOICE PREVIEW VIEW */}
        {selectedInvoice && !isCreatingReturn && (
          <div className="invoice-preview-container">
            <div className="invoice-preview-header">
              <div className="invoice-preview-title">
                <FilePlus size={20} color="#3c8dbc" />
                <span>تفاصيل الفاتورة: {selectedInvoice.id}</span>
              </div>
              <span className={`si-status-badge ${
                selectedInvoice.status === 'مدفوعة' ? 'si-status-paid' :
                selectedInvoice.status === 'جزئية' || selectedInvoice.status === 'مرتجع جزئي' ? 'si-status-partial' : 'si-status-returned'
              }`} style={{ fontSize: '13px', padding: '4px 12px' }}>
                {selectedInvoice.status}
              </span>
            </div>

            <div className="invoice-meta-grid">
              <div className="invoice-meta-item">
                <span className="invoice-meta-label">رقم الفاتورة</span>
                <span className="invoice-meta-value">{selectedInvoice.id}</span>
              </div>
              <div className="invoice-meta-item">
                <span className="invoice-meta-label">تاريخ الفاتورة</span>
                <span className="invoice-meta-value">{selectedInvoice.date}</span>
              </div>
              <div className="invoice-meta-item">
                <span className="invoice-meta-label">نوع الفاتورة</span>
                <span className="invoice-meta-value">{selectedInvoice.type}</span>
              </div>
              <div className="invoice-meta-item">
                <span className="invoice-meta-label">عملة الفاتورة</span>
                <span className="invoice-meta-value">{selectedInvoice.currency}</span>
              </div>

              <div className="invoice-meta-item">
                <span className="invoice-meta-label">العميل</span>
                <span className="invoice-meta-value">{selectedInvoice.customerName} ({selectedInvoice.customerNo})</span>
              </div>
              <div className="invoice-meta-item">
                <span className="invoice-meta-label">المخزن</span>
                <span className="invoice-meta-value">{selectedInvoice.store}</span>
              </div>
              <div className="invoice-meta-item">
                <span className="invoice-meta-label">الصندوق</span>
                <span className="invoice-meta-value">{selectedInvoice.drawer}</span>
              </div>
              <div className="invoice-meta-item">
                <span className="invoice-meta-label">طريقة السداد</span>
                <span className="invoice-meta-value">{selectedInvoice.type === 'نقدي' ? 'نقداً بالكامل' : 'ذمم / آجل'}</span>
              </div>
            </div>

            {/* Grid Table */}
            <div className="pos-grid-container" style={{ maxHeight: 'none', border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden' }}>
              <table className="pos-grid-table">
                <thead>
                  <tr>
                    <th style={{ width: '40px' }}>م</th>
                    <th>المجموعة</th>
                    <th>الصنف</th>
                    <th style={{ width: '120px' }}>الوحدة</th>
                    <th style={{ width: '100px' }}>الكمية الأصلية</th>
                    <th style={{ width: '100px' }}>المرتجع سابقاً</th>
                    <th style={{ width: '120px' }}>سعر الوحدة</th>
                    <th style={{ width: '140px' }}>الإجمالي</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedInvoice.items.map((item, idx) => (
                    <tr key={item.id}>
                      <td className="pos-grid-id">{idx + 1}</td>
                      <td style={{ padding: '8px', textAlign: 'center' }}>{item.group}</td>
                      <td style={{ padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>{item.name}</td>
                      <td style={{ padding: '8px', textAlign: 'center' }}>{item.unit}</td>
                      <td style={{ padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>{item.qty}</td>
                      <td style={{ padding: '8px', textAlign: 'center', color: '#c62828' }}>{item.returnedQty}</td>
                      <td style={{ padding: '8px', textAlign: 'center' }}>{item.price.toFixed(2)}</td>
                      <td style={{ padding: '8px', textAlign: 'center', fontWeight: 'bold', backgroundColor: '#f9fbfd' }}>{item.total.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Preview Summary Footer */}
            <div className="pos-footer-summary" style={{ position: 'relative', marginTop: '15px', borderRadius: '4px' }}>
              <div className="pos-footer-col">
                <label className="pos-footer-label">الإجمالي الفرعي</label>
                <input type="text" className="pos-footer-input" value={selectedInvoice.subtotal.toFixed(2)} readOnly />
              </div>
              <div className="pos-footer-col">
                <label className="pos-footer-label">التخفيض</label>
                <input type="text" className="pos-footer-input" value={selectedInvoice.discount.toFixed(2)} readOnly />
              </div>
              <div className="pos-footer-col">
                <label className="pos-footer-label">الضرائب/الأعباء</label>
                <input type="text" className="pos-footer-input" value={selectedInvoice.tax.toFixed(2)} readOnly />
              </div>
              <div className="pos-footer-col">
                <label className="pos-footer-label">المبلغ المستحق</label>
                <input type="text" className="pos-footer-input pos-footer-highlight" value={selectedInvoice.net.toFixed(2)} readOnly />
              </div>
            </div>
          </div>
        )}

        {/* C. SALES RETURN CREATION FORM VIEW */}
        {isCreatingReturn && selectedInvoice && (
          <div className="invoice-preview-container" style={{ border: '1px solid #ffa39e' }}>
            <div className="return-form-header">
              <div className="return-form-title">
                <CornerDownLeft size={20} color="#cf1322" />
                <span>مستند مرتجع مبيعات جديد للفاتورة: {selectedInvoice.id}</span>
              </div>
              <div style={{ fontSize: '13px', color: '#cf1322', fontWeight: 'bold' }}>
                قسم مرتجع المبيعات
              </div>
            </div>

            {/* Form Details */}
            <div className="pos-form-container" style={{ border: '1px solid #ffa39e', borderRadius: '4px', marginBottom: '20px' }}>
              <div className="pos-row">
                <div className="pos-col">
                  <label className="pos-label">رقم الفاتورة الأصلية</label>
                  <input type="text" className="pos-input pos-readonly" value={selectedInvoice.id} readOnly />
                </div>
                <div className="pos-col">
                  <label className="pos-label">العميل</label>
                  <input type="text" className="pos-input pos-readonly" value={selectedInvoice.customerName} readOnly />
                </div>
                <div className="pos-col">
                  <label className="pos-label">تاريخ المرتجع <span className="pos-required">*</span></label>
                  <input
                    type="text"
                    className="pos-input pos-center"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
                </div>
                <div className="pos-col">
                  <label className="pos-label">عملة المرتجع</label>
                  <input type="text" className="pos-input pos-readonly pos-center" value={selectedInvoice.currency} readOnly />
                </div>
              </div>

              <div className="pos-row">
                <div className="pos-col">
                  <label className="pos-label">المخزن المستلم</label>
                  <input type="text" className="pos-input pos-readonly" value={selectedInvoice.store} readOnly />
                </div>
                <div className="pos-col">
                  <label className="pos-label">الصندوق المالي</label>
                  <input type="text" className="pos-input pos-readonly" value={selectedInvoice.drawer} readOnly />
                </div>
                <div className="pos-col pos-col-double">
                  <label className="pos-label">السبب / البيان / ملاحظة</label>
                  <input
                    type="text"
                    className="pos-input"
                    value={returnNote}
                    onChange={(e) => setReturnNote(e.target.value)}
                    placeholder="اكتب سبب إرجاع البضاعة..."
                  />
                </div>
              </div>
            </div>

            {/* Grid Table for Items Return */}
            <div className="pos-grid-container" style={{ maxHeight: 'none', border: '1px solid #ffa39e', borderRadius: '4px', overflow: 'hidden' }}>
              <table className="pos-grid-table">
                <thead>
                  <tr style={{ backgroundColor: '#fff1f0' }}>
                    <th style={{ width: '40px', borderColor: '#ffa39e' }}>م</th>
                    <th style={{ borderColor: '#ffa39e' }}>المجموعة</th>
                    <th style={{ borderColor: '#ffa39e' }}>الصنف</th>
                    <th style={{ width: '100px', borderColor: '#ffa39e' }}>الوحدة</th>
                    <th style={{ width: '100px', borderColor: '#ffa39e' }}>الكمية المباعة</th>
                    <th style={{ width: '100px', borderColor: '#ffa39e' }}>مرتجع سابقاً</th>
                    <th style={{ width: '100px', borderColor: '#ffa39e' }}>المتاح للإرجاع</th>
                    <th style={{ width: '120px', borderColor: '#ffa39e', color: '#cf1322' }}>الكمية المرجعة الحالية</th>
                    <th style={{ width: '110px', borderColor: '#ffa39e' }}>سعر الوحدة</th>
                    <th style={{ width: '130px', borderColor: '#ffa39e' }}>قيمة المرتجع</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedInvoice.items.map((item, idx) => {
                    const maxQty = item.qty - item.returnedQty;
                    const rQtyVal = returnQtys[item.id] || '';
                    const rQtyNum = parseFloat(rQtyVal);
                    const currentReturnVal = isNaN(rQtyNum) || rQtyNum < 0 ? 0 : rQtyNum;
                    const itemTotalReturn = currentReturnVal * item.price;

                    return (
                      <tr key={item.id}>
                        <td className="pos-grid-id">{idx + 1}</td>
                        <td style={{ padding: '6px', textAlign: 'center' }}>{item.group}</td>
                        <td style={{ padding: '6px', textAlign: 'center', fontWeight: 'bold' }}>{item.name}</td>
                        <td style={{ padding: '6px', textAlign: 'center' }}>{item.unit}</td>
                        <td style={{ padding: '6px', textAlign: 'center' }}>{item.qty}</td>
                        <td style={{ padding: '6px', textAlign: 'center', color: '#cf1322' }}>{item.returnedQty}</td>
                        <td style={{ padding: '6px', textAlign: 'center', fontWeight: 'bold', color: '#385723' }}>{maxQty}</td>
                        <td style={{ padding: '6px', textAlign: 'center' }}>
                          <input
                            type="text"
                            className="si-input-return-qty"
                            value={rQtyVal}
                            placeholder="0"
                            onChange={(e) => handleReturnQtyChange(item.id, e.target.value, maxQty)}
                          />
                          {validationErrors[item.id] && (
                            <div className="validation-error-text">{validationErrors[item.id]}</div>
                          )}
                        </td>
                        <td style={{ padding: '6px', textAlign: 'center' }}>{item.price.toFixed(2)}</td>
                        <td style={{ padding: '6px', textAlign: 'center', fontWeight: 'bold', backgroundColor: '#fff5f5', color: '#cf1322' }}>
                          {itemTotalReturn.toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Return Total Footer Summary */}
            <div className="pos-footer-summary" style={{ position: 'relative', marginTop: '15px', borderRadius: '4px', backgroundColor: '#ffeef0', borderTopColor: '#ffa39e' }}>
              <div className="pos-footer-col">
                <label className="pos-footer-label" style={{ color: '#cf1322' }}>إجمالي قيمة المرتجع</label>
                <input
                  type="text"
                  className="pos-footer-input"
                  style={{ borderColor: '#ffa39e', color: '#cf1322', fontWeight: 'bold' }}
                  value={getReturnSubtotal().toFixed(2)}
                  readOnly
                />
              </div>
              <div className="pos-footer-col">
                <label className="pos-footer-label" style={{ color: '#cf1322' }}>العملة</label>
                <input
                  type="text"
                  className="pos-footer-input pos-readonly"
                  style={{ borderColor: '#ffa39e' }}
                  value={selectedInvoice.currency}
                  readOnly
                />
              </div>
              <div className="pos-footer-col" style={{ flex: 2 }}>
                <label className="pos-footer-label" style={{ color: '#cf1322' }}>تأثير المرتجع</label>
                <input
                  type="text"
                  className="pos-footer-input pos-readonly"
                  style={{ borderColor: '#ffa39e', textAlign: 'right', paddingRight: '15px', color: '#555' }}
                  value={selectedInvoice.type === 'نقدي' ? 'سيتم إرجاع المبلغ نقداً للعميل ويقيد على الصندوق اليومي' : 'سيتم خصم قيمة المرتجع من حساب ذمة العميل'}
                  readOnly
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Page Footer */}
      <div className="si-bottom-footer">RemoX.net</div>
    </div>
  );
}
