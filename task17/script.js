'use sreict';

class Student {
	constructor(firstName, lastName, birthYear) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthYear = birthYear;
		this.grades = [];
		this.attendance = Array(25).fill(null);
	}

	getAge() {
		const currentYear = new Date().getFullYear();
		return currentYear - this.birthYear;
	}

	getAverageGrade() {
		if (this.grades.length === 0) {
			return 0;
		}
		const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
		return sum / this.grades.length;
	}

	estimate(grade) {
		if (grade >= 0 && grade <= 100) {
			this.grades.push(grade);
			return 'Оцінка додана успішно';
		} else {
			return 'Некоректна оцінка. Введіть число від 0 до 100';
		}
	}

	present() {
		const emptyIndex = this.attendance.indexOf(null);
		if (emptyIndex !== -1) {
			this.attendance[emptyIndex] = true;
		} else {
			console.log('Масив відвідуваності вже заповнений!');
		}
	}

	absent() {
		const emptyIndex = this.attendance.indexOf(null);
		if (emptyIndex !== -1) {
			this.attendance[emptyIndex] = false;
		} else {
			console.log('Масив відвідуваності вже заповнений!');
		}
	}

	summary() {
		const averageGrade = this.getAverageGrade();
		const attendanceRatio =
			this.attendance.filter(isPresent => isPresent === true).length /
			this.attendance.length;

		console.log(
			`Студент: ${this.firstName} ${this.lastName}, Вік: ${this.getAge()} років`
		);
		console.log(`Оцінки: ${this.grades.join(', ')}`);
		console.log(
			`Відвідуваність: ${this.attendance
				.map(p => (p === null ? '-' : p))
				.join(', ')}`
		);

		if (averageGrade > 90 && attendanceRatio > 0.9) {
			return 'Молодець!';
		} else if (averageGrade > 70 || attendanceRatio > 0.7) {
			return 'Добре, але можна краще';
		} else {
			return 'Редиска!';
		}
	}
}

const student1 = new Student('Артур', 'Марценко', 1997);
const student2 = new Student('Олена', 'Янковська', 1999);
const student3 = new Student('Марія', 'Антонюк', 2001);

student1.estimate(95);
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();

student2.estimate(80);
student2.present();
student2.present();
student2.present();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();

student3.estimate(75);
student3.present();
student3.present();
student3.absent();

console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());
