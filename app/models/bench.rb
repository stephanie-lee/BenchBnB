class Bench < ActiveRecord::Base
  def self.in_bounds(bounds)
    benches = []
    sw_bound_lat, sw_bound_lng = bounds["southWest"]["lat"].to_f,
                                 bounds["southWest"]["lng"].to_f
    ne_bound_lat, ne_bound_lng = bounds["northEast"]["lat"].to_f,
                                 bounds["northEast"]["lng"].to_f

    Bench.all.each do |bench|
      if (bench.lat.between?(sw_bound_lat, ne_bound_lat)) &&
         (bench.lng.between?(sw_bound_lng, ne_bound_lng))
            benches.push(bench)
      end
    end
    return benches
  end
end
