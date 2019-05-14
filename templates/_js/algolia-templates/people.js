var indexTemplate = `<div class="block">
  <div class="text-shark md:flex items-start">
    <figure class="block h-12 w-12 md:w-1/4">
      <a class="block" href="/{{ url }}">
        {{#portrait}}
          <figure class="aspect-ratio-box aspect-ratio-square">
            <img
              src="{{ portrait }}"
              alt="Portrait of {{ jobTitle }}, {{ title }}"
              class="aspect-ratio rounded-full object-fit-cover">
            </figure>
        {{/portrait}}
        {{^portrait}}
          <div class="text-camouflage-green opacity-75 fill-current h-full  bg-celeste rounded-full">
            <img src="/assets/img/icon-user.svg" class="h-full block">
          </div>
        {{/portrait}}
      </a>
    </figure>
    <div class="pt-4 md:pt-0 md:pl-6 md:w-3/4">
      <h3 class="m-0 text-2xl"><a href="/{{ url }}">{{ title }}</a></h3>
      <p class="mt-2">
        {{ jobTitle }}
        {{#department}}<br>{{ department }}{{/department}}
        {{#email}}<br><a href="mailto:{{ email }}">Email</a>{{/email}}
      </p>
    </div>
  </div>
</div>`;