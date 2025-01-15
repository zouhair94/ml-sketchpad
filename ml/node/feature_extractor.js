const constants = require("../../common/constants");
const features = require("../../common/features");

const fs = require("fs");

const samples = JSON.parse(
    fs.readFileSync(constants.SAMPLES)
);


for (let sample of samples) {
    const paths = JSON.parse(
        fs.readFileSync(constants.JSON_DIR + "/" + sample.id + ".json")
    )

    sample.point = [
        features.getPathCount(paths),
        features.getPointCount(paths)
    ];
}

const featureNames = ["Path Count", "Point Count"];

fs.writeFileSync(constants.FEATURES, JSON.stringify({
    featureNames,
    samples: samples.map(e => {
        return ({
            point: e.point,
            label: e.label
        })
    })
}
));


fs.writeFileSync(constants.FEATURES_JS,

    `const features = ${JSON.stringify(
        {
            featureNames,
            samples
        })};`
)