
= Pilatus

Pilatus is a small javascript library for loading the result of a Yahoo Pipe in a web page.

== usage

For instance :

  <script src='/javascripts/pilatus.js'><script>

  <div id='feed'></div>

  <script>
    Pilatus.loadAndRender(
      "feed",
      "http://pipes.yahoo.com/pipes/pipe.run?_id=XGwyd_LA3RGNSAMs6icw5g");
  </script>


== testing

Pilatus comes with a tiny Ruby Rack application.

  ruby start.rb

then point your browser to http://localhost:4567


== source

The source is under public/ (along with the demo index.html page)

http://github.com/jmettraux/pilatus

    git clone git://github.com/jmettraux/pilatus.git


== author

John Mettraux, jmettraux@gmail.com
http://jmettraux.wordpress.com


== links

http://pipes.yahoo.com
http://rack.rubyforge.org/
http://en.wikipedia.org/wiki/Pilatus

