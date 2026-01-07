---
title: Home
description: I am an architect, urbanist, and entrepreneur building solutions at the nexus of cities and climate.
image: /img/home.jpg
---

# I am an [architect](/portfolio), [urbanist](/research), &amp; [entrepreneur](https://stationa.com) building solutions at the nexus of cities &amp; climate.

## Featured projects

<% featured_projects.each do |project| %>
<section class="tile" style="background-image: url(<%= asset_path(project[:image]) %>)">
    <p class="title"><%= link_to project[:title], project.identifier.without_ext %></p>
    <p class="description"><%= project[:description] %></p>
    <aside>Created at <%= project[:created_at] %></aside>
    <div class="filter" />
</section>
<% end %>
