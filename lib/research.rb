module ResearchHelper

  def journal_papers
    @items.select { |item| item[:kind] == 'journal_paper' }
  end

  def conference_papers
    @items.select { |item| item[:kind] == 'conference_paper' }
  end
end

include ResearchHelper
