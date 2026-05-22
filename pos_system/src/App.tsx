import { useState } from 'react';
import { Settings, LogOut, User, MessageSquare, ChevronLeft, BookOpen, BarChart2, List, UserPlus, Search, LayoutGrid, DollarSign, FileText, CornerDownLeft, FilePlus, Inbox, MinusSquare, FileQuestion, Box, RefreshCw } from 'lucide-react';
import Dashboard from './Dashboard';
import POS from './POS';
import SalesInvoices from './SalesInvoices';
import CashReturn from './CashReturn';
import ReturnsList from './ReturnsList';
import QuotationsSearch from './QuotationsSearch';
import QuotationsList from './QuotationsList';
import QuotationsNew from './QuotationsNew';
import QuotationsBrowse from './QuotationsBrowse';
import CustomerOrdersSearch from './CustomerOrdersSearch';
import CustomerOrdersNew from './CustomerOrdersNew';
import CustomerOrdersList from './CustomerOrdersList';
import CustomersSearch from './CustomersSearch';
import CustomersList from './CustomersList';
import CustomersBrowse from './CustomersBrowse';
import ReceiptVoucherNew from './ReceiptVoucherNew';
import ItemsSearch from './ItemsSearch';
import ItemsMain from './ItemsMain';
import ItemsList from './ItemsList';
import ItemsBrowse from './ItemsBrowse';
import ItemsServices from './ItemsServices';
import ItemsCostChange from './ItemsCostChange';
import InventoryIssueSearch from './InventoryIssueSearch';
import InventoryIssueNew from './InventoryIssueNew';
import InventoryIssueList from './InventoryIssueList';
import InventoryIssueBrowse from './InventoryIssueBrowse';
import InventorySupplyMain from './InventorySupplyMain';
import InventorySupplyNew from './InventorySupplyNew';
import InventorySupplySearch from './InventorySupplySearch';
import InventorySupplyList from './InventorySupplyList';
import InventorySupplyBrowse from './InventorySupplyBrowse';
import InventoryTransferMain from './InventoryTransferMain';
import InventoryTransferNew from './InventoryTransferNew';
import InventoryTransferSearch from './InventoryTransferSearch';
import InventoryTransferList from './InventoryTransferList';

