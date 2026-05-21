import { useState, useEffect } from 'react';
import { Save, Printer, FilePlus, ArrowRight, List, Trash2, Plus } from 'lucide-react';

interface QuotationsNewProps {
  onNavigate: (route: string) => void;
}

interface QuotationItem {
  itemId: string;
  itemName: string;
  unit: string;
  qty: number;
  price: number;
  discountPct: number;
  total: number;
}

const AVAILABLE_PRODUCTS = [
  { id: 'p1', name: 'أرز بسمتي 5كجم', unit: 'كيس', price: 3500 },
  { id: 'p2', name: 'حليب مجفف 900جم', unit: 'علبة', price: 5200 },
  { id: 'p3', name: 'شاي الكبوس 250جم', unit: 'حبة', price: 440 },
  { id: 'p4', name: 'زيت طبخ 1 لتر', unit: 'علبة', price: 1330 },
  { id: 'p5', name: 'سكر السعيد 10كجم', unit: 'كيس', price: 4800 }
];

export default function QuotationsNew({ onNavigate }: QuotationsNewProps) {
  const [docNumber, setDocNumber] = useState('10009');
  const [docDate, setDocDate] = useState('20/05/2026');
  const [customer, setCustomer] = useState('6003 : صالح منصور');
  const [warehouse, setWarehouse] = useState('المخزن الرئيسي');
  const [currency, setCurrency] = useState('ر.ي');
  const [exchangeRate, setExchangeRate] = useState(1.0);
  const [notes, setNotes] = useState('');
  
  // Selected product input states
  const [selectedProductId, setSelectedProductId] = useState(AVAILABLE_PRODUCTS[0].id);
  const [itemQty, setItemQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(AVAILABLE_PRODUCTS[0].price);

  // Cart / Grid items
  const [gridItems, setGridItems] = useState<QuotationItem[]>([
    {
      itemId: 'p1',
      itemName: 'أرز بسمتي 5كجم',
      unit: 'كيس',
      qty: 2,
      price: 3500,
      discountPct: 5,
      total: 6650
    },
    {
      itemId: 'p2',
      itemName: 'حليب مجفف 900جم',
      unit: 'علبة',
      qty: 1,
      price: 5200,
      discountPct: 0,
      total: 5200
    }
  ]);

  // Totals
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [netAmount, setNetAmount] = useState(0);

  // Calculate totals whenever gridItems change
  useEffect(() => {
    let rawTotal = 0;
    let discountSum = 0;

    gridItems.forEach((item) => {
      const lineRaw = item.qty * item.price;
      const lineDiscount = lineRaw * (item.discountPct / 100);
      rawTotal += lineRaw;
      discountSum += lineDiscount;
    });

    setTotalAmount(rawTotal);
    setTotalDiscount(discountSum);
    setNetAmount(rawTotal - discountSum);
  }, [gridItems]);

  // Update unit price when selected product changes
  const handleProductChange = (productId: string) => {
    setSelectedProductId(productId);
    const prod = AVAILABLE_PRODUCTS.find(p => p.id === productId);
    if (prod) {
      setItemPrice(prod.price * (currency === '$' ? 1/exchangeRate : 1));
    }
  };

  // Adjust product price automatically if currency changes
  useEffect(() => {
    if (currency === '$') {
      setExchangeRate(530.0);
      setItemPrice(AVAILABLE_PRODUCTS.find(p => p.id === selectedProductId)?.price ? AVAILABLE_PRODUCTS.find(p => p.id === selectedProductId)!.price / 530.0 : 10.0);
    } else {
      setExchangeRate(1.0);
      setItemPrice(AVAILABLE_PRODUCTS.find(p => p.id === selectedProductId)?.price || 1000);
    }
  }, [currency]);

  // Add Item to Grid
  const handleAddItem = () => {
    const prod = AVAILABLE_PRODUCTS.find(p => p.id === selectedProductId);
    if (!prod) return;

    // Check if product is already in grid
    const existingIndex = gridItems.findIndex(item => item.itemId === selectedProductId);

    if (existingIndex > -1) {
      const updated = [...gridItems];
      updated[existingIndex].qty += itemQty;
      updated[existingIndex].price = itemPrice;
      const lineRaw = updated[existingIndex].qty * updated[existingIndex].price;
      updated[existingIndex].total = lineRaw - (lineRaw * (updated[existingIndex].discountPct / 100));
      setGridItems(updated);
    } else {
      const lineRaw = itemQty * itemPrice;
      const newItem: QuotationItem = {
        itemId: prod.id,
        itemName: prod.name,
        unit: prod.unit,
        qty: itemQty,
        price: itemPrice,
        discountPct: 0,
        total: lineRaw
      };
      setGridItems([...gridItems, newItem]);
    }
    // Reset inputs
    setItemQty(1);
  };

  const handleRemoveItem = (itemId: string) => {
    setGridItems(gridItems.filter(item => item.itemId !== itemId));
  };

  const handleUpdateItemQty = (itemId: string, newQty: number) => {
    if (newQty < 1) return;
    setGridItems(gridItems.map(item => {
      if (item.itemId === itemId) {
        const lineRaw = newQty * item.price;
        return {
          ...item,
          qty: newQty,
          total: lineRaw - (lineRaw * (item.discountPct / 100))
        };
      }
      return item;
    }));
  };

  const handleUpdateItemDiscount = (itemId: string, discountPct: number) => {
    if (discountPct < 0 || discountPct > 100) return;
    setGridItems(gridItems.map(item => {
      if (item.itemId === itemId) {
        const lineRaw = item.qty * item.price;
        return {
          ...item,
          discountPct,
          total: lineRaw - (lineRaw * (discountPct / 100))
        };
      }
      return item;
    }));
  };

  const handleSave = () => {
    if (gridItems.length === 0) {
      alert('الرجاء إضافة أصناف أولاً قبل حفظ المستند.');
      return;
    }
    alert(`تم حفظ عرض السعر رقم ${docNumber} للعميل بنجاح!`);
    // Reset form
    setGridItems([]);
    setNotes('');
    setDocNumber((prev) => (parseInt(prev) + 1).toString());
  };

  return (
    <div className="qs-page">
      {/* 1. Header Actions Toolbar */}
      <div className="qs-toolbar">
        {/* Left utilities */}
        <div className="qs-toolbar-left">
          <button className="qs-btn" onClick={() => onNavigate('dashboard')} title="العودة للوحة التحكم">
            <ArrowRight size={14} style={{ marginLeft: '4px' }} />
            <span>الرئيسية</span>
          </button>
          
          <button className="qs-btn qs-btn-primary" onClick={() => onNavigate('quotations-list')}>
            <List size={14} style={{ marginLeft: '4px' }} />
            <span>عرض القائمة</span>
          </button>
        </div>

        {/* Right action buttons */}
        <div className="qs-toolbar-right">
          <button className="qs-btn" onClick={() => { setGridItems([]); setNotes(''); }} style={{ color: '#e67e22' }}>
            <FilePlus size={14} style={{ marginLeft: '4px' }} />
            <span>عرض جديد</span>
          </button>

          <button className="qs-btn" onClick={() => window.print()}>
            <Printer size={14} style={{ marginLeft: '4px' }} />
            <span>طباعة</span>
          </button>

          <button className="qs-btn" style={{ background: '#27ae60', color: '#fff', borderColor: '#219a52' }} onClick={handleSave}>
            <Save size={14} style={{ marginLeft: '4px' }} />
            <span>حفظ عرض السعر</span>
          </button>
        </div>
      </div>

      {/* 2. Main Form Content Area */}
      <div className="qs-container">
        {/* Heading title */}
        <div style={{ backgroundColor: '#eaeff2', border: '1px solid #c8d3df', borderBottom: 'none', padding: '10px 15px', fontWeight: 'bold', fontSize: '15px', color: '#2b3e50', textAlign: 'center' }}>
          تسجيل مستند عرض سعر جديد
        </div>

        <div style={{ backgroundColor: '#fff', border: '1px solid #c8d3df', padding: '20px', borderRadius: '0 0 4px 4px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          {/* Master Fields Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px 30px', marginBottom: '25px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
            
            {/* Number Field */}
            <div className="qs-field" style={{ justifyContent: 'flex-end' }}>
              <input 
                type="text" 
                className="qs-input" 
                value={docNumber} 
                onChange={(e) => setDocNumber(e.target.value)} 
                style={{ width: '100%', textAlign: 'left', fontWeight: 'bold', color: '#0b5394' }}
              />
              <label className="qs-label">رقم المستند</label>
            </div>

            {/* Date Field */}
            <div className="qs-field" style={{ justifyContent: 'flex-end' }}>
              <input 
                type="text" 
                className="qs-input" 
                value={docDate} 
                onChange={(e) => setDocDate(e.target.value)} 
                style={{ width: '100%', textAlign: 'left' }}
              />
              <label className="qs-label">التاريخ</label>
            </div>

            {/* Customer Selector */}
            <div className="qs-field" style={{ justifyContent: 'flex-end' }}>
              <select 
                className="qs-input" 
                value={customer} 
                onChange={(e) => setCustomer(e.target.value)} 
                style={{ width: '100%', direction: 'rtl' }}
              >
                <option value="6003 : صالح منصور">6003 : صالح منصور</option>
                <option value="6006 : شركة الأفق">6006 : شركة الأفق</option>
                <option value="6007 : أحمد نصر محمد">6007 : أحمد نصر محمد</option>
                <option value="6012 : amma">6012 : amma</option>
                <option value="عميل عام">عميل عام / افتراضي</option>
              </select>
              <label className="qs-label">العميل / الحساب</label>
            </div>

            {/* Warehouse Selector */}
            <div className="qs-field" style={{ justifyContent: 'flex-end' }}>
              <select 
                className="qs-input" 
                value={warehouse} 
                onChange={(e) => setWarehouse(e.target.value)} 
                style={{ width: '100%', direction: 'rtl' }}
              >
                <option value="المخزن الرئيسي">المخزن الرئيسي</option>
                <option value="مخزن المواد الغذائية">مخزن المواد الغذائية</option>
                <option value="مخزن قطع الغيار">مخزن قطع الغيار</option>
              </select>
              <label className="qs-label">المستودع</label>
            </div>

            {/* Currency Selector */}
            <div className="qs-field" style={{ justifyContent: 'flex-end' }}>
              <select 
                className="qs-input" 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)} 
                style={{ width: '100%', direction: 'rtl', backgroundColor: '#fff9e6', fontWeight: 'bold' }}
              >
                <option value="ر.ي">ريال يمني (ر.ي)</option>
                <option value="$">دولار أمريكي ($)</option>
              </select>
              <label className="qs-label">العملة</label>
            </div>

            {/* Exchange Rate */}
            <div className="qs-field" style={{ justifyContent: 'flex-end' }}>
              <input 
                type="number" 
                className="qs-input" 
                value={exchangeRate} 
                onChange={(e) => setExchangeRate(parseFloat(e.target.value) || 1)} 
                style={{ width: '100%', textAlign: 'left' }}
                disabled={currency === 'ر.ي'}
              />
              <label className="qs-label">سعر التحويل</label>
            </div>
          </div>

          {/* Item Insertion Header Bar */}
          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', padding: '12px 15px', borderRadius: '4px', marginBottom: '15px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '15px' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                {/* Select Product */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b' }}>الصنف</span>
                  <select 
                    value={selectedProductId}
                    onChange={(e) => handleProductChange(e.target.value)}
                    style={{ border: '1px solid #cbd5e1', padding: '6px', borderRadius: '4px', width: '220px', direction: 'rtl', outline: 'none' }}
                  >
                    {AVAILABLE_PRODUCTS.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>

                {/* Quantity */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b' }}>الكمية</span>
                  <input 
                    type="number" 
                    value={itemQty}
                    onChange={(e) => setItemQty(parseInt(e.target.value) || 1)}
                    style={{ border: '1px solid #cbd5e1', padding: '5px', borderRadius: '4px', width: '70px', textAlign: 'center', outline: 'none' }}
                    min={1}
                  />
                </div>

                {/* Unit Price */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b' }}>سعر الوحدة ({currency})</span>
                  <input 
                    type="number" 
                    value={itemPrice}
                    onChange={(e) => setItemPrice(parseFloat(e.target.value) || 0)}
                    style={{ border: '1px solid #cbd5e1', padding: '5px', borderRadius: '4px', width: '100px', textAlign: 'left', outline: 'none' }}
                  />
                </div>
              </div>

              {/* Add Button */}
              <div>
                <button 
                  onClick={handleAddItem}
                  style={{ backgroundColor: '#0b5394', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 18px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Plus size={15} />
                  <span>إدراج الصنف</span>
                </button>
              </div>

            </div>
          </div>

          {/* Grid Table of cart items */}
          <div style={{ overflowX: 'auto', marginBottom: '20px' }}>
            <table className="pos-grid-table" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ width: '40px' }}>م</th>
                  <th>اسم الصنف</th>
                  <th style={{ width: '80px', textAlign: 'center' }}>الوحدة</th>
                  <th style={{ width: '100px', textAlign: 'center' }}>الكمية</th>
                  <th style={{ width: '120px', textAlign: 'center' }}>سعر الوحدة</th>
                  <th style={{ width: '90px', textAlign: 'center' }}>الخصم %</th>
                  <th style={{ width: '130px', textAlign: 'center' }}>صافي الإجمالي</th>
                  <th style={{ width: '50px', textAlign: 'center' }}>إلغاء</th>
                </tr>
              </thead>
              <tbody>
                {gridItems.length === 0 ? (
                  <tr>
                    <td colSpan={8} style={{ textAlign: 'center', padding: '30px', color: '#888', fontStyle: 'italic' }}>
                      الرجاء إدراج أصناف لعرض السعر في الجدول أعلاه.
                    </td>
                  </tr>
                ) : (
                  gridItems.map((item, index) => (
                    <tr key={item.itemId}>
                      <td className="pos-grid-id">{index + 1}</td>
                      <td style={{ padding: '8px', fontWeight: '500' }}>{item.itemName}</td>
                      <td style={{ padding: '8px', textAlign: 'center', color: '#555' }}>{item.unit}</td>
                      <td style={{ padding: '5px', textAlign: 'center' }}>
                        <input 
                          type="number" 
                          value={item.qty}
                          onChange={(e) => handleUpdateItemQty(item.itemId, parseInt(e.target.value) || 1)}
                          style={{ width: '70px', textAlign: 'center', padding: '3px', border: '1px solid #cbd5e1', borderRadius: '3px' }}
                          min={1}
                        />
                      </td>
                      <td style={{ padding: '5px', textAlign: 'center' }}>
                        <span style={{ fontWeight: 'bold' }}>{item.price.toFixed(2)}</span>
                      </td>
                      <td style={{ padding: '5px', textAlign: 'center' }}>
                        <input 
                          type="number" 
                          value={item.discountPct}
                          onChange={(e) => handleUpdateItemDiscount(item.itemId, parseInt(e.target.value) || 0)}
                          style={{ width: '55px', textAlign: 'center', padding: '3px', border: '1px solid #cbd5e1', borderRadius: '3px' }}
                          min={0}
                          max={100}
                        />
                      </td>
                      <td style={{ padding: '8px', textAlign: 'center', fontWeight: 'bold', color: '#0b5394' }}>
                        {item.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td style={{ padding: '5px', textAlign: 'center' }}>
                        <button 
                          onClick={() => handleRemoveItem(item.itemId)}
                          style={{ background: 'transparent', border: 'none', color: '#e74c3c', cursor: 'pointer' }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Notes and Footer totals */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px', alignItems: 'flex-start' }}>
            
            {/* Notes */}
            <div style={{ flex: 1, minWidth: '280px' }}>
              <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#2b3e50', display: 'block', marginBottom: '6px' }}>ملاحظات / شروط عرض السعر</span>
              <textarea 
                rows={3}
                placeholder="شروط التوريد، صلاحية العرض، شروط السداد..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{ width: '100%', border: '1px solid #b0c2d4', borderRadius: '4px', padding: '8px', outline: 'none', fontSize: '13px', direction: 'rtl' }}
              />
            </div>

            {/* Financial Summary panel */}
            <div style={{ width: '320px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '8px', fontSize: '13px' }}>
                <span style={{ color: '#64748b' }}>إجمالي الأصناف:</span>
                <span style={{ fontWeight: 'bold' }}>{totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })} {currency}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '8px', fontSize: '13px' }}>
                <span style={{ color: '#64748b' }}>إجمالي الخصم الممنوح:</span>
                <span style={{ fontWeight: 'bold', color: '#e74c3c' }}>{totalDiscount.toLocaleString(undefined, { minimumFractionDigits: 2 })} {currency}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '4px', fontSize: '15px' }}>
                <span style={{ fontWeight: 'bold', color: '#2b3e50' }}>صافي عرض السعر:</span>
                <span style={{ fontWeight: 'bold', color: '#27ae60', fontSize: '17px' }}>{netAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })} {currency}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
