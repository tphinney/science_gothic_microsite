---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<div class="static"></div>

<nav>
  <ul>
    <li id="home">Science Gothic</li>
    <li id="menu_button" class="SG_smallcaps">Menu</li>
    <li id="download" class="SG_smallcaps">Download</li>
  </ul>
</nav>

<div id="menu">
  <ul>
    <li id="home">Science Gothic</li>
    <li id="type tester">Type Tester</li>
    <li id="about">About</li>
    <li id="colophon">Colophon</li>
  </ul>
</div>

<div class="content_container">

  <div class="section" id="intro">
    <div class="grid_container">
     {% include sections/intro.md %}
    </div>
  </div><div class="section" id="type_tester">
    <div class="grid_container">
     {% include sections/type_tester.md %}
   </div>
  </div>

</div>
