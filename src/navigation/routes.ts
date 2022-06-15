import Companies from '../pages/companies';
import Fresh from '../pages/fresh';
import Popular from '../pages/popular';
import Company from '../pages/company';
import Subscriptions from '../pages/subscriptions';
import Events from '../pages/events';
import companyMore from '../pages/company/more';

import { INDEX_ROUTE, COMPANIES_ROUTE, EVENTS_ROUTE, FRESH_ROUTE, POPULAR_ROUTE, SUBSCRIPTIONS_ROUTE, COMPANY_ROUTE, MORE_ROUTE } from '../utils/consts/consts';

export const routes = [
  {
    path: INDEX_ROUTE,
    element: Popular,
  },
  {
    path: POPULAR_ROUTE,
    element: Popular,  
  },
  {
    path: FRESH_ROUTE,
    element: Fresh,
  },
  {
    path: COMPANIES_ROUTE,
    element: Companies,
  },
  {
    path: COMPANY_ROUTE,
    element: Company,
    children: [
      {
        element: companyMore,
        path: MORE_ROUTE,
      },
    ],
  },
  {
    path: SUBSCRIPTIONS_ROUTE,
    element: Subscriptions,
  },
  {
    path: EVENTS_ROUTE,
    element: Events,
  }
];
