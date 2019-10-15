from flask_script import Manager, Server
from server import app

manager = Manager(app)
manager.add_command('runserver', Server())

@manager.shell
def make_shell_context():
    return dict(app=app)

if __name__ == '__main__':
    manager.run()
