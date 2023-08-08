from flask import Flask, render_template


def configure_render_view_paths(app: Flask):
    print("app: ", app)

    @app.route('/')
    def home_View():
        return render_template("index.html")

    @app.route("/login")
    def login_view():
        return render_template("login.html")
