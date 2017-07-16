/**
 * Created by SOFTMAN on 16-07-2017.
 */

import * as del from 'del'
import * as Loki from 'lokijs'

const loadCollection = function (colName, db:Loki) : Promise<LokiCollection<any>> {
    return new Promise(resolve => {
        db.loadDatabase({}, () => {
            const _collection = db.getCollection(colName) || db.addCollection(colName)
            resolve(_collection)
        })
    })
};

const imageFilter = function (req, file, callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image files are allowed'), false )

    }
    return callback(null, true);
}

export {loadCollection, imageFilter}