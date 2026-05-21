import { useState } from 'react';
import { Search, Settings, Home, FilePlus, Play, Check, Eye, X, RefreshCw, LayoutGrid } from 'lucide-react';

interface QuotationsSearchProps {
  onNavigate: (route: string) => void;
}

interface QuotationRecord {
  id: string;
  customer: string;
  date: string;
  currency: string;
  total: number;
  status: 'بانتظار الموافقة' | 'تمت الموافقة' | 'مسودة';
  exchangeRate: string;
  items: Array<{ itemName: string; qty: number; price: number; unit: string }>;
}

const MOCK_QUOTATIONS: QuotationRecord[] = [
  {
    id: '10006',
    customer: '6003 : صالح منصور',
    date: '19/5/2026',
    currency: 'ر.ي',
    total: 12500.00,
    status: 'بانتظار الموافقة',
    exchangeRate: '1.00',
    items: [
      { itemName: 'أرز بسمتي 5كجم', qty: 2, price: 3500, unit: 'كيس' },
      { itemName: 'حليب مجفف 900جم', qty: 1, price: 5200, unit: 'علبة' },
      { itemName: 'شاي الكبوس 250جم', qty: 1, price: 400, unit: 'حبة' }
    ]
  },
  {
    id: '10005',
    customer: 'شركة الأفق التجارية',
    date: '18/5/2026',
    currency: 'ر.ي',
    total: 4800.00,
    status: 'تمت الموافقة',
    exchangeRate: '1.00',
    items: [
      { itemName: 'سكر السعيد 10كجم', qty: 1, price: 4800, unit: 'كيس' }
    ]
  },
  {
    id: '10004',
    customer: 'سعيد القديمي',
    date: '15/5/2026',
    currency: 'ر.ي',
    total: 75000.00,
    status: 'بانتظار الموافقة',
    exchangeRate: '1.00',
    items: [
      { itemName: 'حليب مجفف 900جم', qty: 12, price: 5200, unit: 'علبة' },
      { itemName: 'أرز بسمتي 5كجم', qty: 3, price: 3500, unit: 'كيس' },
      { itemName: 'زيت طبخ 1 لتر', qty: 2, price: 1200, unit: 'علبة' }
    ]
  },
  {
    id: '10003',
    customer: 'حمود محمد سيف',
    date: '10/5/2026',
    currency: 'ر.ي',
    total: 3500.00,
    status: 'مسودة',
    exchangeRate: '1.00',
    items: [
      { itemName: 'أرز بسمتي 5كجم', qty: 1, price: 3500, unit: 'كيس' }
    ]
  }
];

