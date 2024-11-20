import type { CodeLog } from "../../types";

const SPACE = import.meta.env.CONTENTFUL_SPACE_ID
const TOKEN = import.meta.env.CONTENTFUL_DELIVERY_TOKEN

const apiCall = async (query: string, variables: Record<string, string> = {}) => {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  }
  return fetch(fetchUrl, options)
}

const getSingleCodeLog = async (id: string): Promise<CodeLog> => {
    const query = `
    query ($id: String!) {
        codeLog(id: $id) {
          title
          date
          tags
          planForTheDay { json }
          learnedToday { json }
          resourcesListCollection {
            items {
              title
              url
            }
          }
          otherResourcesCollection {
            items {
              title
              url
            }
          }
        }
      }
    `;
  const variables = {
    id: id
  };
  const response = await apiCall(query, variables);
  const json = await response.json();
  return json.data.codeLog
}

const getAllCodeLogs = async (): Promise<CodeLog[]> => {
  const query = `
    {
        codeLogCollection {
          items {
            sys { id }
            title
            date
            tags
            planForTheDay { json }
            learnedToday { json }
            resourcesListCollection {
              items {
                title
                url
              }
            }
            otherResourcesCollection {
              items {
                title
                url
              }
            }
          }
        }
      }`;

  try {
    const response = await apiCall(query);
    const json = await response.json()

    return  json.data.codeLogCollection.items;
  } catch (error) {
    console.error(error);
    throw error
  }
}

const getPages = async () => {
  const codeLogs = await getAllCodeLogs();

  return codeLogs.map((codeLog: CodeLog) => {
    const { planForTheDay, title, date, tags, learnedToday, resourcesListCollection, otherResourcesCollection } = codeLog;

    return {
      params: { codeLog: title},
      props: {
        id: codeLog.sys.id,
        date,
        planForTheDay,
        tags,
        title,
        learnedToday,
        resourcesList: resourcesListCollection.items,
        otherResources: otherResourcesCollection.items
      }
    }
  })
}

export const client = { getAllCodeLogs, getSingleCodeLog, getPages }