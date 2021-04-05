import { getUsers, Unfollow, Follow } from './../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'; 
const SET_USERS = 'SET_USERS';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'; 

let initialState = {
    users: [ ],
    pageSize: 20,
    totalUserCount: null,
    currentPage: 1,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                    return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                    return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state, users: action.users
            };
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state, totalUserCount: action.totalCount
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS: 
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    };
}

export let follow = (userId) => {
    return { type: FOLLOW, userId };
}

export let unfollow = (userId) => {
    return {type: UNFOLLOW, userId };
}

export let setUsers = (users) => {
    return {type: SET_USERS, users };
}

export let setProfileStatus = (data) => {
    return {type: SET_PROFILE_STATUS, data};
}

export let setUsersTotalCount = (totalCount) => {
    return {type: SET_USERS_TOTAL_COUNT, totalCount };
}

export let setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage };
}

export let toggleFollowingProgress = (isFetching, userId) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
}

export const getUsersThC = (pageSize, currentPage) => (dispatch) => {
    getUsers(pageSize, currentPage)
            .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
            dispatch(setCurrentPage(currentPage));
        })
}

export const unfollowThC = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    Unfollow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollow(userId))
        }
        dispatch(toggleFollowingProgress(false, userId));
    })
}

export const followThC = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    Follow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(follow(userId))
        }
        dispatch(toggleFollowingProgress(false, userId));
    })
}

export default usersReducer;