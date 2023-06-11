function sortRegister(arr) {
	let register = {};
	for (const line of arr) {
		const tokens = line.split(' ');
		const studentName = tokens[2].slice(0, tokens[2].length - 1);
		const stundentGrade = Number(tokens[4].slice(0, tokens[4].length - 1));
		const graduatedWithAverage = Number(tokens[tokens.length - 1]);

		if (graduatedWithAverage >= 3) {
			if (!register.hasOwnProperty(stundentGrade)) {
				register[stundentGrade] = {
					name: [studentName],
					average: [graduatedWithAverage],
				};
			} else {
				register[stundentGrade].name.push(studentName);
				register[stundentGrade].average.push(graduatedWithAverage);
			}
		}
	}
	for (const grade in register) {
		const student = register[grade]
		console.log(`${Number(grade) + 1} Grade`);
		console.log(`List of students: ${student.name.join(', ')}`);
		const averageNote = student.average.reduce((a,b) => a + b) / student.average.length
		console.log(`Average annual score from last year: ${averageNote.toFixed(2)}`);
		console.log(" ");
	}
}