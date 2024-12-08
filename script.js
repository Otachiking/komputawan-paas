function calculate() {
  const radius = document.getElementById("radius").value;
  if (!radius || radius <= 0) {
    alert("Please enter a valid radius!");
    return;
  }

  const circumference = (2 * Math.PI * radius).toFixed(2);
  const area = (Math.PI * radius * radius).toFixed(2);

  document.getElementById("circumference").innerText = `Circumference: ${circumference} units`;
  document.getElementById("area").innerText = `Area: ${area} square units`;
}
