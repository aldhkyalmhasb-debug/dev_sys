import { useState } from 'react';
import { Search, Settings, Home, FilePlus, Eye, X, RefreshCw, Printer, LayoutGrid, HelpCircle } from 'lucide-react';

interface QuotationsListProps {
  onNavigate: (route: string) => void;
}

interface QuotationRecord {
  id: string;
  type: string;
  category: string;
  customer: string;
  currency: string;
  total: number | null;
  discount: string;
  dueAmount: number | null;
  paidCash: string;
  paidNetwork: string;
  dueLater: string;
  viaNetwork: string;
  status: string;
  date: string;
  exchangeRate: number | null;
  items: Array<{ itemName: string; qty: number; price: number; unit: string }>;
}

const MOCK_RECORDS: QuotationRecord[] = [
  {
    id: '10008',
    type: 'عرض سعر',
    category: '',
    customer: 'amma : 6012',
    currency: 'ر.ي',
    total: 28200.00,
    discount: '',
    dueAmount: 28200.00,
    paidCash: '',
    paidNetwork: '',
    dueLater: '',
    viaNetwork: '',
    status: 'تمت الموافقة - 1',
    date: '24/6/2024',
    exchangeRate: null,
    items: [
      { itemName: 'حليب مجفف 900جم', qty: 5, price: 5200, unit: 'علبة' },
      { itemName: 'شاي الكبوس 250جم', qty: 5, price: 440, unit: 'حبة' }
    ]
  },
  {
    id: '10007',
    type: 'عرض سعر',
    category: '',
    customer: '6006 : شركة الأفق',
    currency: '$',
    total: 50.00,
    discount: '',
    dueAmount: 50.00,
    paidCash: '',
    paidNetwork: '',
    dueLater: '',
    viaNetwork: '',
    status: 'جديد',
    date: '14/6/2024',
    exchangeRate: 530.00,
    items: [
      { itemName: 'سكر السعيد 10كجم', qty: 10, price: 5.0, unit: 'كيس' }
    ]
  },
  {
    id: '10006',
    type: 'عرض سعر',
    category: '',
    customer: '',
    currency: 'ر.ي',
    total: 22000.00,
    discount: '',
    dueAmount: 22000.00,
    paidCash: '',
    paidNetwork: '',
    dueLater: '',
    viaNetwork: '',
    status: 'تمت الموافقة - 1',
    date: '20/3/2024',
    exchangeRate: null,
    items: [
      { itemName: 'أرز بسمتي 5كجم', qty: 4, price: 3500, unit: 'كيس' },
      { itemName: 'زيت طبخ 1 لتر', qty: 6, price: 1330, unit: 'علبة' }
    ]
  },
  {
    id: '10005',
    type: 'عرض سعر',
    category: '',
    customer: '',
    currency: 'ر.ي',
    total: 6000.00,
    discount: '',
    dueAmount: 6000.00,
    paidCash: '',
    paidNetwork: '',
    dueLater: '',
    viaNetwork: '',
    status: 'جديد',
    date: '29/1/2024',
    exchangeRate: null,
    items: [
      { itemName: 'شاي الكبوس 250جم', qty: 15, price: 400, unit: 'حبة' }
    ]
  },
  {
    id: '10004',
    type: 'عرض سعر',
    category: '',
    customer: '6003 : صالح منصور',
    currency: 'ر.ي',
    total: 7000.00,
    discount: '',
    dueAmount: 7000.00,
    paidCash: '',
    paidNetwork: '',
    dueLater: '',
    viaNetwork: '',
    status: 'جديد',
    date: '13/2/2022',
    exchangeRate: null,
    items: [
      { itemName: 'أرز بسمتي 5كجم', qty: 2, price: 3500, unit: 'كيس' }
    ]
  },
  {
    id: '10003',
    type: 'عرض سعر',
    category: '',
    customer: '6007 : أحمد نصر محمد',
    currency: '$',
    total: 0.50,
    discount: '',
    dueAmount: 0.50,
    paidCash: '',
    paidNetwork: '',
    dueLater: '',
    viaNetwork: '',
    status: 'جديد',
    date: '6/7/2021',
    exchangeRate: 500.00,
    items: [
      { itemName: 'بسكويت ريكو', qty: 1, price: 0.50, unit: 'حبة' }
    ]
  },
  {
    id: '10002',
    type: 'عرض سعر',
    category: '',
    customer: '',
    currency: 'ر.ي',
    total: null,
    discount: '',
    dueAmount: null,
    paidCash: '',
    paidNetwork: '',
    dueLater: '',
    viaNetwork: '',
    status: 'جديد',
    date: '1/3/2021',
    exchangeRate: null,
    items: []
  },
  {
    id: '10001',
    type: 'عرض سعر',
    category: '',
    customer: '',
    currency: 'ر.ي',
    total: 1500.00,
    discount: '',
    dueAmount: 1500.00,
    paidCash: '',
    paidNetwork: '',
    dueLater: '',
    viaNetwork: '',
    status: 'جديد',
    date: '1/11/2020',
    exchangeRate: null,
    items: [
      { itemName: 'شاي الكبوس 250جم', qty: 3, price: 500, unit: 'حبة' }
    ]
  }
];

