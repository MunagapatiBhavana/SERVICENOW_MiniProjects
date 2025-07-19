(function executeRule(current, gsn) {

    if (!current.student_id) {
        var prefix = 'STU' + new Date().getFullYear();
        var count = new GlideAggregate('x_993446_student_m_student_registration'); // your student table name
        count.addAggregate('COUNT');
        count.query();
        var nextNumber = 1;
        if (count.next()) {
            nextNumber = parseInt(count.getAggregate('COUNT')) + 1;
        }
        current.student_id = prefix + nextNumber.toString().padStart(4, '0');
    }
})(current, gsn);
