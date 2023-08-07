from flask import Flask, render_template


def configure_render_view_paths(app: Flask):
    print("app: ", app)

    @app.route('/')
    def home():
        return render_template("index.html")
