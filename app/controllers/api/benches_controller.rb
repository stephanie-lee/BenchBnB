class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])

    render :index
  end
end
