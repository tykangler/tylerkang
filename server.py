import subprocess
import http.server
import os
import re
import time
import asyncio
from functools import partial
from watchdog.observers import Observer
from watchdog.events import RegexMatchingEventHandler, FileModifiedEvent

class sass_watcher:
   class sass_event_handler(RegexMatchingEventHandler):
      def __init__(self, entry, out):
         super().__init__(regexes=[r".*\.s[ac]ss$"])
         self.entry = os.path.abspath(entry)
         self.out = os.path.abspath(out)

      def recompile_sass(self):
         subprocess.call(f'sass {self.entry} {self.out}', shell=True)

      def on_modified(self, event):
         print(f"{event.src_path} changed")
         self.recompile_sass()
         
   def __init__(self, directory, entry, out):
      self.event_handler = self.sass_event_handler(entry, out)
      self.observer = Observer()
      self.observer.schedule(self.event_handler, directory, recursive=True)

   def run(self):
      print(f'watching files at {self.event_handler.entry}')
      self.observer.start()

class server:
   def __init__(self, directory):
      port = ('', 8080)
      handler = partial(http.server.SimpleHTTPRequestHandler, directory=directory)
      self.server = http.server.HTTPServer(port, handler)

   def run(self):
      print(f'starting server at port {self.server.server_port}')
      self.server.serve_forever()

def main():
   _watcher = sass_watcher('./src/styles', './src/styles/main.scss', './src/styles/css/main.css')
   _server = server('./src')
   _watcher.run()
   _server.run()

if __name__ == "__main__":
   main()