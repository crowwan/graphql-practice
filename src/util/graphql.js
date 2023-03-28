import { graphql } from "@octokit/graphql";

export async function test() {
  const { repository } = await graphql(
    `
      {
        viewer {
          login
        }
        repository(owner: "codestates-seb", name: "agora-states-fe") {
          discussions(first: 10) {
            nodes {
              title
              id
              createdAt
              bodyHTML
              author {
                avatarUrl
                ... on User {
                  id
                  email
                }
              }
              answer {
                bodyHTML
              }
            }
          }
        }
      }
    `,
    {
      headers: {
        authorization: `token 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`,
      },
    }
  );

  return repository;
}
