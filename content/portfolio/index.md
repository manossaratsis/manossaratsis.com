---
title: Portfolio
description: I'm staying curious and applying my design skills across scales and problems.

---
* TOC
{:toc}
{:.sidebar}

# I'm applying my design skills across scales and problems.
---

Over the years, I have worked on various projects ranging from urban design competitions and
architecture studios, to software development and product design. These projects have sharpened my
ability to think like a designer, challenged my curiosity, and helped me shape my platform.

## Presentations

<% presentation_projects.each do |project| %>
<section class="tile" style="background-image: url(<%= asset_path(project[:image]) %>)">
    <p class="title"><%= link_to project[:title], project.identifier.without_ext %></p>
    <p class="description"><%= project[:description] %></p>
    <aside>Created at <%= project[:created_at] %></aside>
    <div class="filter" />
</section>
<% end %>

## Writings

<% writing_projects.each do |project| %>
<section class="tile" style="background-image: url(<%= asset_path(project[:image]) %>)">
    <p class="title"><%= link_to project[:title], project.identifier.without_ext %></p>
    <p class="description"><%= project[:description] %></p>
    <aside>Created at <%= project[:created_at] %></aside>
    <div class="filter" />
</section>
<% end %>