export default function App() {
  const [activeRoute, setActiveRoute] = useState('dashboard');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      {/* Top Navbar (RemoX exact clone) */}
      <header className="remox-navbar">
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <div style={{ color: '#f39c12', fontWeight: 'bold', fontSize: '18px', padding: '0 15px', cursor: 'pointer' }} onClick={() => setActiveRoute('dashboard')}>
            RemoX.net 🏠
          </div>
          <ul className="remox-menu">
            <li className={(activeRoute === 'pos' || activeRoute === 'sales-invoices') ? 'active' : ''}>
              المبيعات
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('dashboard'); }}><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> تهيئة النظام</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">تهيئة النظام</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>الإعدادات</span><Settings size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>المناطق التجارية</span><List size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('customers-main'); }}><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> العملاء</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">العملاء</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><UserPlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('customers-search'); }}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('customers-list'); }}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('customers-browse'); }}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('receipt-voucher-new'); }}><span style={{ marginLeft: '10px' }}>استلام مبلغ من عميل</span><ChevronLeft size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>أرصدة العملاء</span><DollarSign size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('customers-other-ops'); }}><span style={{ marginLeft: '10px' }}>عمليات أخرى</span><ChevronLeft size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> المندوبين</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">المندوبين</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><UserPlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>صرف مبلغ لمندوب</span><ChevronLeft size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>الأرصدة</span><DollarSign size={14} color="#28a745" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> الموظفين</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">الموظفين</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><UserPlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>الأرصدة</span><DollarSign size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>العمليات المالية</span><BarChart2 size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="dropdown-section-title">العمليات</div>
                <ul>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('sales-invoices'); }}><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> فواتير المبيعات</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">فواتير المبيعات</div>
                      <ul>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('pos'); }}><span style={{ marginLeft: '10px' }}>فاتورة مبيعات نقدية</span><FileText size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('pos'); }}><span style={{ marginLeft: '10px' }}>فاتورة مبيعات آجلة</span><FileText size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('pos'); }}><span style={{ marginLeft: '10px' }}>فاتورة مبيعات - كاشير</span><FileText size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('sales-invoices'); }}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('sales-invoices'); }}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('sales-invoices'); }}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('sales-invoices-return'); }}><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> مرتجع المبيعات</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">مرتجع المبيعات</div>
                      <ul>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('sales-invoices-return'); }}><span style={{ marginLeft: '10px' }}>مرتجع المبيعات / فاتورة مبيعات</span><CornerDownLeft size={14} color="#dc3545" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('cash-return'); }}><span style={{ marginLeft: '10px' }}>مرتجع المبيعات النقدية / بدون فاتورة</span><CornerDownLeft size={14} color="#dc3545" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('returns-list'); }}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('quotations-search'); }}><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> عروض الأسعار</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">عروض الأسعار</div>
                      <ul>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('quotations-new'); }}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('quotations-search'); }}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('quotations-list'); }}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('quotations-browse'); }}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض سعر - كاشير</span><FileText size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('customer-orders-list'); }}><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> طلبات العملاء</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">طلبات العملاء</div>
                      <ul>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('customer-orders-new'); }}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('customer-orders-search'); }}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('customer-orders-list'); }}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('customer-orders-list'); }}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('pos'); }}><span style={{ marginLeft: '10px' }}>طلب مبيعات - كاشير</span><FileText size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div style={{ borderBottom: '1px solid #bce8f1', margin: '5px 15px' }}></div>
                <ul>
                  <li><a href="#"><BookOpen size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> تقارير المبيعات</a></li>
                </ul>
              </div>
            </li>
            
            <li>
              المخزون
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> تهيئة النظام</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">تهيئة النظام</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>الإعدادات</span><Settings size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>المجموعات المخزنية المالية</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>المخازن</span><Inbox size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>مواقع التخزين/الرفوف</span><LayoutGrid size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>المخازن الفرعية</span><Inbox size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>وحدات القياس</span><Settings size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>مجموعات الأصناف</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>المجموعات الفرعية</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>أشكال الأصناف</span><LayoutGrid size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>الشركات المصنعة</span><Settings size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>وكلاء الأصناف</span><Settings size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>باقات الاصناف</span><Box size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('items-main'); }}><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> الأصناف</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">الأصناف</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('items-search'); }}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('items-list'); }}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('items-browse'); }}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('items-services'); }}><span style={{ marginLeft: '10px' }}>الخدمات</span><Settings size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>تعديل أسعار بيع الأصناف</span><Settings size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('items-cost-change'); }}><span style={{ marginLeft: '10px' }}>تغيير كلفة الأصناف</span><Settings size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="dropdown-section-title">العمليات</div>
                <ul>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> أوامر الصرف المخزني</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">أوامر الصرف المخزني</div>
                      <ul>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('inventory-issue-new'); }}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('inventory-issue-search'); }}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('inventory-issue-list'); }}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('inventory-issue-browse'); }}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> أوامر التوريد المخزني</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">أوامر التوريد المخزني</div>
                      <ul>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('inventory-supply-main'); }}><span style={{ marginLeft: '10px' }}>الرئيسية</span><LayoutGrid size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('inventory-supply-new'); }}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('inventory-supply-search'); }}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('inventory-supply-list'); }}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('inventory-supply-browse'); }}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> أمر تحويل بضاعة إلى مخزن آخر</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">أمر تحويل بضاعة</div>
                      <ul>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('inventory-transfer-main'); }}><span style={{ marginLeft: '10px' }}>الرئيسية</span><LayoutGrid size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('inventory-transfer-new'); }}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('inventory-transfer-search'); }}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('inventory-transfer-list'); }}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div style={{ borderBottom: '1px solid #bce8f1', margin: '5px 15px' }}></div>
                <ul>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> المخزون الإفتتاحي</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">المخزون الإفتتاحي</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> جرد وتسوية المخزون</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">جرد وتسوية المخزون</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جرد المخزون</span><RefreshCw size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جرد المخزون - بسيط</span><RefreshCw size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>تصفير المخزون</span><MinusSquare size={14} color="#dc3545" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('items-cost-change'); }}><span style={{ marginLeft: '10px' }}>تسوية كلفة المخزون</span><RefreshCw size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> الإنتاج</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">الإنتاج</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>أوامر الإنتاج</span><Box size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>صرف مواد خام للإنتاج</span><MinusSquare size={14} color="#dc3545" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>تقييد كميات الإنتاج الجاهز</span><FilePlus size={14} color="#28a745" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> أخرى</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">أخرى</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>توريد مرتجع الصرف المخزني</span><CornerDownLeft size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>توريد مرتجع البضاعة المباعة</span><CornerDownLeft size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>أمر تركيب أصناف</span><Settings size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>أمر تفكيك أصناف</span><Settings size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>أوامر الشغل</span><Box size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>أوامر التحميل</span><Inbox size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div style={{ borderBottom: '1px solid #bce8f1', margin: '5px 15px' }}></div>
                <ul>
                  <li><a href="#"><BookOpen size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> تقارير المخزون</a></li>
                </ul>
              </div>
            </li>

            <li>
              الحسابات
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> تهيئة النظام</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">تهيئة النظام</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>الإعدادات</span><Settings size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>أنواع القيود</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>الفترات المحاسبية</span><LayoutGrid size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> البيانات الأساسية</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">البيانات الأساسية</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>العملات</span><DollarSign size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>أسعار الصرف</span><DollarSign size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>الصناديق</span><Inbox size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>البنوك</span><Inbox size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="#"><BarChart2 size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> دليل الحسابات</a></li>
                  <li><a href="#"><LayoutGrid size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> دليل المراكز</a></li>
                </ul>
                <div className="dropdown-section-title">العمليات</div>
                <ul>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> سندات القبض</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">سندات القبض</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> سندات الصرف</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">سندات الصرف</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> قيود اليومية</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">قيود اليومية</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> الإشعارات</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">الإشعارات</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إشعار دائن</span><CornerDownLeft size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إشعار مدين</span><CornerDownLeft size={14} color="#dc3545" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> عمليات مالية مبسطة</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">عمليات مبسطة</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>استلام مبلغ من عميل</span><ChevronLeft size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>تسديد مبلغ لمورد</span><ChevronLeft size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>صرف مبلغ لمندوب</span><ChevronLeft size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>تقييد المصروفات</span><MinusSquare size={14} color="#dc3545" /></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div style={{ borderBottom: '1px solid #bce8f1', margin: '5px 15px' }}></div>
                <ul>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> خطابات الضمان</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">خطابات الضمان</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> الإعتمادات المستندية</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">الإعتمادات المستندية</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> الموازنة التقديرية</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">الموازنة التقديرية</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div style={{ borderBottom: '1px solid #bce8f1', margin: '5px 15px' }}></div>
                <ul>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> المراجعة و الترحيل</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">المراجعة و الترحيل</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>مراجعة العمليات</span><Settings size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>ترحيل العمليات</span><BarChart2 size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إلغاء ترحيل العمليات</span><RefreshCw size={14} color="#dc3545" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> المطابقة والتسوية</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">المطابقة والتسوية</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>مطابقة وتسوية حساب بنكي</span><RefreshCw size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>مطابقة حساب عميل</span><RefreshCw size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>مطابقة حساب مورد</span><RefreshCw size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="#"><Settings size={14} color="#6c757d" style={{marginLeft: '5px'}} /> خطوات إغلاق الفترة المحاسبية</a></li>
                </ul>
                <div style={{ borderBottom: '1px solid #bce8f1', margin: '5px 15px' }}></div>
                <ul>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> التقارير المالية</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">التقارير المالية</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>كشف حساب</span><BookOpen size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>ميزان المراجعة</span><BarChart2 size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>الأرباح والخسائر</span><BarChart2 size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>الميزانية العمومية</span><BarChart2 size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="#"><LayoutGrid size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> مصمم التقارير المالية</a></li>
                </ul>
              </div>
            </li>

            <li>
              المشتريات
              <div className="dropdown-menu">
                <ul>
                  <li><a href="#"><Settings size={14} color="#6c757d" style={{marginLeft: '5px'}} /> الإعدادات</a></li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> الموردين</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">الموردين</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><UserPlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>تسديد مبلغ لمورد</span><ChevronLeft size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>أرصدة الموردين</span><DollarSign size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عمليات أخرى</span><ChevronLeft size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="dropdown-section-title">المشتريات المحلية</div>
                <ul>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> فواتير المشتريات</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">فواتير المشتريات</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> مرتجع المشتريات</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">مرتجع المشتريات</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>مرتجع المشتريات النقدية / بدون فاتورة</span><CornerDownLeft size={14} color="#dc3545" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="dropdown-section-title">إدارة المشتريات</div>
                <ul>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> طلبات الشراء</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">طلبات الشراء</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> عروض أسعار الموردين</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">عروض أسعار الموردين</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>طلبات عروض الأسعار - RFQ's</span><FileQuestion size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عروض أسعار الموردين</span><FileText size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> أوامر الشراء</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">أوامر الشراء</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> إتفاقيات المشتريات</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">إتفاقيات المشتريات</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="#"><BarChart2 size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> فواتير المشتريات الخارجية</a></li>
                  <li><a href="#"><BarChart2 size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> أمر التوريد المخزني - المشتريات</a></li>
                  <li><a href="#"><BarChart2 size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> إستلام خدمة</a></li>
                  <li><a href="#"><BarChart2 size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> فواتير الموردين</a></li>
                  <li><a href="#"><BarChart2 size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> متابعة المشتريات</a></li>
                </ul>
                <div style={{ borderBottom: '1px solid #bce8f1', margin: '5px 15px' }}></div>
                <ul>
                  <li><a href="#"><BookOpen size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> التقارير</a></li>
                </ul>
              </div>
            </li>

            <li>
              نقاط البيع
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> تهيئة النظام</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">تهيئة النظام</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>الإعدادات</span><Settings size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>الصناديق</span><Inbox size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> العملاء</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">العملاء</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><UserPlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>استلام مبلغ من عميل</span><ChevronLeft size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>أرصدة العملاء</span><DollarSign size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عمليات أخرى</span><ChevronLeft size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> الموردين</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">الموردين</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><UserPlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>تسديد مبلغ لمورد</span><ChevronLeft size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>أرصدة الموردين</span><DollarSign size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عمليات أخرى</span><ChevronLeft size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> الموظفين</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">الموظفين</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><UserPlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>الأرصدة</span><DollarSign size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>العمليات المالية</span><BarChart2 size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="dropdown-section-title">العمليات</div>
                <ul>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('pos'); }}><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> فاتورة مبيعات</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">فاتورة مبيعات</div>
                      <ul>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('pos'); }}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>فاتورة مبيعات - كاشير</span><FileText size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>فاتورة مبيعات أولية</span><FileText size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>الفواتير الغير مدفوعة</span><List size={14} color="#dc3545" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> فاتورة مشتريات</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">فاتورة مشتريات</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>جديد</span><FilePlus size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>بحث</span><Search size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>إستعراض</span><LayoutGrid size={14} color="#6c757d" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('sales-invoices-return'); }}><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> مرتجع/مردود</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">مرتجع/مردود</div>
                      <ul>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('sales-invoices-return'); }}><span style={{ marginLeft: '10px' }}>مرتجع المبيعات</span><CornerDownLeft size={14} color="#dc3545" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('cash-return'); }}><span style={{ marginLeft: '10px' }}>مرتجع المبيعات النقدية</span><CornerDownLeft size={14} color="#dc3545" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>مرتجع المشتريات</span><CornerDownLeft size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>مرتجع المشتريات النقدية</span><CornerDownLeft size={14} color="#28a745" /></a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveRoute('returns-list'); }}><span style={{ marginLeft: '10px' }}>عرض القائمة</span><List size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#"><ChevronLeft size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> المصروفات</a>
                    <div className="dropdown-submenu-top">
                      <div className="dropdown-section-title">المصروفات</div>
                      <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>تقييد المصروفات</span><MinusSquare size={14} color="#dc3545" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>أنواع المصروفات</span><List size={14} color="#6c757d" /></a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}><span style={{ marginLeft: '10px' }}>سندات الصرف</span><FileText size={14} color="#3c8dbc" /></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div style={{ borderBottom: '1px solid #bce8f1', margin: '5px 15px' }}></div>
                <ul>
                  <li><a href="#"><BookOpen size={14} color="#3c8dbc" style={{marginLeft: '5px'}} /> تقارير المبيعات</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ fontSize: '12px', color: '#ccc' }}>1129 : تجريب المبيعات</div>
          <MessageSquare size={16} />
          <User size={16} />
          <Settings size={16} />
          <LogOut size={16} color="#e74c3c" />
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
        {activeRoute === 'dashboard' && <Dashboard onNavigate={setActiveRoute} />}
        {activeRoute === 'pos' && <POS />}
        {activeRoute === 'sales-invoices' && <SalesInvoices onNavigate={setActiveRoute} isReturnMode={false} />}
        {activeRoute === 'sales-invoices-return' && <SalesInvoices onNavigate={setActiveRoute} isReturnMode={true} />}
        {activeRoute === 'cash-return' && <CashReturn onNavigate={setActiveRoute} />}
        {activeRoute === 'returns-list' && <ReturnsList onNavigate={setActiveRoute} />}
        {activeRoute === 'quotations-search' && <QuotationsSearch onNavigate={setActiveRoute} />}
        {activeRoute === 'quotations-list' && <QuotationsList onNavigate={setActiveRoute} />}
        {activeRoute === 'quotations-new' && <QuotationsNew onNavigate={setActiveRoute} />}
        {activeRoute === 'quotations-browse' && <QuotationsBrowse onNavigate={setActiveRoute} />}
        {activeRoute === 'customers-list' && <CustomersList onNavigate={setActiveRoute} isListView={true} />}
        {activeRoute === 'customers-main' && <CustomersList onNavigate={setActiveRoute} isListView={false} />}
        {activeRoute === 'customers-browse' && <CustomersBrowse onNavigate={setActiveRoute} />}
        {activeRoute === 'customer-orders-list' && <CustomerOrdersList onNavigate={setActiveRoute} />}
        {activeRoute === 'customer-orders-search' && (
          <>
            <Dashboard onNavigate={setActiveRoute} />
            <CustomerOrdersSearch onNavigate={setActiveRoute} />
          </>
        )}
        {activeRoute === 'customers-search' && (
          <>
            <Dashboard onNavigate={setActiveRoute} />
            <CustomersSearch onNavigate={setActiveRoute} />
          </>
        )}
        {activeRoute === 'receipt-voucher-new' && (
          <>
            <Dashboard onNavigate={setActiveRoute} />
            <ReceiptVoucherNew onClose={() => setActiveRoute('dashboard')} />
          </>
        )}
        {activeRoute === 'customers-other-ops' && <CustomersOtherOps onNavigate={setActiveRoute} />}
        {activeRoute === 'customer-orders-new' && <CustomerOrdersNew onNavigate={setActiveRoute} />}
        {activeRoute === 'items-search' && <ItemsSearch onNavigate={setActiveRoute} />}
        {activeRoute === 'items-main' && <ItemsMain onNavigate={setActiveRoute} />}
        {activeRoute === 'items-list' && <ItemsList onNavigate={setActiveRoute} />}
        {activeRoute === 'items-browse' && <ItemsBrowse onNavigate={setActiveRoute} />}
        {activeRoute === 'items-services' && <ItemsServices onNavigate={setActiveRoute} />}
        {activeRoute === 'items-cost-change' && <ItemsCostChange onNavigate={setActiveRoute} />}
        {activeRoute === 'inventory-issue-search' && <InventoryIssueSearch onNavigate={setActiveRoute} />}
        {activeRoute === 'inventory-issue-new' && <InventoryIssueNew onNavigate={setActiveRoute} />}
        {activeRoute === 'inventory-issue-list' && <InventoryIssueList onNavigate={setActiveRoute} />}
        {activeRoute === 'inventory-issue-browse' && <InventoryIssueBrowse onNavigate={setActiveRoute} />}
        {activeRoute === 'inventory-supply-main' && <InventorySupplyMain onNavigate={setActiveRoute} />}
        {activeRoute === 'inventory-supply-new' && <InventorySupplyNew onNavigate={setActiveRoute} />}
        {activeRoute === 'inventory-supply-search' && <InventorySupplySearch onNavigate={setActiveRoute} onClose={() => setActiveRoute('inventory-supply-main')} />}
        {activeRoute === 'inventory-supply-list' && <InventorySupplyList onNavigate={setActiveRoute} />}
        {activeRoute === 'inventory-supply-browse' && <InventorySupplyBrowse onNavigate={setActiveRoute} />}
        {activeRoute === 'inventory-transfer-main' && <InventoryTransferMain onNavigate={setActiveRoute} />}
        {activeRoute === 'inventory-transfer-new' && <InventoryTransferNew onNavigate={setActiveRoute} />}
        {activeRoute === 'inventory-transfer-search' && <InventoryTransferSearch onNavigate={setActiveRoute} onClose={() => setActiveRoute('inventory-transfer-main')} />}
        {activeRoute === 'inventory-transfer-list' && <InventoryTransferList onNavigate={setActiveRoute} />}
      </main>
    </div>
  );
}
