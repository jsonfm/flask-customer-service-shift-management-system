from flask import Flask, render_template


def configure_render_view_paths(app: Flask):
    print("app: ", app)

    @app.route('/')
    def home_View():
        return render_template("index.html")

    @app.route("/login")
    def login_view():
        return render_template("login.html")

    @app.route("/shifts")
    def shifts_view():
        return render_template("shifts.html")

    # Admin
    @app.route("/admin")
    def admin_view():
        return render_template("admin/index.html")

    @app.route("/admin/users")
    def admin_users_view():
        return render_template("admin/users.html")
