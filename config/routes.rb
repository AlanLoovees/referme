# frozen_string_literal: true

Rails.application.routes.draw do
  get "/current_user", to: "current_user#index"
  get "/user_invites", to: "current_user#show"

  devise_for :users, path: "api/v1/", path_names: {
    sign_in: "login",
    sign_out: "logout",
    registration: "signup"
  },
  controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations",
    invitations: "users/invitations"
  }

  root "home#index"
  get "*path", to: "home#index", via: :all
end
