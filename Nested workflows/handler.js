const AWS = require('aws-sdk')
const SFN = new AWS.StepFunctions()

module.exports.sqs = async event => {
  console.log(JSON.stringify(event))

  const record = event.Records[0]
  const body = JSON.parse(record.body)

  await SFN.sendTaskSuccess({
    output: "42",
    taskToken: body.Token
  }).promise()
}
