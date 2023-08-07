from flask import Flask
from flaskr.views import configure_render_view_paths


def create_app():
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    configure_render_view_paths(app)
    return app
