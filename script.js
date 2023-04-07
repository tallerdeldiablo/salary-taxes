function calculateSalary() {
	// Get input values
	const hoursPerWeek = parseFloat(document.getElementById("hoursPerWeek").value);
	const hourlyRate = parseFloat(document.getElementById("hourlyRate").value);
	const discountPercent = parseFloat(document.getElementById("discountPercent").value);

	// Calculate salaries
	const monthlySalary = (hoursPerWeek * hourlyRate * 4).toFixed(2);
	const yearlySalary = (hoursPerWeek * hourlyRate * 52).toFixed(2);
	const discountedYearlySalary = ((1 - (discountPercent / 100)) * yearlySalary).toFixed(2);

	// Set output values
	document.getElementById("monthlySalary").value = monthlySalary;
	document.getElementById("yearlySalary").value = yearlySalary;
	document.getElementById("discountedYearlySalary").value = discountedYearlySalary;
}
