import { AddBankComponent } from "../pages/bank-management/add-bank/add-bank.component";
import { AddCustomerToBankComponent } from "../pages/bank-management/add-customer-to-bank/add-customer-to-bank.component";
import { AdminBankComponent } from "../pages/bank-management/admin-bank/admin-bank.component";
import { EditBankComponent } from "../pages/bank-management/edit-bank/edit-bank.component";
import { IndexBankComponent } from "../pages/bank-management/index-bank/index-bank.component";
import { ViewBankComponent } from "../pages/bank-management/view-bank/view-bank.component";

export const bankRoutes= [
{ path: 'bank/index', component: IndexBankComponent },
{ path: 'bank/admin', component: AdminBankComponent },
{ path: 'bank/add', component: AddBankComponent },
{ path: 'bank/edit/:id', component: EditBankComponent },
{ path: 'bank/view/:id', component: ViewBankComponent },
{ path: 'bank/:id/customer', component: AddCustomerToBankComponent },
{ path: 'bank', component: IndexBankComponent },
];
