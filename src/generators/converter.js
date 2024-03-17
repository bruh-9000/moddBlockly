const jsonFile = require('jsonfile')
const axios = require('axios')
const fs = require('fs');


// Colors per category
// 65 for unit
// 120 for trigger
// 160 for text
// 230 for logic
// 260 for player
// 290 for entity
// 330 for other
const colorsMap = {
  unit: 65,
  trigger: 120,
  player: 260,
  entity: 290,
  _: 330,
}

const getType = (frag) => frag?.extraData?.type || frag?.extraData?.dataType || frag?.extraData?.dataTypes || frag?.dataType
const getVarsTypes = (v) => {
  let str = ''
  let names = []
  let types = []
  v.data?.fragments.forEach((frag, index) => {
    if (frag.type === 'variable' && (frag.field !== undefined)) {
      const type = getType(frag)
      const name = frag.field.replaceAll('.', '')
      names.push(name.toLowerCase())
      types.push(type)
      str += `const ${name} = generator.valueToCode(block, '${type}', Order.NONE) || "";\n  `
    }
  })
  str += `return \`${v.key}(${names.length === 0 ? '' : `\$\{${names.join(', ')}\}`})\``
  return { str, names, types }
}
const categorys = {}
axios.get('https://www.modd.io/api/editor-api/?game=two-houses')
  .then((res) => {
    const obj = res.data.message
    let actionsStr = ''
    let actionsDefinitionStr = ''
    Object.values(obj).forEach((v, idx) => {
      const value = v
      let key = value.key
      const category = value.data.category
      if (categorys[category] === undefined) {
        categorys[category] = []
      }

      const types = getVarsTypes(value)
      categorys[category].push({ key: value.key, names: types.names })
      actionsStr +=
        `${key}: (block, generator) => {
  ${types.str}
},\n`;
      const len = Math.max(types.names.length * 2 - 1, 0)
      actionsDefinitionStr +=
        `actionsDefinition.push({
        "type": "${key.toLowerCase()}",
        "message0": "${key} ${new Array(len).fill(0).map((v, idx) => `%${idx + 1}`)}",
        "args0": [
          ${new Array(len).fill(0).map((v, idx) =>
          `${idx % 2 !== 0 ?
            `{
              "type": "input_dummy"
            }`
            :
            `{
              "type": "input_value",
              "name": "${types.names[idx / 2]}",
              "check": "${types.types[idx / 2]}",
            }`
          }`
        )}
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "${value.title}",
        "helpUrl": ""
      });
      `
    })

    fs.writeFile("./src/generators/forblock.js",
      `export const forBlock = {
      ${actionsStr}
      }`, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });

    fs.writeFile("./src/blocks/text.js",
      `/**
* @license
* Copyright 2023 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/

import * as Blockly from 'blockly/core';
// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
const actionsDefinition = []
${actionsDefinitionStr}
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(actionsDefinition)
`,
      function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      });

    fs.writeFile("./src/toolbox.js",
      `/**
      * @license
      * Copyright 2023 Google LLC
      * SPDX-License-Identifier: Apache-2.0
      */
     
     /*
     This toolbox contains nearly every single built-in block that Blockly offers,
     in addition to the custom block 'add_text' this sample app adds.
     You probably don't need every single block, and should consider either rewriting
     your toolbox from scratch, or carefully choosing whether you need each block
     listed here.
     */
     
     export const toolbox = {
       'kind': 'categoryToolbox',
       'contents': [
          ${Object.entries(categorys).map(([k, v]) => {
        return `{
              'kind': 'category',
              'name': '${k.toLowerCase()}',
              'categorystyle': 'procedure_category',
              'contents': [
                ${v.map((v) => `{
                    'kind': 'block',
                    'type': '${v.key.toLowerCase()}',
                }\n`)}
              ]
            }`
      })}
       ],
     };
`,
// 'inputs': {
//   ${v.names.map(parameter => `'${parameter}': {
//     'shadow': {
//       'type': 'text',
//       'fields': {
//         'TEXT': "",
//       },
//     }}`)}
  
// },
      function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      });
  }).catch((e) => {
    console.log(e)
  })
