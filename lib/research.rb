module ResearchHelper

  def journal_papers
    jps = @items.select { |item| item[:kind] == 'journal_paper' }
    jps.sort_by { |jp| jp[:title] }
  end

  def conference_papers
    cps = @items.select { |item| item[:kind] == 'conference_paper' }
    cps.sort_by { |cp| cp[:title] }
  end
end

include ResearchHelper
