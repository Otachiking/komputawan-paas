from flask import Flask, render_template, request

app = Flask(__name__, template_folder="../templates", static_folder="../static")

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        radius = float(request.form["radius"])
        circumference = 2 * 3.14159 * radius
        area = 3.14159 * radius * radius
        return render_template("index.html", result=True, radius=radius, 
                               circumference=circumference, area=area)
    return render_template("index.html", result=False)

# Export Flask app as a module for Vercel
app = app
