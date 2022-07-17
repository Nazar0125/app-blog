import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import { INDEX_ROUTE, COMPANIES_ROUTE, EVENTS_ROUTE, FRESH_ROUTE, POPULAR_ROUTE, 
    SUBSCRIPTIONS_ROUTE, COMPANY_ROUTE, MORE_ROUTE, DETAILS_ROUTE, SUBSCRIBERS_ROUTE, 
    CONTACTS_ROUTE, PROFILE_ROUTE, SETTINGS_ROUTE, MAIN_ROUTE, NOTIFICATIONS_ROUTE,
    DRAFTS_ROUTE, POST_ROUTE, NEW_ROUTE, SAVED_ROUTE } from '../utils/consts/consts';

import More from '../pages/company/more';
import Companies from '../pages/companies/index';
import Fresh from '../pages/fresh';
import Popular from '../pages/popular';
import Company from '../pages/company';
import Subscriptions from '../pages/subscriptions';
import Events from '../pages/events';
import Details from '../pages/company/details';
import SubscribersCompany from '../pages/company/subscribers';
import ContactsCompany from '../pages/company/сontacts';
import Profile from '../pages/profile';

import ProfileSettings from '../pages/settings/profile';
import Settings from '../pages/settings';
import Main from '../pages/settings/main';
import Notifications from '../pages/settings/notifications';
import Drafts from '../pages/profile/drafts';
import SubsCompany from '../pages/subscriptions/company';
import Post from '../pages/post';
import Webinar from '../pages/webinar';
import CreateEvents from '../pages/events/create';
import NewPost from '../pages/post/new';
import Saved from '../pages/saved';
import UserPg from '../pages/user';

export const RouterConfig = () => {
    return (
        <Routes>
            <Route path = {INDEX_ROUTE} element = {<Popular />} />
            <Route path = {POPULAR_ROUTE} element = {<Popular />} />
            <Route path = {COMPANIES_ROUTE} element = {<Companies />} />

            <Route path = {EVENTS_ROUTE} element = {<Events />} />
            <Route path = {`${EVENTS_ROUTE}/:id`} element = {<Webinar />} />
            <Route path = {EVENTS_ROUTE+NEW_ROUTE} element = {<CreateEvents />} />
            
            <Route path = {FRESH_ROUTE} element = {<Fresh />} />
            <Route path = {COMPANY_ROUTE} element = {<Company />}/>
            <Route path = {COMPANY_ROUTE+DETAILS_ROUTE} element = {<Details />}/>
            <Route path={COMPANY_ROUTE+DETAILS_ROUTE+MORE_ROUTE} element={<More />} />
            <Route path={COMPANY_ROUTE+DETAILS_ROUTE+SUBSCRIBERS_ROUTE} element={<SubscribersCompany />} />
            <Route path={COMPANY_ROUTE+DETAILS_ROUTE+CONTACTS_ROUTE} element={<SubscribersCompany />} />

            <Route path={SUBSCRIPTIONS_ROUTE} element={<Subscriptions />} />
            <Route path={SUBSCRIPTIONS_ROUTE+COMPANY_ROUTE} element={<SubsCompany />} />
            
            <Route path={PROFILE_ROUTE} element={<Profile />} />
            <Route path={PROFILE_ROUTE+DRAFTS_ROUTE} element={<Drafts />} />
            <Route path={`${PROFILE_ROUTE}/:id`} element={<UserPg />} />


            <Route path={SETTINGS_ROUTE} element={<Settings />} />
            <Route path={SETTINGS_ROUTE+MAIN_ROUTE} element={<Main />} />
            <Route path={SETTINGS_ROUTE+PROFILE_ROUTE} element={<ProfileSettings />} />
            <Route path={SETTINGS_ROUTE+NOTIFICATIONS_ROUTE} element={<Notifications />} />
            
            <Route path = {POST_ROUTE+NEW_ROUTE} element={<NewPost />} />
            <Route path = {`${POST_ROUTE}/:id`} element={<Post />} />

            <Route path = {`${SAVED_ROUTE}`} element={<Saved />} />

        </Routes>
    );
}