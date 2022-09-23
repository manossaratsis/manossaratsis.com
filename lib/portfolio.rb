module PortfolioHelper

  def writing_projects
    dps = @items.select { |item| item[:kind] == 'writing_project' }
    dps.sort_by { |dp| dp[:title] }
  end
end

include PortfolioHelper
