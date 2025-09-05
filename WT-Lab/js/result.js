
(function () {
  const form = document.getElementById('resForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const m1 = parseInt(form.wt.value || '0', 10);
    const m2 = parseInt(form.cg.value || '0', 10);
    const m3 = parseInt(form.stm.value || '0', 10);
    const total = m1 + m2 + m3;
    const avg = total / 3;

    let result = '', grade = '';
    if (avg >= 70 && m1 >= 40 && m2 >= 40 && m3 >= 40) {
      result = 'Distinction'; grade = 'A+';
    } else if (avg >= 60 && avg < 70 && m1 >= 40 && m2 >= 40 && m3 >= 40) {
      result = 'First class'; grade = 'A';
    } else if (avg >= 50 && avg < 60 && m1 >= 40 && m2 >= 40 && m3 >= 40) {
      result = 'Second class'; grade = 'B';
    } else if (avg >= 40 && avg < 50) {
      result = 'Pass class'; grade = 'C';
    } else {
      result = 'Fail'; grade = 'D';
    }

    form.total.value = total.toString();
    form.average.value = avg.toFixed(2);
    form.result.value = result;
    form.grade.value = grade;
  });
})();
