const constants = {};

constants.DATA_DIR = "../data";
constants.RAW_DIR = constants.DATA_DIR + "/raw";
constants.DATASET_DIR = constants.DATA_DIR + "/dataset";
constants.JSON_DIR = constants.DATASET_DIR + "/json";
constants.IMG_DIR = "../ml/data/dataset/img/";
constants.SAMPLES = constants.DATASET_DIR + "/samples.json";
constants.FEATURES = constants.DATASET_DIR + "/features.json";
constants.JS_OBJECT = "../../common/js_objects";
constants.SAMPLES_JS = constants.JS_OBJECT + "/samples.js";
constants.FEATURES_JS = constants.JS_OBJECT + "/features.js";

if (typeof module !== "undefined") {
    module.exports = constants;
}
