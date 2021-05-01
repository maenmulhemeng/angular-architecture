
import { AddCustomerComponent } from "../pages/customer-management/add-customer/add-customer.component";
import { AdminCustomerComponent } from "../pages/customer-management/admin-customer/admin-customer.component";
import { EditCustomerComponent } from "../pages/customer-management/edit-customer/edit-customer.component";
import { IndexCustomerComponent } from "../pages/customer-management/index-customer/index-customer.component";
import { ViewCustomerComponent } from "../pages/customer-management/view-customer/view-customer.component";

export const customerRoutes= [
{ path: 'customer/index', component: IndexCustomerComponent },
{ path: 'customer/admin', component: AdminCustomerComponent },
{ path: 'customer/add', component: AddCustomerComponent },
{ path: 'customer/edit/:id', component: EditCustomerComponent },
{ path: 'customer/view/:id', component: ViewCustomerComponent },
{ path: 'customer', component: IndexCustomerComponent },];