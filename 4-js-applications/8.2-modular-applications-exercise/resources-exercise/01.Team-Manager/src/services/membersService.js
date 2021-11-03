import { urls } from '../config/urls.js';
import { getRequest, postRequest, putRequest, deleteRequest } from '../api/api.js';

async function getAllMembers(teamsIds) {

    const queryString = encodeURIComponent(`teamId IN ("${teamsIds.join('", "')}") AND status="member"`);

    const response = await getRequest(urls.members + `?where=${queryString}`);

    return response;

}

async function joinTeamRequest(teamData) {

    const response = await postRequest(urls.members, teamData);

    return response;

}

async function cancelMembership(requestId) {

    const response = await deleteRequest(urls.members + `/${requestId}`);

    return response;

}

async function getRequestsByTeamId(teamId) {

    const response = await getRequest(urls.members + `?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`);

    return response;

}

async function approveMembership(request) {

    const body = {
        teamId: request.teamId,
        status: 'member',
    };

    const response = await putRequest(urls.members + `/${request._id}`, body);

    return response;

}

export {
    getAllMembers,
    joinTeamRequest,
    getRequestsByTeamId,
    cancelMembership,
    approveMembership,
};