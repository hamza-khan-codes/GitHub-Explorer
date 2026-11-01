
const ROUTES = {
    HOME: "/",

    PROFILE: (username) => `/profile/${username}`,

    REPOSITORIES: (username) => `/profile/${username}/repos`,

    REPOSITORY_DETAILS: (owner, repo) =>
        `/repo/${owner}/${repo}`,

    NOT_FOUND: "*",
};

export default ROUTES;
