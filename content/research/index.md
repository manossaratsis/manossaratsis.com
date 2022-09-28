---
title: Research
description: I'm building tools to measure the climate footprint of cities.

---
* TOC
{:toc}
{:.sidebar}

# I'm building tools to measure the climate footprint of cities.
---

You can't manage what you can't measure. The first step to making our buildings and cities more sustainable is quantifying what does and doesn't work about them. My research focuses on city-scale climate metrics for energy, daylighting, and walkability. My goal is to enable the proliferation of clean energy and minimal footprint design in our built environment.

## Journals

<% journal_papers.each do |paper| %>
<section class="tile" style="background-image: url(<%= asset_path(paper[:image]) %>)">
    <p class="title"><%= link_to paper[:title], paper.identifier.without_ext %></p>
    <p class="description"><%= paper[:description] %></p>
    <aside>Authored by <%= paper[:authored_by] %></aside>
    <div class="filter" />
</section>
<% end %>

## Conferences

<% conference_papers.each do |paper| %>
<section class="tile" style="background-image: url(<%= asset_path(paper[:image]) %>)">
    <p class="title"><%= link_to paper[:title], paper.identifier.without_ext %></p>
    <p class="description"><%= paper[:description] %></p>
    <aside>Authored by <%= paper[:authored_by] %></aside>
    <div class="filter" />
</section>
<% end %>
