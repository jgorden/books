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

  def show
    client = Goodreads::Client.new(Goodreads.configuration)
    session[:id] = params[:id].to_i
    shelf = client.shelf(params[:id].to_i, 'read')
    render :nothing => true, :status => 200
  end

  def destroy
    session.destroy
    p 'that should do it!'
    p session[:id]
    render :nothing => true, :status => 200
  end
end
