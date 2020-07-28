class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :supplement_id
end
