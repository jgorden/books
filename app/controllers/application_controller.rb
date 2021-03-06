class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  rescue_from Goodreads::NotFound, :with => :not_found

  def not_found
    respond_to do |format|
      format.json { render :text => '{"error": "User not found"}' }
    end
  end
end
