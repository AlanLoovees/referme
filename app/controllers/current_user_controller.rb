# frozen_string_literal: true

class CurrentUserController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user, status: :ok
  end

  def show
    invited_users = User.where(invited_by: current_user)
    render status: :ok, json: { invited_users: invited_users }
  end
end
