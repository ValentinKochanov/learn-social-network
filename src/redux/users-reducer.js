import { getUsers, Unfollow, Follow } from './../api/api';
import {reset} from 'redux-form';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'; 
const SET_USERS = 'SET_USERS';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'; 
const FIND_USERS = 'FIND_USERS';

let initialState = {
    users: [ ],
    pageSize: 50,
    totalUserCount: null,
    currentPage: 1,
    followingInProgress: [],
    paginatorSize: 20,
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
        case FIND_USERS:
            return {
                ...state,
                users: state.users.filter(u => u.name === action.userName)
            }
        default:
            return state;
    };
}

export const follow = (userId) => {
    return { type: FOLLOW, userId };
};

export const findUsers = (userName) => (dispatch) => {
    dispatch(findUsersName(userName));
    dispatch(reset('search'));
  
};

export const findUsersName = (userName) => {
    return { type: FIND_USERS, userName };
}

export const unfollow = (userId) => {
    return {type: UNFOLLOW, userId };
};

export const setUsers = (users) => {
    return {type: SET_USERS, users };
};

export const setProfileStatus = (data) => {
    return {type: SET_PROFILE_STATUS, data};
};

export const setUsersTotalCount = (totalCount) => {
    return {type: SET_USERS_TOTAL_COUNT, totalCount };
};

export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage };
};

export const toggleFollowingProgress = (isFetching, userId) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
};

export const getUsersThC = (pageSize, currentPage) => (dispatch) => {
    getUsers(pageSize, currentPage)
            .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
            dispatch(setCurrentPage(currentPage));
        });
};

export const unfollowThC = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    Unfollow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollow(userId))
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
};

export const followThC = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    Follow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(follow(userId))
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
};

export default usersReducer;