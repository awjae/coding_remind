process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;


const { Client } = require('@notionhq/client');

const notion = new Client({ auth: 'secret_flmqJCapXIDKImePOZa5Ms9PCaD5eUZFvmkWTOXTvN1' });

const database_id = '59a9190a88014d32b5eca93f8565df7c';

async function getCalendarList() {
  const {results} = await notion.databases.query({
      database_id: database_id
  })
  const calendar = results.map((page) => {
    console.dir(page)
      return {
        id: page.id,
      };
  });
  console.log(calendar);
}

async function createPage() {
  const {results} = await notion.pages.create({
    "parent": { "database_id": "59a9190a88014d32b5eca93f8565df7c" },
    "icon": {
      "emoji": "🥬"
    },
    "properties": {
      "Name": {
        "title": [
          {
            "text": {
              "content": "노드로 페이지 생성"
            }
          }
        ]
      }
    },
    "children": [
      {
        "object": "block",
        "type": "heading_2",
        "heading_2": {
          "rich_text": [{ "type": "text", "text": { "content": "2022-10-25" } }]
        }
      },
          {
        "object": "block",
        "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "노션 회의록 작성해보기",
                              "link": null
                          }
                      }
                  ]
              }
      }
    ]
  })
  return response;
}


// getCalendarList();
createPage();