import { useState } from 'react';
import { Search, Settings, Home, FilePlus, Eye, X, RefreshCw, Printer, LayoutGrid, FileText, Play } from 'lucide-react';
import CustomerOrdersSearch from './CustomerOrdersSearch';

interface CustomerOrdersListProps {
  onNavigate: (route: string) => void;
}

interface CustomerOrderRow {
  id: string;
  currency: string;
  total: number;
  status: string;
  date: string;
  addedBy: string;
  recordDate: string;
  addTime: string;
  customer: string;
  items: Array<{ itemName: string; qty: number; price: number; unit: string }>;
}

const MOCK_RECORDS: CustomerOrderRow[] = [
  {
    id: '10006',
    currency: 'ر.ي',
    total: 100000.00,
    status: 'تمت الموافقة - 2',
    date: '21/2/2026',
    addedBy: 'تجريب المبيعات',
    recordDate: '21/2/2026',
    addTime: '22:41:00',
    customer: '6003 : صالح منصور',
    items: [
      { itemName: 'حليب مجفف 900جم', qty: 10, price: 5200, unit: 'علبة' },
      { itemName: 'أرز بسمتي 5كجم', qty: 10, price: 3500, unit: 'كيس' },
      { itemName: 'سكر السعيد 10كجم', qty: 2, price: 4800, unit: 'كيس' }
    ]
  },
  {
    id: '10005',
    currency: 'ر.ي',
    total: 200000.00,
    status: 'تمت الموافقة - 2',
    date: '21/2/2026',
    addedBy: 'تجريب المبيعات',
    recordDate: '21/2/2026',
    addTime: '22:29:41',
    customer: '6006 : شركة الأفق التجارية',
    items: [
      { itemName: 'حليب مجفف 900جم', qty: 20, price: 5200, unit: 'علبة' },
      { itemName: 'أرز بسمتي 5كجم', qty: 20, price: 3500, unit: 'كيس' },
      { itemName: 'زيت طبخ 1 لتر', qty: 20, price: 1300, unit: 'علبة' }
    ]
  },
  {
    id: '10004',
    currency: 'ر.ي',
    total: 450.00,
    status: 'جديد',
    date: '17/11/2023',
    addedBy: 'نظام تجريب عام',
    recordDate: '17/11/2023',
    addTime: '00:39:56',
    customer: 'عميل عام',
    items: [
      { itemName: 'شاي الكبوس 250جم', qty: 1, price: 450, unit: 'حبة' }
    ]
  },
  {
    id: '10003',
    currency: 'ر.ي',
    total: 33600.00,
    status: 'تمت الموافقة - 2',
    date: '8/6/2023',
    addedBy: 'نظام تجريب عام',
    recordDate: '8/6/2023',
    addTime: '19:26:41',
    customer: 'أحمد نصر محمد',
    items: [
      { itemName: 'أرز بسمتي 5كجم', qty: 8, price: 3500, unit: 'كيس' },
      { itemName: 'شاي الكبوس 250جم', qty: 10, price: 560, unit: 'حبة' }
    ]
  },
  {
    id: '10002',
    currency: 'ر.ي',
    total: 54700.00,
    status: 'جديد',
    date: '1/1/2023',
    addedBy: 'نظام تجريب عام',
    recordDate: '1/1/2023',
    addTime: '01:30:18',
    customer: 'صالح منصور',
    items: [
      { itemName: 'سكر السعيد 10كجم', qty: 10, price: 4800, unit: 'كيس' },
      { itemName: 'زيت طبخ 1 لتر', qty: 5, price: 1340, unit: 'علبة' }
    ]
  },
  {
    id: '10001',
    currency: '$',
    total: 50316.00,
    status: 'جديد',
    date: '6/7/2021',
    addedBy: 'تجريب المبيعات',
    recordDate: '6/7/2021',
    addTime: '20:39:42',
    customer: 'شركة الأفق التجارية',
    items: [
      { itemName: 'أرز بسمتي 5كجم', qty: 10, price: 8, unit: 'كيس' }
    ]
  }
];

