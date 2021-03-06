import * as APIUtil from '../util/activity_api_util';

export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES';
export const RECEIVE_MORE_ACTIVITIES = 'RECEIVE_MORE_ACTIVITIES';
export const RECEIVE_ACTIVITY = 'RECEIVE_ACTIVITY';
export const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY';
export const RECEIVE_ACTIVITY_ERRORS = 'RECEIVE_ACTIVITY_ERRORS';
export const REMOVE_ACTIVITY_ERRORS = 'REMOVE_ACTIVITY_ERRORS';

export const receiveActivities = data => ({
    type: RECEIVE_ACTIVITIES,
    data
});

export const receiveMoreActivities = data => ({
    type: RECEIVE_MORE_ACTIVITIES,
    data
})

export const receiveActivity = activity => ({
    type: RECEIVE_ACTIVITY,
    activity
});

export const removeActivity = activityId => ({
    type: REMOVE_ACTIVITY,
    activityId
});

export const receiveErrors = errors => ({
    type: RECEIVE_ACTIVITY_ERRORS,
    errors
});

export const removeErrors = dispatch => {
    dispatch({
        type: REMOVE_ACTIVITY_ERRORS
    });
};

export const fetchActivities = (offset, my_feed) => dispatch => {
    return APIUtil.fetchActivities(offset, my_feed).then(res => (
        dispatch(receiveActivities(res))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
};

export const fetchMoreActivities = (offset, my_feed) => dispatch => {
    return APIUtil.fetchActivities(offset, my_feed).then(res => (
        dispatch(receiveMoreActivities(res))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
};

export const fetchActivity = activityId => dispatch => (
    APIUtil.fetchActivity(activityId).then(res => (
        dispatch(receiveActivity(res))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const createActivity = activity => dispatch => (
    APIUtil.createActivity(activity).then(res => (
        dispatch(receiveActivity(res))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const deleteActivity = activityId => dispatch => (
    APIUtil.deleteActivity(activityId).then(res => (
        dispatch(removeActivity(activityId))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const updateActivity = activity => dispatch => (
    APIUtil.updateActivity(activity).then(res => (
        dispatch(receiveActivity(res))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);
