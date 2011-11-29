function(doc, req) {
    if (doc._id === "_design/vacuum") {
        return false;
    } else {
        return true;
    }
}
