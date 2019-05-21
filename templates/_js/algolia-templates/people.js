"use strict";

var indexTemplate = "<div class=\"block\">\n  <div class=\"text-shark md:flex items-start\">\n    <figure class=\"block h-12 w-12 md:w-1/4\">\n      <a class=\"block\" href=\"/{{ url }}\" aria-label=\"Profile of {{ title }}\">\n        {{#portrait}}\n          <figure class=\"aspect-ratio-box aspect-ratio-square\">\n            <img\n              src=\"{{ portrait }}\"\n              alt=\"Portrait of {{ jobTitle }}, {{ title }}\"\n              class=\"aspect-ratio rounded-full object-fit-cover\">\n            </figure>\n        {{/portrait}}\n        {{^portrait}}\n          <div class=\"text-camouflage-green opacity-75 fill-current h-full  bg-celeste rounded-full\">\n            <img src=\"/assets/img/icon-user.svg\" class=\"h-full block\" alt=\"\">\n          </div>\n        {{/portrait}}\n      </a>\n    </figure>\n    <div class=\"pt-4 md:pt-0 md:pl-6 md:w-3/4\">\n      <h2 class=\"m-0 text-2xl\"><a aria-label=\"{{ title }}, {{jobTitle }}\" href=\"/{{ url }}\">{{ title }}</a></h2>\n      <p class=\"mt-2\">\n        {{ jobTitle }}\n        {{#department}}<br>{{ department }}{{/department}}\n        {{#email}}<br><a href=\"mailto:{{ email }}\" aria-label=\"Email {{ title }} at {{ email }}\">Email</a>{{/email}}\n      </p>\n    </div>\n  </div>\n</div>";