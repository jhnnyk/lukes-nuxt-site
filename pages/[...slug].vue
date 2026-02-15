<template>
  <ContentDoc>
    <template #default="{ doc }">
      <article class="content-article">
        <h1>{{ doc.title || "Untitled Document" }}</h1>
        <ContentRenderer :value="doc" />
      </article>
    </template>

    <template #not-found>
      <div class="not-found-page">
        <h1>404 - Page Not Found</h1>
        <p>The requested document could not be located on the server.</p>
        <p>
          Path: <code>{{ $route.path }}</code>
        </p>
      </div>
    </template>
  </ContentDoc>
</template>