export default function QuotationsSearch({ onNavigate }: QuotationsSearchProps) {
  const [quotationNo, setQuotationNo] = useState('');
  const [recordsCount, setRecordsCount] = useState('100');
  const [activeTab, setActiveTab] = useState('categories');
  const [searchResults, setSearchResults] = useState<QuotationRecord[]>([]);
  const [searchExecuted, setSearchExecuted] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<QuotationRecord | null>(null);

  const handleExecuteSearch = () => {
    // Filter based on input quotation number
    const filtered = MOCK_QUOTATIONS.filter(q => q.id.includes(quotationNo));
    setSearchResults(filtered);
    setSearchExecuted(true);
  };

  const handleNewQuotation = () => {
    // Redirect to POS with standard new quotation setup or alert
    alert('تحويل لإنشاء عرض سعر جديد.');
  };

  return (
    <div className="qs-page">
      {/* 1. Toolbar */}
      <div className="qs-toolbar">
        {/* Left Side: Layout & Settings Utilities */}
        <div className="qs-toolbar-left">
          <div className="rl-utility-icon" title="الإعدادات">
            <Settings size={15} />
          </div>
          <div className="rl-utility-icon" title="تحديث">
            <RefreshCw size={14} />
          </div>
          <div className="rl-utility-icon" title="تنسيق الشبكة">
            <LayoutGrid size={15} />
          </div>
          <div className="rl-utility-icon" title="الرئيسية" onClick={() => onNavigate('dashboard')}>
            <Home size={15} />
          </div>
        </div>

        {/* Right Side: Primary Actions */}
        <div className="qs-toolbar-right">
          <button className="qs-btn qs-btn-execute-action" onClick={handleExecuteSearch}>
            <Play size={13} fill="#c0392b" color="#c0392b" style={{ marginLeft: '4px' }} />
            <span>تنفيذ</span>
          </button>
          
          <button className="qs-btn qs-btn-primary" onClick={() => alert('تفعيل البحث المتقدم عروض الأسعار.')}>
            <Search size={13} style={{ marginLeft: '4px' }} />
            <span>بحث متقدم</span>
          </button>

          <button className="qs-btn" onClick={handleNewQuotation}>
            <FilePlus size={13} color="#28a745" style={{ marginLeft: '4px' }} />
            <span>جديد (عرض سعر)</span>
          </button>
        </div>
      </div>

      {/* 2. Main Search Area Panel */}
      <div className="qs-container">
        <div className="qs-panel">
          <div className="qs-panel-header">
            عرض سعر
          </div>
          <div className="qs-panel-body">
            {/* Row 1 */}
            <div className="qs-row">
              {/* Left Side: Execute Search Big Blue Button */}
              <div>
                <button className="qs-btn-execute-search" onClick={handleExecuteSearch}>
                  <Check size={16} strokeWidth={3} />
                  <span>تنفيذ البحث</span>
                </button>
              </div>

              {/* Right Side: Quotation Number input */}
              <div className="qs-field">
                <input
                  type="text"
                  className="qs-input"
                  placeholder="اكتب رقم عرض السعر..."
                  value={quotationNo}
                  onChange={(e) => setQuotationNo(e.target.value)}
                  style={{ textAlign: 'left' }}
                />
                <label className="qs-label">الرقم</label>
              </div>
            </div>

            {/* Row 2 */}
            <div className="qs-row" style={{ justifyContent: 'flex-end' }}>
              <div className="qs-field">
                <input
                  type="text"
                  className="qs-input"
                  style={{ width: '80px', textAlign: 'center' }}
                  value={recordsCount}
                  onChange={(e) => setRecordsCount(e.target.value)}
                />
                <label className="qs-label">عدد السجلات</label>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Tabs (RTL tabs from screenshot) */}
        <div className="qs-tabs-container">
          <div 
            className={`qs-tab ${activeTab === 'categories' ? 'active' : ''}`}
            onClick={() => setActiveTab('categories')}
          >
            <span>فئات المستند</span>
            <span className="qs-blue-square"></span>
          </div>

          <div 
            className={`qs-tab ${activeTab === 'waiting' ? 'active' : ''}`}
            onClick={() => setActiveTab('waiting')}
          >
            <span>بإنتظار الموافقة</span>
            <span className="qs-blue-square"></span>
          </div>

          <div 
            className={`qs-tab ${activeTab === 'custom-attributes' ? 'active' : ''}`}
            onClick={() => setActiveTab('custom-attributes')}
          >
            <span>الإعدادات : سمات مخصصة</span>
            <span className="qs-blue-square"></span>
          </div>

          <div 
            className={`qs-tab ${activeTab === 'drafts' ? 'active' : ''}`}
            onClick={() => setActiveTab('drafts')}
          >
            <span>المسودات</span>
            <span className="qs-blue-square"></span>
          </div>

          <div 
            className={`qs-tab ${activeTab === 'doc-items' ? 'active' : ''}`}
            onClick={() => setActiveTab('doc-items')}
          >
            <span>أصناف المستندات</span>
            <span className="qs-blue-square"></span>
          </div>

          <div 
            className={`qs-tab ${activeTab === 'doc-items-qty' ? 'active' : ''}`}
            onClick={() => setActiveTab('doc-items-qty')}
          >
            <span>أصناف المستندات ( كميات )</span>
            <span className="qs-blue-square"></span>
          </div>
        </div>

        {/* Search Results / Content Grid */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #c8d3df', padding: '15px', borderTop: 'none', minHeight: '200px' }}>
          {activeTab === 'categories' && (
            <div>
              <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#2b3e50', borderBottom: '1px solid #e0e0e0', paddingBottom: '6px', marginBottom: '10px' }}>
                فئات المستند
              </div>
              
              {/* Show records table if search is executed, or default records list */}
              {searchExecuted ? (
                <table className="rl-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}>م</th>
                      <th style={{ width: '40px' }}>عرض</th>
                      <th>رقم العرض</th>
                      <th>العميل</th>
                      <th>التاريخ</th>
                      <th>العملة</th>
                      <th>الإجمالي</th>
                      <th>الحالة</th>
                      <th>سعر التحويل</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.length === 0 ? (
                      <tr>
                        <td colSpan={9} style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
                          لا توجد عروض أسعار تطابق رقم البحث المدخل.
                        </td>
                      </tr>
                    ) : (
                      searchResults.map((quote, index) => (
                        <tr key={quote.id}>
                          <td style={{ textAlign: 'center' }}>{index + 1}</td>
                          <td style={{ textAlign: 'center' }}>
                            <button 
                              onClick={() => setSelectedQuote(quote)}
                              style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#3c8dbc' }}
                              title="استعراض تفاصيل عرض السعر"
                            >
                              <Eye size={13} />
                            </button>
                          </td>
                          <td style={{ fontWeight: 'bold', color: '#0b5394' }}>{quote.id}</td>
                          <td>{quote.customer}</td>
                          <td>{quote.date}</td>
                          <td>{quote.currency}</td>
                          <td style={{ fontWeight: 'bold' }}>{quote.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                          <td>
                            <span style={{ 
                              color: quote.status === 'تمت الموافقة' ? '#27ae60' : quote.status === 'مسودة' ? '#7f8c8d' : '#e67e22',
                              fontWeight: 'bold'
                            }}>
                              {quote.status}
                            </span>
                          </td>
                          <td>{quote.exchangeRate}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 20px', color: '#7f8c8d' }}>
                  <Search size={30} style={{ opacity: 0.3, marginBottom: '8px' }} />
                  <div>يرجى إدخال معايير البحث والضغط على زر "تنفيذ البحث" لعرض فئات وعروض الأسعار المتاحة.</div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'waiting' && (
            <div style={{ padding: '10px' }}>
              <div style={{ fontWeight: 'bold', color: '#e67e22', marginBottom: '8px' }}>العروض بانتظار الموافقة والاعتماد:</div>
              <table className="rl-table">
                <thead>
                  <tr>
                    <th>م</th>
                    <th>رقم العرض</th>
                    <th>العميل</th>
                    <th>التاريخ</th>
                    <th>الإجمالي</th>
                    <th>الإجراء</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_QUOTATIONS.filter(q => q.status === 'بانتظار الموافقة').map((quote, idx) => (
                    <tr key={quote.id}>
                      <td>{idx + 1}</td>
                      <td style={{ fontWeight: 'bold', color: '#0b5394' }}>{quote.id}</td>
                      <td>{quote.customer}</td>
                      <td>{quote.date}</td>
                      <td style={{ fontWeight: 'bold' }}>{quote.total.toLocaleString()} ر.ي</td>
                      <td>
                        <button 
                          className="pos-add-row-btn" 
                          style={{ padding: '2px 8px', fontSize: '11px', background: '#27ae60', color: '#fff', border: 'none', borderRadius: '3px' }}
                          onClick={() => alert(`تمت الموافقة على عرض السعر رقم ${quote.id}`)}
                        >
                          اعتماد العرض
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'custom-attributes' && (
            <div style={{ padding: '15px', color: '#555' }}>
              <h4>سمات المستند المخصصة (عروض الأسعار):</h4>
              <p>من هنا يمكنك إعداد الحقول الإضافية، التلميحات، وتحديد الصلاحيات الخاصة بخصومات عروض الأسعار وفترات الصلاحية.</p>
            </div>
          )}

          {activeTab === 'drafts' && (
            <div style={{ padding: '10px' }}>
              <div style={{ fontWeight: 'bold', color: '#7f8c8d', marginBottom: '8px' }}>المسودات غير المرحّلة:</div>
              <table className="rl-table">
                <thead>
                  <tr>
                    <th>م</th>
                    <th>رقم العرض</th>
                    <th>العميل</th>
                    <th>التاريخ</th>
                    <th>الإجمالي</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_QUOTATIONS.filter(q => q.status === 'مسودة').map((quote, idx) => (
                    <tr key={quote.id}>
                      <td>{idx + 1}</td>
                      <td style={{ fontWeight: 'bold' }}>{quote.id}</td>
                      <td>{quote.customer}</td>
                      <td>{quote.date}</td>
                      <td>{quote.total.toLocaleString()} ر.ي</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'doc-items' && (
            <div style={{ padding: '15px' }}>
              <h4>أصناف المستندات:</h4>
              <p>توزيع وتدقيق الأصناف داخل عروض الأسعار النشطة.</p>
            </div>
          )}

          {activeTab === 'doc-items-qty' && (
            <div style={{ padding: '15px' }}>
              <h4>أصناف المستندات ( كميات ):</h4>
              <p>تقرير إجمالي الكميات المطلوبة في عروض أسعار العملاء.</p>
            </div>
          )}
        </div>
      </div>

      {/* 4. Details Preview Modal Overlay */}
      {selectedQuote && (
        <div className="rl-modal-overlay" onClick={() => setSelectedQuote(null)}>
          <div className="rl-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="rl-modal-header" style={{ backgroundColor: '#2b3e50' }}>
              <span>عرض تفاصيل عرض السعر رقم {selectedQuote.id}</span>
              <button 
                onClick={() => setSelectedQuote(null)}
                style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="rl-modal-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                <div><strong>العميل:</strong> {selectedQuote.customer}</div>
                <div><strong>التاريخ:</strong> {selectedQuote.date}</div>
                <div><strong>الحالة:</strong> <span style={{ fontWeight: 'bold', color: selectedQuote.status === 'تمت الموافقة' ? '#27ae60' : '#e67e22' }}>{selectedQuote.status}</span></div>
                <div><strong>العملة:</strong> {selectedQuote.currency}</div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ margin: '0 0 10px 0', borderBottom: '1px solid #ddd', paddingBottom: '4px' }}>أصناف عرض السعر:</h4>
                <table className="pos-grid-table" style={{ width: '100%' }}>
                  <thead>
                    <tr>
                      <th>م</th>
                      <th>الصنف</th>
                      <th>الوحدة</th>
                      <th>الكمية</th>
                      <th>سعر الوحدة</th>
                      <th>الإجمالي</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedQuote.items.map((item, index) => (
                      <tr key={index}>
                        <td className="pos-grid-id">{index + 1}</td>
                        <td style={{ padding: '6px' }}>{item.itemName}</td>
                        <td style={{ padding: '6px' }}>{item.unit}</td>
                        <td style={{ padding: '6px', textAlign: 'center' }}>{item.qty}</td>
                        <td style={{ padding: '6px', textAlign: 'center' }}>{item.price.toFixed(2)}</td>
                        <td style={{ padding: '6px', textAlign: 'center', fontWeight: 'bold' }}>{(item.qty * item.price).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div><strong>إجمالي عرض السعر:</strong></div>
                <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#2b3e50' }}>{selectedQuote.total.toLocaleString()} {selectedQuote.currency}</div>
              </div>
            </div>

            <div className="rl-modal-footer">
              <button className="cr-btn cr-btn-cancel" onClick={() => setSelectedQuote(null)}>إغلاق</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
