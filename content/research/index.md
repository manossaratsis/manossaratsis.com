---
title: Research
description: The first step to making our buildings and cities more sustainable is quantifying what does and doesn't work about them.
---
* TOC
{:toc}
{:.sidebar}

# Measuring the performance of our built environment.
---

You can't manage what you can't measure. The first step to making our buildings and cities more sustainable is quantifying what does and doesn't work about them. My research focuses on building-scale and urban-scale environmental performance metrics for operational energy, daylighting, microclimatic conditions and walkability. My goal is to enable the proliferation of clean energy and minimal footprint design in our built environment.

## Journal Publications

<% journal_papers.each do |paper| %>
<section class="card">
  <p class="title"><%= link_to paper[:title], paper.identifier.without_ext %></p>
  <p class="description"><%= paper[:description] %></p>
  <aside>Authored by <%= paper[:authored_by] %></aside>
</section>
<% end %>

## Conference Proceedings

<% conference_papers.each do |paper| %>
<section class="card">
  <p class="title"><%= link_to paper[:title], paper.identifier.without_ext %></p>
  <p class="description"><%= paper[:description] %></p>
  <aside>Authored by <%= paper[:authored_by] %></aside>
</section>
<% end %>
