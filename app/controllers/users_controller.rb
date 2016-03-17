class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    client = Goodreads::Client.new(Goodreads.configuration)
    if session[:id]
      shelf = client.shelf(session[:id], 'read')
      render json: shelf
    else
      render :nothing => true, :status => 200
    end
  end

  # route to collect more books from certain page of 'read' shelf
  def page
    client = Goodreads::Client.new(Goodreads.configuration)
    if session[:id]
      shelf = client.shelf(session[:id], 'read', 'page': params[:_json])
      render json: shelf
    else
      render :nothing => true, :status => 200
    end
  end

  # sets user session
  def show
    client = Goodreads::Client.new(Goodreads.configuration)
    session[:id] = params[:id].to_i
    render :nothing => true, :status => 200
  end

  def destroy
    session.destroy
    render :nothing => true, :status => 200
  end
end
