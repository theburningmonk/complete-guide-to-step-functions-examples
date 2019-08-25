const AWS = require('aws-sdk')
const SFN = new AWS.StepFunctions()

module.exports.hello = async event => {
  console.log(JSON.stringify(event))

  await SFN.sendTaskSuccess({
    output: "42",
    taskToken: event.Token
  }).promise()
}
