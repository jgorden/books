class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    client = Goodreads::Client.new(Goodreads.configuration)
    shelf = client.shelf(29613603, 'read')
    p shelf
    render json: {'should': 'work'}
  end
end
