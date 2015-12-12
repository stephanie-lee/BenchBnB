json.array! @benches do |bench|
  json.extract! bench, :id, :description
end
