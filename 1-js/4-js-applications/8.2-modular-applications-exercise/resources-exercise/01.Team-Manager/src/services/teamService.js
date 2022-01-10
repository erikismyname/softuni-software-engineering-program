import { getRequest, postRequest, putRequest, deleteRequest } from '../api/api.js';
import { urls } from '../config/urls.js';
import {approveMembership, joinTeamRequest} from './membersService.js';

async function getAllTeams() {

    const response = await getRequest(urls.teams);

    return response;

}

async function getOneTeam(teamId) {

    const response = await getRequest(urls.teams + `/${teamId}`);

    return response;

}

async function getMyTeams() {

    const userId = sessionStorage.getItem('userId');

    const [ownedTeams, joinedTeams] = await Promise.all([
        getRequest(urls.teams + `?where=_ownerId%3D%22${userId}%22`),
        getRequest(urls.teams + `?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`),
    ]);

    const allTeams = ownedTeams.concat(joinedTeams);

    return allTeams;

}

async function createTeam(teamData) {

    const response = await postRequest(urls.teams, teamData);

    const request = await joinTeamRequest({responseId: response._id});

    await approveMembership(request);

    return response;

}

async function updateTeam(teamId, teamData) {

    const response = await putRequest(urls.teams + `/${teamId}`, teamData);

    return response;

}

async function deleteTeam(teamId) {

    const response = await deleteRequest(urls.teams + `/${teamId}`);

    return response;

}

export {
    getAllTeams,
    getOneTeam,
    getMyTeams,
    createTeam,
    updateTeam,
    deleteTeam,
};