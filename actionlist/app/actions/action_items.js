import { createAction } from 'redux-actions';
import { TOGGLE_DRAWER, TOGGLE_ITEM, SORT_BY_CREATE_DATE, LAST_UPDATED_SORT_DATE, SORT_PROCESS_TYPE, SORT_ACTION_REQUESTED } from './types';

export const toggleItem = createAction(TOGGLE_ITEM);
export const toggleDrawer = createAction(TOGGLE_DRAWER);
export const sort_by_create_date = createAction(SORT_BY_CREATE_DATE);
export const lastUpdatedSortDate = createAction(LAST_UPDATED_SORT_DATE);
export const sortProcessType = createAction(SORT_PROCESS_TYPE);
export const sortActionRequested = createAction(SORT_ACTION_REQUESTED);