export default function QuotationsList({ onNavigate }: QuotationsListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [recordsCount, setRecordsCount] = useState('100');
  const [activeTab, setActiveTab] = useState('categories');
  const [selectedRecord, setSelectedRecord] = useState<QuotationRecord | null>(null);

  const filteredRecords = MOCK_RECORDS.filter((rec) => {
    // Filter by number (الرقم) or Customer (الأخوة)
    const matchSearch = rec.id.includes(searchTerm) || rec.customer.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === 'waiting') {
      return matchSearch && rec.status.includes('بانتظار');
    }
    if (activeTab === 'drafts') {
      return matchSearch && rec.status === 'مسودة';
    }
    return matchSearch;
  });

  return (
    <div className="qs-page">
      {/* 1. Header Toolbar */}
      <div className="qs-toolbar">
        {/* Left Side: Search by number and layout settings */}
        <div className="qs-toolbar-left" style={{ gap: '15px' }}>
          {/* Quick Search */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="بحث : الرقم"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                border: '1px solid #b0c2d4',
                borderRadius: '3px',
                padding: '4px 28px 4px 10px',
                fontSize: '13px',
                width: '180px',
                textAlign: 'left',
                outline: 'none'
              }}
            />
            <Search size={14} color="#7f8c8d" style={{ position: 'absolute', right: '8px' }} />
          </div>

          <div className="rl-utility-icon" title="الإعدادات">
            <Settings size={15} />
          </div>
          <div className="rl-utility-icon" title="تحديث" onClick={() => setSearchTerm('')}>
            <RefreshCw size={14} />
          </div>
          <div className="rl-utility-icon" title="تنسيق الجدول">
            <LayoutGrid size={15} />
          </div>
          <div className="rl-utility-icon" title="الرئيسية" onClick={() => onNavigate('dashboard')}>
            <Home size={15} />
          </div>
        </div>

        {/* Right Side: Action buttons */}
        <div className="qs-toolbar-right">
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <input
              type="text"
              value={recordsCount}
              onChange={(e) => setRecordsCount(e.target.value)}
              style={{ width: '40px', textAlign: 'center', padding: '3px', border: '1px solid #b0c2d4', borderRadius: '3px', fontSize: '13px' }}
            />
            <div className="rl-utility-icon" title="طباعة">
              <Printer size={15} />
            </div>
          </div>

          <span style={{ borderLeft: '1px solid #ccc', height: '18px', margin: '0 5px' }}></span>

          <button className="qs-btn qs-btn-primary" onClick={() => alert('تفعيل البحث المتقدم.')}>
            <Search size={13} style={{ marginLeft: '4px' }} />
            <span>بحث متقدم</span>
          </button>

          <button className="qs-btn" onClick={() => alert('إنشاء عرض سعر جديد.')}>
            <FilePlus size={13} color="#28a745" style={{ marginLeft: '4px' }} />
            <span>جديد (عرض سعر)</span>
          </button>
        </div>
      </div>

      {/* 2. Main content container */}
      <div className="qs-container" style={{ padding: '10px 15px' }}>
        
        {/* Category Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#eaeff2', padding: '6px 15px', border: '1px solid #c8d3df', borderBottom: 'none' }}>
          <div style={{ fontSize: '12px', color: '#7f8c8d' }}><HelpCircle size={14} style={{ verticalAlign: 'middle', marginLeft: '4px' }} /> استخدام شريط التصفية للاطلاع السريع</div>
          <div style={{ fontWeight: 'bold', color: '#2b3e50', fontSize: '14px' }}>عرض سعر</div>
        </div>

        {/* Table Area */}
        <div style={{ overflowX: 'auto', backgroundColor: '#fff', border: '1px solid #c8d3df' }}>
          <table className="rl-table" style={{ width: '100%', minWidth: '1300px' }}>
            <thead>
              <tr>
                <th style={{ width: '40px', textAlign: 'center' }}>م</th>
                <th style={{ width: '60px', textAlign: 'center' }}>الإجراءات</th>
                <th style={{ width: '80px', textAlign: 'center' }}>الرقم</th>
                <th style={{ width: '90px' }}>النوع</th>
                <th style={{ width: '80px' }}>الفئة</th>
                <th>الأخوة</th>
                <th style={{ width: '60px', textAlign: 'center' }}>العملة</th>
                <th style={{ width: '100px', textAlign: 'center' }}>الإجمالي</th>
                <th style={{ width: '80px', textAlign: 'center' }}>التخفيض</th>
                <th style={{ width: '100px', textAlign: 'center' }}>المبلغ المستحق</th>
                <th style={{ width: '90px', textAlign: 'center' }}>مدفوع نقدا</th>
                <th style={{ width: '100px', textAlign: 'center' }}>مدفوع عبر شبكة</th>
                <th style={{ width: '100px', textAlign: 'center' }}>المبلغ الآجل</th>
                <th style={{ width: '90px', textAlign: 'center' }}>عبر شبكة</th>
                <th style={{ width: '110px', textAlign: 'center' }}>الحالة</th>
                <th style={{ width: '95px', textAlign: 'center' }}>التاريخ</th>
                <th style={{ width: '90px', textAlign: 'center' }}>سعر التحويل</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.length === 0 ? (
                <tr>
                  <td colSpan={17} style={{ textAlign: 'center', padding: '30px', color: '#888' }}>
                    لا توجد سجلات عروض أسعار مطابقة لخيارات البحث.
                  </td>
                </tr>
              ) : (
                filteredRecords.map((rec, index) => (
                  <tr key={rec.id} style={{ backgroundColor: index % 2 === 1 ? '#f8fafc' : '#fff' }}>
                    <td style={{ textAlign: 'center', fontWeight: 'bold', color: '#555' }}>{index + 1}</td>
                    <td style={{ textAlign: 'center' }}>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
                        <button
                          onClick={() => setSelectedRecord(rec)}
                          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#3c8dbc', padding: '2px' }}
                          title="عرض تفاصيل الأصناف"
                        >
                          <Eye size={13} />
                        </button>
                        <button
                          onClick={() => alert(`بحث مخصص للمستند رقم ${rec.id}`)}
                          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#7f8c8d', padding: '2px' }}
                          title="استعلام سريع"
                        >
                          <Search size={12} />
                        </button>
                      </div>
                    </td>
                    <td style={{ textAlign: 'center', fontWeight: 'bold', color: '#0b5394' }}>{rec.id}</td>
                    <td>{rec.type}</td>
                    <td>{rec.category}</td>
                    <td style={{ fontWeight: rec.customer ? '600' : 'normal' }}>{rec.customer || '-'}</td>
                    <td style={{ textAlign: 'center', fontWeight: 'bold' }}>{rec.currency}</td>
                    <td style={{ textAlign: 'center', fontWeight: 'bold', color: rec.total ? '#2b3e50' : '#888' }}>
                      {rec.total !== null ? rec.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '-'}
                    </td>
                    <td style={{ textAlign: 'center' }}>{rec.discount}</td>
                    <td style={{ textAlign: 'center', fontWeight: 'bold', color: rec.dueAmount ? '#2b3e50' : '#888' }}>
                      {rec.dueAmount !== null ? rec.dueAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '-'}
                    </td>
                    <td style={{ textAlign: 'center' }}>{rec.paidCash}</td>
                    <td style={{ textAlign: 'center' }}>{rec.paidNetwork}</td>
                    <td style={{ textAlign: 'center' }}>{rec.dueLater}</td>
                    <td style={{ textAlign: 'center' }}>{rec.viaNetwork}</td>
                    <td style={{ textAlign: 'center' }}>
                      <span style={{
                        padding: '2px 8px',
                        borderRadius: '3px',
                        fontSize: '11px',
                        fontWeight: 'bold',
                        backgroundColor: rec.status.includes('الموافقة') ? '#e8f8f5' : '#ebf5fb',
                        color: rec.status.includes('الموافقة') ? '#27ae60' : '#2980b9'
                      }}>
                        {rec.status}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center', color: '#666', fontSize: '12px' }}>{rec.date}</td>
                    <td style={{ textAlign: 'center', color: '#7f8c8d', fontSize: '12px', fontWeight: '600' }}>
                      {rec.exchangeRate !== null ? rec.exchangeRate.toFixed(2) : '-'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* 3. Bottom Tabs (Tabs matched from screenshot) */}
        <div className="qs-tabs-container" style={{ marginTop: '15px' }}>
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

        {/* Tab Detail Pane */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #c8d3df', padding: '15px', borderTop: 'none', minHeight: '60px', fontSize: '13px', color: '#555' }}>
          {activeTab === 'categories' && <div><strong>فئات المستند:</strong> استعراض وجدولة كافة عروض أسعار العملاء المسجلة في قاعدة البيانات.</div>}
          {activeTab === 'waiting' && <div><strong>بإنتظار الموافقة:</strong> يظهر فقط عروض الأسعار التي تحتاج اعتماد أو مراجعة من المشرفين.</div>}
          {activeTab === 'custom-attributes' && <div><strong>سمات مخصصة:</strong> إعدادات وخصائص إضافية مخصصة لمستندات عروض الأسعار.</div>}
          {activeTab === 'drafts' && <div><strong>المسودات:</strong> العروض المحفوظة كمسودة مؤقتة لم تكتمل بعد.</div>}
          {activeTab === 'doc-items' && <div><strong>أصناف المستندات:</strong> عرض تفصيلي لجميع الأصناف المدرجة بالعمليات الجارية.</div>}
          {activeTab === 'doc-items-qty' && <div><strong>أصناف المستندات ( كميات ):</strong> تجميع كميات الأصناف المطلوبة بعروض الأسعار.</div>}
        </div>
      </div>

      {/* 4. Details Preview Modal Overlay */}
      {selectedRecord && (
        <div className="rl-modal-overlay" onClick={() => setSelectedRecord(null)}>
          <div className="rl-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="rl-modal-header" style={{ backgroundColor: '#2b3e50' }}>
              <span>تفاصيل الأصناف - عرض سعر رقم {selectedRecord.id}</span>
              <button 
                onClick={() => setSelectedRecord(null)}
                style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="rl-modal-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                <div><strong>العميل:</strong> {selectedRecord.customer || 'غير محدد'}</div>
                <div><strong>التاريخ:</strong> {selectedRecord.date}</div>
                <div><strong>الحالة:</strong> <span style={{ fontWeight: 'bold', color: selectedRecord.status.includes('الموافقة') ? '#27ae60' : '#2980b9' }}>{selectedRecord.status}</span></div>
                <div><strong>العملة:</strong> {selectedRecord.currency}</div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ margin: '0 0 10px 0', borderBottom: '1px solid #ddd', paddingBottom: '4px' }}>أصناف عرض السعر:</h4>
                {selectedRecord.items.length === 0 ? (
                  <div style={{ padding: '20px', textAlign: 'center', color: '#888', fontStyle: 'italic' }}>لا توجد أصناف في هذا العرض.</div>
                ) : (
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
                      {selectedRecord.items.map((item, index) => (
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
                )}
              </div>

              {selectedRecord.total !== null && (
                <div style={{ backgroundColor: '#f8fafc', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div><strong>إجمالي عرض السعر:</strong></div>
                  <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#2b3e50' }}>{selectedRecord.total.toLocaleString()} {selectedRecord.currency}</div>
                </div>
              )}
            </div>

            <div className="rl-modal-footer">
              <button className="cr-btn cr-btn-cancel" onClick={() => setSelectedRecord(null)}>إغلاق</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
