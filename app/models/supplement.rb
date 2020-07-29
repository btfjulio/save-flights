class Supplement < ApplicationRecord
  has_many :reviews

  before_create :slugfy

  def slugfy
    self.slug = name.parameterize
  end

  def avg_score
    return 0 unless reviews.count != 0
    reviews.average(:score).round(2).to_f
  end
end
