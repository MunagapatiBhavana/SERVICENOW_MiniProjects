(function transformRow(source, target, map, log, isUpdate) {
    var existing = new GlideRecord('u_student_records');
    existing.addQuery('email', source.email);
    existing.query();
    if (existing.next()) {
        // If email already exists, skip insert
        log.info("Duplicate email found: " + source.email);
        return;
    }

    target.name = source.name;
    target.email = source.email;
    target.phone = source.phone;
    target.course = source.course;
})(source, target, map, log, isUpdate);
