import { useState } from 'react';
import { 
  Search, Settings, Home, Edit, Printer, X, RefreshCw, 
  ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, 
  Info, Check, Star, Play, List
} from 'lucide-react';

interface QuotationsBrowseProps {
  onNavigate: (route: string) => void;
}

interface DetailItem {
  id: number;
  group: string;
  itemName: string;
  unit: string;
  qty: string;
  freeQty: string;
  unitPrice: string;
  spec: string;
  total: string;
}

interface BrowseDoc {
  id: string;
  type: string;
  category: string;
  customer: string;
  currency: string;
  status: string;
  date: string;
  refNo: string;
  isDraft: boolean;
  isPending: boolean;
  note: string;
  items: DetailItem[];
  arabicSpelling: string;
  totalAmount: number;
  discount: number;
  charges: number;
  dueAmount: number;
  printTimes: number;
}

const BROWSE_DOCUMENTS: BrowseDoc[] = [
  {
    id: '10008',
    type: 'عرض سعر',
    category: '',
    customer: 'amma : 6012',
    currency: 'ر.ي',
    status: 'تمت الموافقة - 1',
    date: '24/6/2024',
    refNo: '',
    isDraft: false,
    isPending: false,
    note: 'طلب عرض سعر',
    items: [
      { id: 1, group: '001 - الاسفنجيا', itemName: '1114 : اسفنج', unit: 'شده', qty: '1', freeQty: '', unitPrice: '24,000', spec: '', total: '24,000' },
      { id: 2, group: '001 - الاسفنجيا', itemName: '1153 : اسفنج السلام', unit: 'شده', qty: '1', freeQty: '', unitPrice: '1,500', spec: '', total: '1,500' },
      { id: 3, group: '002 - بلاستيك', itemName: '1105 : اكياس ابيض شيبس رقم 5', unit: 'بندل', qty: '1', freeQty: '', unitPrice: '2,700', spec: '', total: '2,700' }
    ],
    arabicSpelling: 'ثمانية وعشرون الف ومئتان ريال يمني',
    totalAmount: 28200,
    discount: 0,
    charges: 0,
    dueAmount: 28200,
    printTimes: 0
  },
  {
    id: '10007',
    type: 'عرض سعر',
    category: '',
    customer: '6006 : شركة الأفق',
    currency: 'ر.ي',
    status: 'جديد',
    date: '14/6/2024',
    refNo: '',
    isDraft: false,
    isPending: false,
    note: 'عرض أسعار مواد بناء',
    items: [
      { id: 1, group: '003 - مواد غذائية', itemName: '1001 : سكر السعيد 10كجم', unit: 'كيس', qty: '10', freeQty: '', unitPrice: '5,000', spec: '', total: '50,000' }
    ],
    arabicSpelling: 'خمسون ألف ريال يمني',
    totalAmount: 50000,
    discount: 0,
    charges: 0,
    dueAmount: 50000,
    printTimes: 1
  },
  {
    id: '10006',
    type: 'عرض سعر',
    category: '',
    customer: '',
    currency: 'ر.ي',
    status: 'تمت الموافقة - 1',
    date: '20/3/2024',
    refNo: '',
    isDraft: false,
    isPending: false,
    note: '',
    items: [],
    arabicSpelling: 'صفر ريال يمني',
    totalAmount: 0,
    discount: 0,
    charges: 0,
    dueAmount: 0,
    printTimes: 0
  },
  {
    id: '10005',
    type: 'عرض سعر',
    category: '',
    customer: '',
    currency: 'ر.ي',
    status: 'جديد',
    date: '29/1/2024',
    refNo: '',
    isDraft: false,
    isPending: false,
    note: '',
    items: [],
    arabicSpelling: 'صفر ريال يمني',
    totalAmount: 0,
    discount: 0,
    charges: 0,
    dueAmount: 0,
    printTimes: 0
  },
  {
    id: '10004',
    type: 'عرض سعر',
    category: '',
    customer: '6003 : صالح منصور',
    currency: 'ر.ي',
    status: 'جديد',
    date: '13/2/2022',
    refNo: '',
    isDraft: false,
    isPending: false,
    note: '',
    items: [],
    arabicSpelling: 'صفر ريال يمني',
    totalAmount: 0,
    discount: 0,
    charges: 0,
    dueAmount: 0,
    printTimes: 0
  },
  {
    id: '10003',
    type: 'عرض سعر',
    category: '',
    customer: '6007 : أحمد نصر محمد',
    currency: 'ر.ي',
    status: 'جديد',
    date: '6/7/2021',
    refNo: '',
    isDraft: false,
    isPending: false,
    note: '',
    items: [],
    arabicSpelling: 'صفر ريال يمني',
    totalAmount: 0,
    discount: 0,
    charges: 0,
    dueAmount: 0,
    printTimes: 0
  },
  {
    id: '10002',
    type: 'عرض سعر',
    category: '',
    customer: '',
    currency: 'ر.ي',
    status: 'جديد',
    date: '25/3/2021',
    refNo: '',
    isDraft: false,
    isPending: false,
    note: '',
    items: [],
    arabicSpelling: 'صفر ريال يمني',
    totalAmount: 0,
    discount: 0,
    charges: 0,
    dueAmount: 0,
    printTimes: 0
  },
  {
    id: '10001',
    type: 'عرض سعر',
    category: '',
    customer: '',
    currency: 'ر.ي',
    status: 'جديد',
    date: '10/2/2021',
    refNo: '',
    isDraft: false,
    isPending: false,
    note: '',
    items: [],
    arabicSpelling: 'صفر ريال يمني',
    totalAmount: 0,
    discount: 0,
    charges: 0,
    dueAmount: 0,
    printTimes: 0
  }
];

