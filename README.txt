
= Pilatus

Pilatus is a small javascript library for loading the result of a Yahoo Pipe in a web page.

== usage

For instance :

  <script src='/pilatus.js'><script>

  <div id='feed'></div>

  <script>
    Pilatus.loadAndRender(
      "feed",
      "http://pipes.yahoo.com/pipes/pipe.run?_id=XGwyd_LA3RGNSAMs6icw5g");
  </script>

(see http://github.com/jmettraux/pilatus/tree/master/public/index.html)


== CSS

The pipe result, once rendered will look like :

  <div class="pilatus_entry">
    <div class="pilatus_title">todo #23083 : implemented QueuedDbHistory (used in ruote-rest)</div>
    <div class="pilatus_link">
      <a href="http://github.com/jmettraux/ruote/commit/c36912c9bde3ff7ddbbaa48ee971acb76ccb1744">http://github.com/jmettraux/ruote/commit/c36912c9bde3ff7ddbbaa48ee971acb76ccb1744</a>
    </div>
    <div class="pilatus_author_name">John Mettraux</div>
    <div class="pilatus_pubDate">2008-12-02T22:28:14-08:00</div>
    <div class="pilatus_description">
      <pre>m CHANGELOG.txt m lib/openwfe/extras/expool/dbhistory.rb todo #23083 : implemented QueuedDbHistory (used in ruote-rest)</pre>
    </div>
  </div>

You can change the CSS prefix by doing

  Pilatus.setCssPrefix('myprefix');

before the call to Pilatus.loadAndRender(...)

(see http://github.com/jmettraux/pilatus/tree/master/public/index.html for commented out customization examples)


== testing

Pilatus comes with a tiny Ruby Rack/Mongrel application.

(if necessary

  sudo gem install rack mongrel

)

  ruby start.rb

then point your browser to http://localhost:4567


== license

The license is the MIT one (see LICENSE.txt)


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

