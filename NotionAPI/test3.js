
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: 'secret_flmqJCapXIDKImePOZa5Ms9PCaD5eUZFvmkWTOXTvN1' });

// (async () => {
//   const blockId = '8306a2d6a2954aa695f9bbfd6a2d56e3';
//   const response = await notion.blocks.update({
// 	"heading_2": {
// 		"rich_text": [
// 			{
// 				"text": {
// 					"content": "Lacinato kale"
// 				},
// 				"annotations": {
// 					"color": "green"
// 				}
// 			}
// 		]
// 	}
// });
//   console.log(response);
// })();

// (async () => {
//   const blockId = '8306a2d6a2954aa695f9bbfd6a2d56e3';
//   const response = await notion.blocks.children.append({
//     block_id: blockId,
//     children: [
//       {
//         "heading_2": {
//           "rich_text": [
//             {
//               "text": {
//                 "content": "Lacinato kale"
//               }
//             }
//           ]
//         }
//       },
//       {
//         "paragraph": {
//           "rich_text": [
//             {
//               "text": {
//                 "content": "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
//                 "link": {
//                   "url": "https://en.wikipedia.org/wiki/Lacinato_kale"
//                 }
//               }
//             }
//           ]
//         }
//       }
//     ],
//   });
//   console.log(response);
// })();