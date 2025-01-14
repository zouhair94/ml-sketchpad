const fs = require("fs");
const utils = require("../../common/utils");

const constants = require("../../common/constants");

const fileNames = fs.readdirSync(constants.RAW_DIR);
const samples = [];
let id = 1;
fileNames.forEach((e) => {
    const content = fs.readFileSync(constants.RAW_DIR + "/" + e);
    const { session, student, drawings } = JSON.parse(content);
    for (let label in drawings) {
        samples.push({
            student_name: student,
            student_id: session,
            label,
            id
        });
        fs.writeFileSync(constants.JSON_DIR + "/" + id + ".json", JSON.stringify(drawings[label]))

        utils.formatPercent(id, fileNames.length * 8);

        id++;
    }
});
fs.writeFileSync(constants.SAMPLES, JSON.stringify(samples));


