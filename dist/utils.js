"use strict";
/**
 * Created by SOFTMAN on 16-07-2017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const loadCollection = function (colName, db) {
    return new Promise(resolve => {
        db.loadDatabase({}, () => {
            const _collection = db.getCollection(colName) || db.addCollection(colName);
            resolve(_collection);
        });
    });
};
exports.loadCollection = loadCollection;
const imageFilter = function (req, file, callback) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image files are allowed'), false);
    }
    return callback(null, true);
};
exports.imageFilter = imageFilter;
//# sourceMappingURL=utils.js.map