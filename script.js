function calculate() {
  const radius = document.getElementById("radius").value;
  if (!radius || radius <= 0) {
    alert("Masukkan jari-jari yang valid!");
    return;
  }

  const circumference = (2 * Math.PI * radius).toFixed(2);
  const area = (Math.PI * radius * radius).toFixed(2);

  document.getElementById("circumference").innerText = `Keliling Lingkaran: ${circumference} cm`;
  document.getElementById("area").innerText = `Luas Lingkaran: ${area} cm²`;
}
