module PortfolioHelper

  def presentation_projects
    dps = @items.select { |item| item[:kind] == 'presentation_project' }
    dps.sort_by { |dp| dp[:created_at] }.reverse!
  end

  def writing_projects
    dps = @items.select { |item| item[:kind] == 'writing_project' }
    dps.sort_by { |dp| dp[:created_at] }.reverse!
  end
end

include PortfolioHelper
