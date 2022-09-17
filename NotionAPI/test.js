const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: 'secret_flmqJCapXIDKImePOZa5Ms9PCaD5eUZFvmkWTOXTvN1',
});

// async function addToDatabase(pageId, databaseId, username, name, status, date) {
//   try {
//     //   const response = await notion.pages.create({
//     //       parent: {
//     //           database_id: databaseId,
//     //       },
//     //       properties: {
//     //           'ID': {
//     //               type: 'title',
//     //               title: [
//     //               {
//     //                   type: 'text',
//     //                   text: {
//     //                       content: username,
//     //                   },
//     //               },
//     //               ],
//     //           },
//     //           'Name' : {
//     //                   type: 'rich_text',
//     //                   rich_text: [
//     //                   {
//     //                       type: 'text',
//     //                       text: {
//     //                           content: name,
//     //                       },
//     //                   }
//     //                   ],
//     //           },
//     //           'Status': {
//     //               type: 'checkbox',
//     //               checkbox: status
//     //           },
//     //           'Date': { // Date is formatted as YYYY-MM-DD or null
//     //               type: 'date',
//     //               date: date
//     //           },
//     //       }    
//     //   });
//     //   const response = await notion.databases.query({
//     //     database_id: databaseId
//     //   })
//     const response = await notion.databases.create({
//         parent: {
//             // page_id: pageId,
//             database_id: databaseId,
//         },
//         properties: {
//             'ID': {
//                 type: 'title',
//                 title: [
//                 {
//                     type: 'text',
//                     text: {
//                         content: username,
//                     },
//                 },
//                 ],
//             },
//         }
//     })
//       console.log(response);
//   } catch (error) {
//       console.error(error.body);
//   }
// }
// (async () => {
//   const listUsersResponse = await notion.users.list({})
//   console.log(listUsersResponse)

//   addToDatabase('6c986c66edc74730897b4216043f3581', 'c2cda986ca17411f8f8d6f6360a104a3', 'davidjones123', 'David Jones', false, null);
// })()

// (async () => {
//     const myPage = await notion.databases.query({
//         database_id: "a161826d5f864903a88b3784429621ce",
//         filter: {
//           property: "Landmark",
//           rich_text: {
//             contains: "Bridge",
//           },
//         },
//       })

// })();

// (async () => {
//     const databaseId = 'c2cda986ca17411f8f8d6f6360a104a3';
//     const response = await notion.databases.retrieve({ database_id: databaseId });
//     console.log(response);
//   })();
// (async () => {
//     const blockId = 'c02fc1d3-db8b-45c5-a222-27595b15aea7';
//     const response = await notion.blocks.retrieve({
//       block_id: blockId,
//     });
//     console.log(response);
//   })();

(async () => {
const response = await notion.comments.create({
    "parent": {
    "page_id": "6c986c66edc74730897b4216043f3581"
    },
    "rich_text": [
    {
        "text": {
        "content": "Hello world"
        }
    }
    ]
    });

console.log(response);
})();