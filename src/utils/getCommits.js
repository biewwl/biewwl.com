import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: "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",
});

export const getCommits = async (repo) => {
  const commits = await octokit.request(`GET /repos/biewwl/${repo}/commits`, {
    owner: "biewwl",
    repo,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  const commitsData = commits.data;
  const mappedCommits = commitsData.map((commit) => {
    const {
      author: { avatar_url, login, url },
      commit: {
        committer: { date },
        message,
      },
    } = commit;
    return { avatar_url, nick: login, user_url: url, date, message };
  });
  const lastFiveCommits = mappedCommits.splice(0, 10);
  return lastFiveCommits;
};