export default function QuotationsBrowse({ onNavigate }: QuotationsBrowseProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDocIndex, setActiveDocIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('doc');

  // Filter list on sidebar
  const filteredList = BROWSE_DOCUMENTS.filter(doc => 
    doc.id.includes(searchTerm) || 
    doc.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.status.includes(searchTerm)
  );

  const selectedDoc = filteredList[activeDocIndex] || BROWSE_DOCUMENTS[0];

  const handleSelectDocById = (id: string) => {
    const filteredIndex = filteredList.findIndex(d => d.id === id);
    if (filteredIndex > -1) {
      setActiveDocIndex(filteredIndex);
    }
  };

  const handleNext = () => {
    if (activeDocIndex < filteredList.length - 1) {
      setActiveDocIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeDocIndex > 0) {
      setActiveDocIndex(prev => prev - 1);
    }
  };

  const handleFirst = () => {
    setActiveDocIndex(0);
  };

  const handleLast = () => {
    if (filteredList.length > 0) {
      setActiveDocIndex(filteredList.length - 1);
    }
  };

  // Pre-filled 5 rows logic for ERP view
  const displayItems = [...selectedDoc.items];
  while (displayItems.length < 5) {
    displayItems.push({
      id: displayItems.length + 1,
      group: '',
      itemName: '',
      unit: '',
      qty: '',
      freeQty: '',
      unitPrice: '',
      spec: '',
      total: ''
    });
  }

  return (
    <div className="qb-split-layout">
      
      {/* 2. Sidebar Right Selection Panel */}
      <div className="qb-right-panel">
        
        {/* Sidebar Header */}
        <div className="qb-right-header">
          <span>عرض سعر</span>
        </div>

        {/* Sidebar Search Bar */}
        <div className="qb-right-search-area">
          <div className="qb-search-wrapper">
            <input 
              type="text" 
              placeholder="الرقم" 
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setActiveDocIndex(0);
              }}
              className="qb-search-input"
            />
            <button className="qb-search-btn">
              <Search size={14} color="#7f8c8d" />
            </button>
          </div>
          
          {/* Quick Action Icons below search */}
          <div className="qb-sidebar-quick-icons">
            <button className="qb-sidebar-icon-btn"><Settings size={13} /></button>
            <button className="qb-sidebar-icon-btn"><RefreshCw size={12} /></button>
            <button className="qb-sidebar-icon-btn"><List size={13} /></button>
            <button className="qb-sidebar-icon-btn"><Printer size={13} /></button>
            <button className="qb-sidebar-icon-btn" onClick={() => onNavigate('quotations-new')}><Star size={13} /></button>
          </div>
        </div>

        {/* Sidebar List */}
        <div className="qb-right-list-items">
          {filteredList.length === 0 ? (
            <div className="qb-empty-list">لا توجد نتائج مطابقة</div>
          ) : (
            filteredList.map((doc) => {
              const isSelected = selectedDoc.id === doc.id;
              return (
                <div 
                  key={doc.id}
                  className={`qb-sidebar-item ${isSelected ? 'active' : ''}`}
                  onClick={() => handleSelectDocById(doc.id)}
                >
                  <div className="qb-item-main-row">
                    <span className="qb-item-id">
                      {isSelected && <span className="qb-item-star">★</span>}
                      {doc.status} , {doc.id}
                      {doc.customer ? ` : ${doc.customer.split(' : ')[0]}` : ''}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* 1. Main Left Detail Review Area */}
      <div className="qb-left-panel">
        
        {/* Top Control Toolbar (RTL flow, buttons on left, paginations on right) */}
        <div className="qb-toolbar">
          
          {/* Action Buttons Section */}
          <div className="qb-toolbar-actions">
            <button 
              className="qb-btn-action qb-btn-blue" 
              onClick={() => alert(`تحويل المستند ${selectedDoc.id} إلى فاتورة مبيعات.`)}
            >
              <span>تحويل إلى:</span>
              <Play size={10} className="qb-arrow-rotate" fill="currentColor" />
            </button>
            
            <button 
              className="qb-btn-action qb-btn-white" 
              onClick={() => onNavigate('dashboard')}
            >
              <Check size={14} color="#27ae60" strokeWidth={3} />
              <span>إغلاق</span>
            </button>

            <button 
              className="qb-btn-action qb-btn-white" 
              onClick={() => alert('تعديل عرض السعر.')}
            >
              <Edit size={14} color="#e67e22" />
              <span>تعديل</span>
            </button>

            <button 
              className="qb-btn-action qb-btn-white" 
              onClick={() => window.print()}
            >
              <Printer size={14} color="#555" />
              <span>طباعة</span>
            </button>
          </div>

          {/* Pagination & Navigation Section */}
          <div className="qb-toolbar-navigation">
            
            {/* Quick search input */}
            <div className="qb-quick-search-container">
              <input
                type="text"
                placeholder="بحث : الرقم"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setActiveDocIndex(0);
                }}
                className="qb-quick-search-input"
              />
              <Search size={12} color="#7f8c8d" className="qb-quick-search-icon" />
            </div>

            <button className="qb-nav-icon-btn" title="الرئيسية" onClick={() => onNavigate('dashboard')}>
              <Home size={14} />
            </button>
            
            <span className="qb-divider">|</span>

            {/* Pagination Controls */}
            <div className="qb-pagination-wrapper">
              <button className="qb-nav-icon-btn" onClick={handleLast} disabled={activeDocIndex >= filteredList.length - 1}>
                <ChevronsRight size={14} />
              </button>
              <button className="qb-nav-icon-btn" onClick={handleNext} disabled={activeDocIndex >= filteredList.length - 1}>
                <ChevronRight size={14} />
              </button>
              
              <button className="qb-nav-icon-btn" onClick={handlePrev} disabled={activeDocIndex <= 0}>
                <ChevronLeft size={14} />
              </button>
              <button className="qb-nav-icon-btn" onClick={handleFirst} disabled={activeDocIndex <= 0}>
                <ChevronsLeft size={14} />
              </button>
            </div>

            <span className="qb-divider">|</span>

            <button className="qb-nav-icon-btn" title="تحديث" onClick={() => { setSearchTerm(''); setActiveDocIndex(0); }}>
              <RefreshCw size={13} />
            </button>
            <button className="qb-nav-icon-btn" title="خيارات إضافية">
              <Settings size={14} />
            </button>
          </div>
        </div>

        {/* Orange stripe */}
        <div className="qb-stripe-orange"></div>

        {/* Light Blue-Grey Alert Bar */}
        <div className="qb-alert-bar">
          <div className="qb-alert-close">
            <X size={12} strokeWidth={3} />
          </div>
          <div className="qb-alert-text">
            <Star size={13} fill="#0066cc" color="#0066cc" />
            <span>استلام مبلغ من عميل</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="qb-form-container">
          
          {/* Tabs */}
          <div className="qb-tab-bar">
            <div 
              className={`qb-tab-item ${activeTab === 'doc' ? 'active' : ''}`}
              onClick={() => setActiveTab('doc')}
            >
              عرض سعر
            </div>
            <div 
              className={`qb-tab-item ${activeTab === 'history' ? 'active' : ''}`}
              onClick={() => setActiveTab('history')}
            >
              السجل
            </div>
          </div>

          {activeTab === 'doc' ? (
            <>
              {/* Form Block (Master Info Inputs) */}
              <div className="qb-form-fields-grid">
                
                {/* Row 1 */}
                <div className="qb-field-group">
                  <label className="qb-field-label">الرقم</label>
                  <span className="qb-value-id-large">{selectedDoc.id}</span>
                </div>
                
                <div className="qb-field-group">
                  <label className="qb-field-label">الفئة</label>
                  <select className="qb-field-select" disabled>
                    <option value=""></option>
                  </select>
                </div>

                {/* Row 2 */}
                <div className="qb-field-group">
                  <label className="qb-field-label">التاريخ</label>
                  <input type="text" className="qb-field-input" value={selectedDoc.date} readOnly />
                </div>
                
                <div className="qb-field-group">
                  <label className="qb-field-label">رقم المرجع</label>
                  <input type="text" className="qb-field-input" value={selectedDoc.refNo} readOnly />
                </div>

                <div className="qb-field-group qb-checkbox-group">
                  <input type="checkbox" checked={selectedDoc.isDraft} readOnly id="draftCheck" />
                  <label htmlFor="draftCheck">مسودة</label>
                </div>

                {/* Row 3 */}
                <div className="qb-field-group">
                  <label className="qb-field-label">عملة المستند</label>
                  <select className="qb-field-select qb-currency-select" disabled>
                    <option value="ر.ي">{selectedDoc.currency}</option>
                  </select>
                </div>

                <div className="qb-field-group qb-checkbox-group">
                  <input type="checkbox" checked={selectedDoc.isPending} readOnly id="pendingCheck" />
                  <label htmlFor="pendingCheck">معلق</label>
                </div>

                {/* Row 4 */}
                <div className="qb-field-group qb-span-two">
                  <label className="qb-field-label">الأخوة</label>
                  <div className="qb-select-with-arrow">
                    <select className="qb-field-select" disabled>
                      <option value="amma">{selectedDoc.customer || ' '}</option>
                    </select>
                    <span className="qb-select-custom-arrow">▼</span>
                  </div>
                </div>

                {/* Row 5 */}
                <div className="qb-field-group qb-span-two">
                  <label className="qb-field-label">ملاحظة</label>
                  <input type="text" className="qb-field-input" value={selectedDoc.note} readOnly />
                </div>
              </div>

              {/* Items Grid/Table */}
              <div className="qb-grid-table-container">
                <table className="qb-grid-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}>م</th>
                      <th style={{ width: '180px' }}>المجموعة</th>
                      <th>الصنف</th>
                      <th style={{ width: '90px' }}>الوحدة</th>
                      <th style={{ width: '80px' }}>الكمية</th>
                      <th style={{ width: '80px' }}>ك.مجانية</th>
                      <th style={{ width: '120px' }}>سعر الوحدة</th>
                      <th style={{ width: '110px' }}>المواصفات</th>
                      <th style={{ width: '130px' }}>الإجمالي</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayItems.map((item, idx) => (
                      <tr key={idx}>
                        <td className="qb-cell-row-num">{idx + 1}</td>
                        <td>
                          <div className="qb-cell-select-wrapper">
                            <select className="qb-cell-select" disabled value={item.group}>
                              <option value={item.group}>{item.group}</option>
                            </select>
                            {item.group && <span className="qb-cell-arrow">▼</span>}
                          </div>
                        </td>
                        <td>
                          <div className="qb-cell-select-wrapper">
                            <select className="qb-cell-select qb-cell-bold" disabled value={item.itemName}>
                              <option value={item.itemName}>{item.itemName}</option>
                            </select>
                            {item.itemName && <span className="qb-cell-search-icon">🔍</span>}
                          </div>
                        </td>
                        <td>
                          <div className="qb-cell-select-wrapper">
                            <select className="qb-cell-select" disabled value={item.unit}>
                              <option value={item.unit}>{item.unit}</option>
                            </select>
                            {item.unit && <span className="qb-cell-arrow">▼</span>}
                          </div>
                        </td>
                        <td>
                          <input type="text" className="qb-cell-input qb-text-center qb-cell-bold" value={item.qty} readOnly />
                        </td>
                        <td>
                          <input type="text" className="qb-cell-input qb-text-center" value={item.freeQty} readOnly />
                        </td>
                        <td>
                          <input type="text" className="qb-cell-input qb-text-center" value={item.unitPrice} readOnly />
                        </td>
                        <td>
                          <div className="qb-cell-input-wrapper">
                            <input type="text" className="qb-cell-input" value={item.spec} readOnly />
                            {item.id <= selectedDoc.items.length && <span className="qb-cell-spec-icon">✍</span>}
                          </div>
                        </td>
                        <td>
                          <input type="text" className="qb-cell-input qb-text-center qb-cell-bold" value={item.total} readOnly />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Blue Total Bar */}
              <div className="qb-blue-total-bar">
                <span className="qb-spelling-arabic">{selectedDoc.arabicSpelling}</span>
                <div className="qb-total-number-box">
                  <span className="qb-total-label">الإجمالي :</span>
                  <span className="qb-total-val">{selectedDoc.totalAmount.toLocaleString()}</span>
                </div>
              </div>

              {/* Bottom Summary Panel */}
              <div className="qb-bottom-summary">
                
                {/* Details Section */}
                <div className="qb-summary-details">
                  <label className="qb-summary-label">تفاصيل</label>
                  <textarea className="qb-summary-textarea" rows={3} value={selectedDoc.note} readOnly />
                </div>

                {/* Totals Section */}
                <div className="qb-summary-totals">
                  
                  {/* Left sub-col: print times */}
                  <div className="qb-print-times-box">
                    <label className="qb-summary-label">مرات الطباعة</label>
                    <input type="text" className="qb-print-input" value={selectedDoc.printTimes} readOnly />
                  </div>

                  {/* Middle sub-col: money values */}
                  <div className="qb-totals-grid">
                    <div className="qb-total-field">
                      <input type="text" className="qb-total-input" value={selectedDoc.totalAmount.toLocaleString()} readOnly />
                      <label className="qb-summary-label">الإجمالي</label>
                    </div>

                    <div className="qb-total-field">
                      <input type="text" className="qb-total-input" value={selectedDoc.discount || ''} readOnly />
                      <label className="qb-summary-label">التخفيض</label>
                    </div>

                    <div className="qb-total-field">
                      <input type="text" className="qb-total-input" value={selectedDoc.charges || ''} readOnly />
                      <label className="qb-summary-label">الأعباء</label>
                    </div>

                    <div className="qb-total-field">
                      <input type="text" className="qb-total-input qb-due-blue" value={selectedDoc.dueAmount.toLocaleString()} readOnly />
                      <label className="qb-summary-label">المبلغ المستحق</label>
                    </div>
                  </div>

                </div>
              </div>
            </>
          ) : (
            <div className="qb-history-panel">
              <Info size={20} color="#3c8dbc" />
              <span>لا توجد سجلات تاريخية تعديلية أو حركات لوج المراجعة لهذا المستند.</span>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
