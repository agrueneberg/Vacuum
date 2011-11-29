function (newDoc, savedDoc, userCtx) {
    if (userCtx.roles.indexOf("_admin") !== -1) {
        // Admins can still do whatever they want.
        return true;
    } else {
        throw({
            forbidden: "This database is read-only."
        });
    }
}
