module PortfolioHelper

  def presentation_projects
    dps = @items.select { |item| item[:kind] == 'presentation_project' }
    dps.sort_by { |dp| dp[:created_at] }.reverse!
  end

  def writing_projects
    dps = @items.select { |item| item[:kind] == 'writing_project' }
    dps.sort_by { |dp| dp[:created_at] }.reverse!
  end

  def featured_projects
    fps = @items.select { |item| item[:featured] == true }
    fps.sort_by { |fp| fp[:created_at] }.reverse!
  end
end

include PortfolioHelper
