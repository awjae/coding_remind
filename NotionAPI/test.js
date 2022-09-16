const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: 'secret_flmqJCapXIDKImePOZa5Ms9PCaD5eUZFvmkWTOXTvN1',
});

async function addToDatabase(databaseId, username, name, status, date) {
  try {
      const response = await notion.pages.create({
          parent: {
              database_id: databaseId,
          },
          properties: {
              'ID': {
                  type: 'title',
                  title: [
                  {
                      type: 'text',
                      text: {
                          content: username,
                      },
                  },
                  ],
              },
              'Name' : {
                      type: 'rich_text',
                      rich_text: [
                      {
                          type: 'text',
                          text: {
                              content: name,
                          },
                      }
                      ],
              },
              'Status': {
                  type: 'checkbox',
                  checkbox: status
              },
              'Date': { // Date is formatted as YYYY-MM-DD or null
                  type: 'date',
                  date: date
              },
          }    
      });
      console.log(response);
  } catch (error) {
      console.error(error.body);
  }
}
(async () => {
  // const listUsersResponse = await notion.users.list({})
  // console.log(listUsersResponse)

  addToDatabase('6c986c66edc74730897b4216043f3581', 'davidjones123', 'David Jones', false, null);
})()