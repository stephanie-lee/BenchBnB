# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.create!(
  description: "Mission Full House",
  lat: 37.756366,
  lng: -122.416782
)

Bench.create!(
  description: "App Academy",
  lat: 37.780983,
  lng: -122.411437
)

Bench.create!(
  description: "Random Embarcardero Spot",
  lat: 37.781536,
  lng: -122.388123
)
