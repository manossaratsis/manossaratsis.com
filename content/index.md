---
title: Home
description: I am an architect, urbanist, and entrepreneur building solutions at the nexus of cities and climate.
image: /img/home.jpg
---

# I am an [architect](/portfolio), [urbanist](/research), &amp; [entrepreneur](https://stationa.com) building solutions at the nexus of cities &amp; climate.

<div class="featured-projects-container">
<% featured_projects.each do |project| %>
<%= link_to project.identifier.without_ext, class: 'featured-tile-link' do %>
<section class="featured-tile" style="background-image: url(<%= asset_path(project[:image]) %>)">
    <div class="featured-filter" />
    <div class="featured-content">
        <p class="title"><%= project[:title] %></p>
        <p class="description"><%= project[:description] %></p>
        <aside>Created at <%= project[:created_at] %></aside>
    </div>
</section>
<% end %>
<% end %>
</div>
