var indexTemplate = `<article class="py-8 horizontal-card border-celeste border-b-2">
  {{#newsImageSrc}}
    <figure class="w-full h-48 sm:h-64 p-4 bg-celeste relative z-0 flex items-center justify-center mb-4 lg:mb-0">
      <img src="{{ newsImageSrc }}" class="object-fit-cover absolute h-full w-full pin">
    </figure>
  {{/newsImageSrc}}
  {{^newsImageSrc}}
    <figure class="w-full h-48 sm:h-64 p-4 bg-celeste relative z-0 flex items-center justify-center mb-4 lg:mb-0">
      <div class="text-camouflage-green opacity-75 fill-current h-full p-12">
        <img src="/assets/img/icon-newspaper.svg" class="h-full">
      </div>
    </figure>
  {{/newsImageSrc}}
  <div>
    <h3 class="text-2xl mt-4 sm:mt-0">
      <a href="/{{ url }}">
        {{{_highlightResult.title.value}}}
      </a>
    </h3>
    <div class="text-shark my-4">
      {{#summary}}
        {{{_highlightResult.summary.value}}}
      {{/summary}}
      {{^summary}}
        {{{_snippetResult.body.value}}}{{^_snippetResult.body}}…{{/_snippetResult.body}}
      {{/summary}}
    </div>
    <div>
      <a href="/{{ url }}">Read More »</a>
    </div>
  </div>
</article>`;