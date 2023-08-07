export const getCommits = async (repo) => {
  const response = await fetch(
    `https://api.github.com/repos/biewwl/${repo}/commits?owner=biewwl&repo=${repo}`
  );
  const commits = await response.json();
  if (response.status !== 200) return [];
  const mappedCommits = commits.map((commit) => {
    const {
      author: { avatar_url, login, url },
      commit: {
        committer: { date },
        message,
      },
    } = commit;
    return { avatar_url, nick: login, user_url: url, date, message };
  });
  const lastFiveCommits = mappedCommits.splice(0, 5);
  return lastFiveCommits;
};