export default function CustomerOrdersList({ onNavigate }: CustomerOrdersListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('categories');
  const [selectedRecord, setSelectedRecord] = useState<CustomerOrderRow | null>(null);
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);

  const filteredRecords = MOCK_RECORDS.filter(rec => {
    const matchSearch = rec.id.includes(searchTerm) || rec.customer.includes(searchTerm);
    if (activeTab === 'waiting') {
      return matchSearch && rec.status.includes('الموافقة');
    }
    if (activeTab === 'drafts') {
      return matchSearch && rec.status.includes('مسودة');
    }
    return matchSearch;
  });

  return (
    <div className="qs-page" style={{ direction: 'rtl', height: '100%', overflowY: 'auto' }}>
      
      {/* 1. Header Toolbar */}
      <div className="qs-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Right side toolbar elements (RTL starts here) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="rl-utility-icon" title="الإعدادات" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
            <Settings size={15} />
          </div>
          
          <div className="rl-utility-icon" title="الرئيسية" onClick={() => onNavigate('dashboard')} style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
            <Home size={15} />
          </div>

          <button className="qs-btn qs-btn-primary" onClick={() => setIsAdvancedSearchOpen(true)} style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
            <Search size={13} style={{ marginLeft: '4px' }} />
            <span>بحث متقدم</span>
          </button>

          <button className="qs-btn" onClick={() => onNavigate('customer-orders-new')} style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
            <FilePlus size={13} color="#28a745" style={{ marginLeft: '4px' }} />
            <span>جديد (طلبات العملاء)</span>
          </button>

          <div style={{ height: '18px', width: '1px', backgroundColor: '#cbd5e1', margin: '0 4px' }}></div>

          <div className="rl-utility-icon" title="بيئة العمل" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', color: '#555' }}>
            Eco
          </div>
          <div className="rl-utility-icon" title="طباعة القائمة" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
            <Printer size={15} />
          </div>
        </div>

        {/* Left side quick search input */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
        </div>
      </div>

      {/* 2. Sub-Toolbar with Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#eaeff2', padding: '6px 15px', border: '1px solid #c8d3df', borderBottom: 'none', margin: '15px 15px 0 15px', borderRadius: '4px 4px 0 0' }}>
        {/* Left: Table controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="checkbox" style={{ cursor: 'pointer' }} />
          <Printer size={14} style={{ color: '#555', cursor: 'pointer' }} />
          <RefreshCw size={13} style={{ color: '#555', cursor: 'pointer' }} onClick={() => setSearchTerm('')} />
          <LayoutGrid size={14} style={{ color: '#555', cursor: 'pointer' }} />
        </div>
        {/* Right: Screen title */}
        <div style={{ fontWeight: 'bold', color: '#2b3e50', fontSize: '14px' }}>طلبات العملاء</div>
      </div>

      {/* 3. Main Data Table */}
      <div style={{ margin: '0 15px', backgroundColor: '#fff', border: '1px solid #c8d3df', overflowX: 'auto' }}>
        <table className="rl-table" style={{ width: '100%', minWidth: '1100px' }}>
          <thead>
            <tr style={{ backgroundColor: '#2b3e50', color: '#fff' }}>
              <th style={{ width: '40px', textAlign: 'center', border: '1px solid #cbd5e1' }}>م</th>
              <th style={{ width: '60px', textAlign: 'center', border: '1px solid #cbd5e1' }}>عرض</th>
              <th style={{ width: '100px', border: '1px solid #cbd5e1' }}>الرقم</th>
              <th style={{ width: '80px', border: '1px solid #cbd5e1' }}>العملة</th>
              <th style={{ width: '120px', border: '1px solid #cbd5e1', textAlign: 'left' }}>الإجمالي</th>
              <th style={{ width: '150px', border: '1px solid #cbd5e1' }}>الحالة</th>
              <th style={{ width: '110px', border: '1px solid #cbd5e1' }}>التاريخ</th>
              <th style={{ border: '1px solid #cbd5e1' }}>الإضافة بواسطة</th>
              <th style={{ width: '110px', border: '1px solid #cbd5e1' }}>تاريخ السجل</th>
              <th style={{ width: '100px', border: '1px solid #cbd5e1' }}>وقت الإضافة</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.length === 0 ? (
              <tr>
                <td colSpan={10} style={{ textAlign: 'center', padding: '30px', color: '#888' }}>
                  لا توجد طلبات عملاء مطابقة لخيارات البحث المحددة.
                </td>
              </tr>
            ) : (
              filteredRecords.map((rec, index) => (
                <tr key={rec.id} style={{ backgroundColor: index % 2 === 1 ? '#f8fafc' : '#fff' }}>
                  <td style={{ textAlign: 'center', fontWeight: 'bold', color: '#555' }}>{index + 1}</td>
                  
                  {/* Actions: View and Edit */}
                  <td style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
                      <button
                        onClick={() => setSelectedRecord(rec)}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#3c8dbc', padding: '2px' }}
                        title="تفاصيل السجل"
                      >
                        <Eye size={13} />
                      </button>
                      <button
                        onClick={() => onNavigate('customer-orders-new')}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#28a745', padding: '2px' }}
                        title="تعديل السجل"
                      >
                        <FileText size={12} />
                      </button>
                    </div>
                  </td>

                  {/* Order ID */}
                  <td style={{ fontWeight: 'bold', color: '#0b5394' }}>{rec.id}</td>
                  
                  {/* Currency */}
                  <td style={{ fontWeight: 'bold' }}>{rec.currency}</td>
                  
                  {/* Grand Total */}
                  <td style={{ fontWeight: 'bold', color: '#0f4068', textAlign: 'left', direction: 'ltr' }}>
                    {rec.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  
                  {/* Status */}
                  <td style={{ fontWeight: 'bold', color: rec.status.includes('الموافقة') ? '#27ae60' : '#e67e22' }}>
                    {rec.status}
                  </td>
                  
                  {/* Date */}
                  <td style={{ color: '#555' }}>{rec.date}</td>
                  
                  {/* Added By */}
                  <td>{rec.addedBy}</td>
                  
                  {/* Record Date */}
                  <td>{rec.recordDate}</td>
                  
                  {/* Add Time */}
                  <td style={{ color: '#7f8c8d' }}>{rec.addTime}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 4. Bottom Tab bar (Matching RTL screenshot order) */}
      <div className="qs-tabs-container" style={{ direction: 'rtl', justifyContent: 'flex-start', margin: '15px 15px 0 15px' }}>
        
        {/* Tab 1: فئات المستند (Active) */}
        <div 
          className={`qs-tab ${activeTab === 'categories' ? 'active' : ''}`}
          onClick={() => setActiveTab('categories')}
        >
          <span>فئات المستند</span>
          <span className="qs-blue-square" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#3c8dbc' }}>
            <LayoutGrid size={8} color="#fff" />
          </span>
        </div>

        {/* Tab 2: أصناف المستندات ( كميات ) */}
        <div 
          className={`qs-tab ${activeTab === 'doc-items-qty' ? 'active' : ''}`}
          onClick={() => setActiveTab('doc-items-qty')}
        >
          <span>أصناف المستندات ( كميات )</span>
          <span className="qs-blue-square" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Play size={5} fill="#fff" color="#fff" style={{ transform: 'rotate(180deg)' }} />
          </span>
        </div>

        {/* Tab 3: أصناف المستندات */}
        <div 
          className={`qs-tab ${activeTab === 'doc-items' ? 'active' : ''}`}
          onClick={() => setActiveTab('doc-items')}
        >
          <span>أصناف المستندات</span>
          <span className="qs-blue-square" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Play size={5} fill="#fff" color="#fff" style={{ transform: 'rotate(180deg)' }} />
          </span>
        </div>

        {/* Tab 4: المسودات */}
        <div 
          className={`qs-tab ${activeTab === 'drafts' ? 'active' : ''}`}
          onClick={() => setActiveTab('drafts')}
        >
          <span>المسودات</span>
          <span className="qs-blue-square" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Play size={5} fill="#fff" color="#fff" style={{ transform: 'rotate(180deg)' }} />
          </span>
        </div>

        {/* Tab 5: الإعدادات : سمات مخصصة */}
        <div 
          className={`qs-tab ${activeTab === 'custom-attributes' ? 'active' : ''}`}
          onClick={() => setActiveTab('custom-attributes')}
        >
          <span>الإعدادات : سمات مخصصة</span>
          <span className="qs-blue-square" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Play size={5} fill="#fff" color="#fff" style={{ transform: 'rotate(180deg)' }} />
          </span>
        </div>

        {/* Tab 6: بإنتظار الموافقة */}
        <div 
          className={`qs-tab ${activeTab === 'waiting' ? 'active' : ''}`}
          onClick={() => setActiveTab('waiting')}
        >
          <span>بإنتظار الموافقة</span>
          <span className="qs-blue-square" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Play size={5} fill="#fff" color="#fff" style={{ transform: 'rotate(180deg)' }} />
          </span>
        </div>
      </div>

      {/* Bottom info pane below tabs */}
      <div style={{ backgroundColor: '#fff', border: '1px solid #c8d3df', padding: '15px', borderTop: 'none', margin: '0 15px 30px 15px', fontSize: '12px', color: '#555' }}>
        {activeTab === 'categories' && <div><strong>فئات المستند:</strong> استعراض وجدولة كافة طلبات عملاء المحل المسجلة وتفاصيلها المالية.</div>}
        {activeTab === 'doc-items-qty' && <div><strong>أصناف المستندات (كميات):</strong> تقرير إجمالي كميات الأصناف المطلوبة في طلبات المبيعات الحالية.</div>}
        {activeTab === 'doc-items' && <div><strong>أصناف المستندات:</strong> عرض تفصيلي للأصناف الفردية داخل الطلبات المفتوحة.</div>}
        {activeTab === 'drafts' && <div><strong>المسودات:</strong> طلبات العملاء المسودة المحفوظة مؤقتاً والتي لم يتم ترحيلها بعد.</div>}
        {activeTab === 'custom-attributes' && <div><strong>الإعدادات - سمات مخصصة:</strong> الحقول المخصصة الإضافية التي تم إضافتها لطلب المبيعات.</div>}
        {activeTab === 'waiting' && <div><strong>بانتظار الموافقة:</strong> عرض الطلبات التي تنتظر الاعتماد الإداري أو المالي قبل البدء بالتنفيذ.</div>}
      </div>

      {/* 5. Floating Advanced Search Modal Overlay */}
      {isAdvancedSearchOpen && (
        <CustomerOrdersSearch 
          onNavigate={(route) => {
            setIsAdvancedSearchOpen(false);
            onNavigate(route);
          }} 
          onClose={() => setIsAdvancedSearchOpen(false)} 
        />
      )}

      {/* 6. Details Preview Modal Overlay */}
      {selectedRecord && (
        <div className="rl-modal-overlay" onClick={() => setSelectedRecord(null)}>
          <div className="rl-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="rl-modal-header" style={{ backgroundColor: '#2b3e50' }}>
              <span>عرض تفاصيل طلب العميل رقم {selectedRecord.id}</span>
              <button 
                onClick={() => setSelectedRecord(null)}
                style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="rl-modal-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                <div><strong>العميل:</strong> {selectedRecord.customer}</div>
                <div><strong>التاريخ:</strong> {selectedRecord.date}</div>
                <div><strong>الحالة:</strong> <span style={{ fontWeight: 'bold', color: selectedRecord.status.includes('الموافقة') ? '#27ae60' : '#e67e22' }}>{selectedRecord.status}</span></div>
                <div><strong>العملة:</strong> {selectedRecord.currency}</div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ margin: '0 0 10px 0', borderBottom: '1px solid #ddd', paddingBottom: '4px' }}>أصناف الطلب:</h4>
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
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div><strong>إجمالي طلب العميل:</strong></div>
                <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#2b3e50' }}>{selectedRecord.total.toLocaleString()} {selectedRecord.currency}</div>
              </div>
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
